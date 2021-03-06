import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import {createAccount} from "../../all_scripts/newLogin.js"

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    /*
    const { name, email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });*/
    const { name, email, password } = this.state;
    createAccount(name, password);
  }

  render() {
    return (
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

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.onSignUp()}
          title="Sign Up"
        >
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
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
