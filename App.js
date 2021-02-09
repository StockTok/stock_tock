import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/Register";

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
          </Stack.Navigator>
          <Stack.Screen name="Register" component={RegisterScreen} />
        </NavigationContainer>
      );
    }

    // if logged in,
    // return (navigators will be placed here such as main screen, setting, etc..);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
