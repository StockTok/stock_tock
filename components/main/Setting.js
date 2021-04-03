import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { withNavigation } from 'react-navigation';
import LoginScreen from '../auth/LoginScreen';


/** 
class LoginBox extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
}

  login() {    
    this.props.changeState;
  }

  render() {
    return (
      {...}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={this.login} >                   >
          <Text style={styles.textStyle}>Log In</Text>
      </TouchableOpacity>
    )
  }
}
} */ 

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.signOut =  this.signOut.bind(this);
  }

  signOut(){
    this.props.logout;
    // this.props.navigation.navigate("LoginScreen");
    console.log("onPress");
  }
  
  render(){
  //  const { navigation } = useNavigation(); 

    return (
      <View style={styles.container}>
        <Text style={styles.SettingsTitle}>Settings page</Text>
          <TouchableOpacity
            style={styles.SignOutBtn}
            onPress={() => this.signOut() }
          >
          <Text style={styles.SignOutText}>Sign Out</Text>
          </TouchableOpacity>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
  SettingsTitle: {
    fontSize: 30,
    color: "#EEEEEE",
    marginBottom: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  SignOutText: {
    fontSize: 20,
    color: "#EEEEEE",
  },
  SignOutBtn: {
    width: "125%",
    backgroundColor: "#F2A950",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 10,
  },
});