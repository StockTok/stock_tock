import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { Deck, ListItem, Button, Icon } from 'react-native-elements'
import Watchlist from "./Watchlist.js";
// import stocks from '../test.json';

export default function Explore() {
  
  return (
    <View style={styles.container}>
      <CardStack
        style={styles.content}
        renderNoMoreCards={() => (
          <Text style={{ fontWeight: "700", fontSize: 18, color: "gray" }}>
            No more cards
          </Text>
        )}
        ref={(swiper) => {
          swiper;
        }}
        onSwiped={() => console.log("right swipe")}
        onSwipedLeft={() => console.log("left swipe")}
      >
        <Card style={[styles.card]}>
          <Text style={styles.label}>amzn</Text>
        </Card>
        <Card style={[styles.card]}>
          <Text style={styles.label}>appl</Text>
        </Card>
        <Card style={[styles.card]}>
          <Text style={styles.label}>googl</Text>
        </Card>
        <Card style={[styles.card]}>
          <Text style={styles.label}>msft</Text>
        </Card>
        <Card style={[styles.card]}>
          <Text style={styles.label}>tsla</Text>
        </Card>
      </CardStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2f3640",
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "#dcdde1",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
  },
   label: {
    // loader: "json-loader",
     lineHeight: 450,
     textAlign: "center",
     fontSize: 55,
     fontFamily: "System",
     color: "#2f3640",
     backgroundColor: "transparent",
     textTransform: 'uppercase'
   },
});
