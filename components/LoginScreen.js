import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#232323" barStyle="light-content" />
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={(password) => this.setState({ password })}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.btnTxt}>SignUP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292a2b",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  input: {
    width: "90%",
    backgroundColor: "grey",
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnText: {
    color: "#fefefe",
  },
  loginBtn: {
    width: 350,
    backgroundColor: "#808080",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
