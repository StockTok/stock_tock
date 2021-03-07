import React, { useState } from "react";
import Swipeout from 'react-native-swipeout';
import { StyleSheet, 
  Text, 
  View, 
  ToucableOpacity,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from "react-native";

// import { TouchableOpacity } from "react-native-gesture-handler";

export default function Watchlist() {

  const [search, setSearch] = useState("");

  let find = ['GME', 'AMC', 'NOK', 'BB'];
  
    let swipeoutBtn = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { consolelog.onDelete}
    }];

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}> 
          <TextInput
            style={styles.inputText}
            placeholder = "Search"
            placeholderTextColor = "#F2F3F7"
            onChangeText = {(search) => setSearch(search)}
        />
      </View>
      <Swipeout right={swipeoutBtn}>
      <View>
      <Text>Swipe me left</Text>
      </View>
      </Swipeout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121", // Background Color 
    alignItems: "center",
    // justifyContent: "center",
  },
  inputText: {
    color: "#F2F3F7",
    height: 50,
  },
  searchBar: { 
    backgroundColor: "#2F2F2F",
    justifyContent: 'flex-start',
    height: 50,
    marginTop: 50,
   // paddingTop: 50,
    width: "80%",
    alignItems: "center", 
    borderRadius: 25,
   // height: "%",
  },
});

