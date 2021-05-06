import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.registerContainer}>
        <Text style={styles.loginText}> New user? </Text>
        <TouchableOpacity>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate("Register")}
          >
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#F2F3F7"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#F2F3F7"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={
          () => firebase.auth().signInWithEmailAndPassword(email, password)
          // console.log(GlobalState.username)
        }
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    color: "#EEEEEE",
    marginBottom: 20,
  },
  registerContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#2F2F2F",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#F2F3F7",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#F2A950",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: "#F2F3F7",
  },
  registerText: {
    color: "#F2A950",
  },
});
