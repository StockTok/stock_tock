import React from "react";
// module.exports = {createAccount};
import{ createAccount } from "../../all_scripts/newLogin.js";
import{ getAllStockData} from "../../all_scripts/newStockData.js";
import{ getAllNews} from "../../all_scripts/newNews.js";
import{ getAllDataMethod} from "../../all_scripts/getAllData.js";
import{getFollowedArray} from "../../all_scripts/newStockArrays.js";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Alert } from "react-native";

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


  async onSignUp() {

    //const { name, email, password } = this.state;
    //createAccount(name, password);
    const {name, password} = this.state;
    
    //await getAllStockData();
    //await getAllNews();
    let userData = await getAllDataMethod(name, password);
    if (userData === false) 
    {
      alert("User does not exit");
      console.log("User does not exit");
    }
    else
    {
      console.log(userData.username);
      console.log(userData.password);
      console.log(userData.followed);
    }
    /*
    else
    {
      console.log('\nStockUserObject ===\n')
      console.log(userData.username);
      console.log(userData.password);
      console.log(userData.followed);
      let stockKeys = Object.keys(userData.stocks);
      for(let i = 0; i<5; i++)
      {
        console.log(userData.stocks[stockKeys[i]].symbol);
        console.log(userData.stocks[stockKeys[i]].name);
        console.log(userData.stocks[stockKeys[i]].prices);
        console.log(userData.stocks[stockKeys[i]].news);
      }
    }*/
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
