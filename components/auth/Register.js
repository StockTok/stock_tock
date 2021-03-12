import React from "react";
// module.exports = {createAccount};
import{ createAccount } from "../../all_scripts/newLogin.js";
import{ readData } from "../../all_scripts/newStockArrays.js";
import{ getAllData} from "../../all_scripts/newStockData.js";
import{ getAllNews} from "../../all_scripts/newNews.js";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";


/**
import Parse from "parse/react-native.js";

Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");

Parse.serverURL = 'https://parseapi.back4app.com/';


async function saveNewPerson(username, password) {

const Account = Parse.Object.extend("Account");
const account  = new Account()
//{
  account.set("username", username);
  account.set("password", password);

  try{
    let result = await account.save()
    alert('New object created with objectId: ' + result.id);
  }catch(error){
      alert('Failed to create new object, with error code: ' + error.message);
  }

 // const Person = Parse.Object.extend("Person");
  //const person = new Person();

 // person.set("name", "John Snow");
 // person.set("age", 27);
 // try{
 //     let result = await person.save()
 //     alert('New object created with objectId: ' + result.id);
  //}catch(error){
  //    alert('Failed to create new object, with error code: ' + error.message);
 // }
}  */

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

    //const { name, email, password } = this.state;
    //createAccount(name, password);
    //const {name, password} = this.state;
    //readData(name);
    //getAllData();
    getAllNews();
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
