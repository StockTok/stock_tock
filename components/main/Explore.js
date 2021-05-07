import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { getAllDataMethod } from "../../all_scripts/getAllData.js";
import { shuffleArticles } from "../../all_scripts/shuffleNews.js";
GLOBAL = require("../GlobalState.js");



export default function Explore() {

  const [newsArray, setNewsArray] = useState([]);
  const [loadedNewsArray, setLoadedNewsArray] = useState(false);


  //useEffect(() => {
   // console.log("hello world");
   // async function getMyData() {
    //  let userData = await getAllDataMethod(GLOBAL.USERNAME);
    //  console.log(userData);
    //  console.log("inside getMyData " + userData.followed);
    //  setStockUserArray(userData.followed);
    //  setStockDictionary(userData.stocks);
    //  var newArray = await shuffleArticles(userData);
     // console.log("newsArray called"+newArray);
    //  setNewsArray(newArray);
//}
  //  console.log("loaded? " + loadedNewsArray);
  //  if (loadedNewsArray === false) {
 //     console.log("call to database");
      //anytime edits are made we need to setLoadedArray(false) to ensure a reload of the correct elements
  //    setLoadedNewsArray(true);
  //    getMyData();
  //  }
 // }, []);

  console.log(newsArray);

  return (
    <View style={styles.container}>
      <CardStack
        style={styles.content}
        renderNoMoreCards={() => (
          <Text style={styles.nomoreText}>No more cards</Text>
        )}
        ref={(swiper) => {
          swiper;
        }}
        onSwiped={() => console.log("onSwiped")}
        onSwipedLeft={() => console.log("onSwipedLeft")}
      >
        <Card style={[styles.card]}>
          <Text style={styles.label}>a</Text>
        </Card>
        <Card style={[styles.card]}>
          <Text style={styles.label}>b</Text>
        </Card>
        <Card style={[styles.card]}>
          <Text style={styles.label}>c</Text>
        </Card>
        <Card style={[styles.card]}>
          <Text style={styles.label}>D</Text>
        </Card>
        <Card style={[styles.card]}>
          <Text style={styles.label}>E</Text>
        </Card>
      </CardStack>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#212121",
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "#F2A950",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  label: {
    lineHeight: 450,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent",
    textTransform: "uppercase",
  },
  nomoreText: {
    fontWeight: "700",
    fontSize: 20,
    color: "gray",
  },
});
