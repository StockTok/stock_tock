import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import firebase from "firebase";
require("firebase/firestore");

GLOBAL = require('../GlobalState.js');

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
      <Button title="Logout" onPress={() => onLogout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f3640",
    alignItems: "center",
    justifyContent: "center",
  },
});
