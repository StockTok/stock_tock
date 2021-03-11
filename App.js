import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./components/auth/LoginScreen";
import RegisterScreen from "./components/auth/Register";
import MainScreen from "./components/Main";
import ExploreScreen from "./components/main/Explore";
import SettingScreen from "./components/main/Setting";

// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-community/async-storage';
import keys from './constants/keys.js';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

/**
 * A simple function that registers installations of App to Back4App Database.
 */

const Stack = createStackNavigator();

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      loggedIn: true,
    };
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      useEffect(() => {
        createInstallation = async () => {
          const  Installation = Parse.Object.extend(Parse.Installation);
          const  installation = new  Installation();
            
          installation.set('deviceType', Platform.OS);
          await  installation.save();
        };
        
        createInstallation();
      }, []);
      return (
        <View>
          <Text style={styles.container}>Loading...</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initailRouteName="LoginScreen">
            <Stack.Screen
              name="LogIn"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initailRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Explore" component={ExploreScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
