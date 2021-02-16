import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ExploreScreen from "./main/Explore";
import SettingScreen from "./main/Setting";
import WatchlistScreen from "./main/Watchlist";

const Tab = createBottomTabNavigator();

const EmptyScreen = () => {
  return null;
};

export default class Main extends React.Component {
  componentDidMount() {
    // fetch user info
    // fetch stock info
  }
  render() {
    return (
      <Tab.Navigator initialRouteName="Watchlist">
        <Tab.Screen
          name="Watchlist"
          component={WatchlistScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cards-heart"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Explore");
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Setting");
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-cog"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
