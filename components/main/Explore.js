import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SwipeCards from "react-native-swipe-cards";
import { getAllDataMethod } from "../../all_scripts/getAllData.js";
import { Linking } from "react-native";

GLOBAL = require("../GlobalState.js");
var proof = 0;
export default function Explore() {
  const [userDictionary, setUserDictionary] = useState(null);
  const [newsArray, setNewsArray] = useState([]);
  const [loadedNewsArray, setLoadedNewsArray] = useState(false);
  const [followedArray, setFollowedArray] = useState([]);
  const [userObject, setUserObject] = useState(null);
  const [title, setTitle] = useState("news");
  const [count, setCount] = useState(0);
  const [cardStack, setCardStack] = useState(["hello", "world"]);

  /*
  we need to keep the double await so dont delete it
  we fixed the shuffled articles to contain the news stuff
  */
  useEffect(() => {
    async function getMyData() {
      //await getAllStockData();
      let userData = await getAllDataMethod(GLOBAL.USERNAME);
      userData = await getAllDataMethod(GLOBAL.USERNAME); // we need this double
      setUserObject(userData);
      setFollowedArray(userData.followed);
      setUserDictionary(userData.stocks);
      try {
        let shuffledArticles = [];
        if (userData.followed.length > 0) {
          //we ditched the followed array idea
          for (let i = 0; i < userData.followed.length; i++) {
            shuffledArticles.push(
              ...userData.stocks[userData.followed[i]]["news"]
            );
          }
          shuffledArticles = shuffle(shuffledArticles);
          setNewsArray(shuffledArticles);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (loadedNewsArray === false || newsArray.length === 0) {
      console.log("call to database");
      //anytime edits are made we need to setLoadedArray(false) to ensure a reload of the correct elements
      setLoadedNewsArray(true);
      getMyData();
    }
    console.log("loaded? " + loadedNewsArray);

    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }

    const swipeNews = () => {
      setTitle(newsArray[count]["title"]);
      console.log("SWIPER NO SWIPING" + newsArray[count]["title"]);
      console.log(title);
      setCount(count + 1);
    };
  }, []);

  const Card = ({ text }) => {
    if (proof > newsArray.length) {
      proof = 0;
    }
    return (
      <View style={[styles.card]}>
        <Text style={styles.cardTitile}>{newsArray[proof]["title"]}</Text>
        <Text
          style={styles.urlInfo}
          onPress={() => Linking.openURL(newsArray[proof]["url"])}
        >
          {newsArray[proof++]["url"]}
        </Text>
      </View>
    );
  };

  const NoMoreCards = () => {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  };

  return (
    <SwipeCards
      // cards={newsArray}
      showRight={false}
      rightView={null}
      //leftText = "hello"
      leftStyle={{ leftText: "hello" }}
      cards={newsArray}
      renderCard={(cardData) => <Card {...cardData} />}
      renderNoMoreCards={() => <NoMoreCards />}
      onRightSwipe={console.log("right swipping ")}
      onLeftSwipe={console.log("left swipping")}
      stack={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#212121",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    backgroundColor: "#212121",
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  content: {
    flex: 1,
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
  cardTitile: {
    fontSize: 30,
    marginTop: 100,
    marginBottom: 30,
    textAlign: "center",
    color: "#FFFF",
  },
  urlInfo: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
});
