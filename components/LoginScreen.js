import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            placeholder="email"
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292a2b",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    color: "#fefefe",
    marginBottom: 20,
  },
  registerContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#3F5259",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#fefefe",
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
  loginText: {
    color: "#fefefe",
  },
  registerText: {
    color: "#F2A950",
  },
});
