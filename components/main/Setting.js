import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import firebase from "firebase";
require("firebase/firestore");

GLOBAL = require("../GlobalState.js");

export default function Setting(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { currentUser } = props;

    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setUser(snapshot.data());
          console.log(snapshot.data());
        } else {
          console.log("does not exist");
        }
      });
  }, [firebase.auth().currentUser.uid]);

  const onLogout = () => {
    GLOBAL.USERNAME = " ";
    firebase.auth().signOut();
  };

  if (user === null) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutBtn} onPress={() => onLogout()}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
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
  logoutBtn: {
    width: "50%%",
    backgroundColor: "#F2A950",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "#F2F3F7",
  },
});
