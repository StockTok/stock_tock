import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/Register";
import MainScreen from "./components/Main";
import ExploreScreen from "./components/main/Explore";
import SettingScreen from "./components/main/Setting";

import * as firebase from "firebase";
import "firebase/firestore";

// API from firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbCKvWMj2drK9wUzkO6I2ViXx9-cwXLIc",
  authDomain: "stock-tock.firebaseapp.com",
  databaseURL: "https://stock-tock-default-rtdb.firebaseio.com",
  projectId: "stock-tock",
  storageBucket: "stock-tock.appspot.com",
  messagingSenderId: "253435229851",
  appId: "1:253435229851:web:c330f33e863eb8fdb7b83e",
};

//make sure that we are not running the firebase instant at the moment
//because if you try to run firebase initialized app, the app will be crushed
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      loggedIn: false,
    };
  }

  componentDidMount() {
    // this will be listning for auth changes (logged in or not)
    // so that we are enable to show
    // the login screen or the loading screen
    // When the database (users' data) is loaded,
    // we will show the login page
    // Otherwise (database is borken or unable to access the database)
    // we will show just message "Loading..."
    firebase.auth().onAuthStateChanged((user) => {
      // user isn't logged in
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
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
