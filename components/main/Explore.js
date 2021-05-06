import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";

export default function Explore() {
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
