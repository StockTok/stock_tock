// SwipeCards.js
import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

const Card = ({ backgroundColor, text }) => {
  return (
    <View style={[styles.card, {backgroundColor}]}>
      <Text>{text}</Text>
    </View>
  )
}

const NoMoreCards = () => {
  return (
    <View>
      <Text style={styles.noMoreCardsText}>No more cards</Text>
    </View>
  )
}

const Cards = [
  {text: 'Tomato',    backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...',    backgroundColor: 'cyan'},
  {text: 'orange',    backgroundColor: 'orange'},
]

export default class extends Component {
  state = {
      cards: Cards
  }

  onRightSwipe (card) {
    console.log(`Right for ${card.text}`)
  }

  onLeftSwipe (card) {
    console.log(`Left for ${card.text}`)
  }

  onUpSwipe (card) {
    console.log(`Up for ${card.text}`)
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        onRightSwipe={this.onRightSwipe}
        onLeftSwipe={this.onLeftSwipe}
        onUpSwipe={this.onUpSwipe}
        hasUpAction
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})
