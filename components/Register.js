import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome!</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="name"
              placeholderTextColor="white"
              onChangeText={(name) => this.setState({ name })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="email"
              placeholderTextColor="white"
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="password"
              placeholderTextColor="white"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
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
