import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Watchlist() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Watchlist page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
});
