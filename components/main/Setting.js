import React from "react";
import { StyleSheet, 
  Text, 
  View,
  TouchableOpacity
 } from "react-native";

export default function Setting() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log Out</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#292a2b",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#F2A950",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
