import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableOpacityComponent,
} from "react-native";

import { SearchBar } from "react-native-elements";
import { getAllDataMethod } from "../../all_scripts/getAllData.js";
import { saveAllData } from "../../all_scripts/saveData.js";
GLOBAL = require("../GlobalState.js");

export default function Watchlist() {
  const [stockUserArray, setStockUserArray] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [modalVisible, setModalVisable] = useState(false);
  const [loadedArray, setLoadedArray] = useState(false);
  //let stockUserObject = getMyData();

  useEffect(() => {
    async function getMyData() {
      let userData = await getAllDataMethod(GLOBAL.USERNAME);
      console.log("inside getMyData " + userData.followed);
      setStockUserArray(userData.followed);
    }
    console.log("loaded? " + loadedArray);
    if (loadedArray === false) {
      console.log("call to database");
      //anytime edits are made we need to setLoadedArray(false) to ensure a reload of the correct elements
      setLoadedArray(true);
      getMyData();
    }
    //setStockUserObject(getMyData().followed)
    fetch("https://api.npoint.io/6cb04bc60bce8d32c683")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(Array.isArray(stockUserArray));

  const searchFilterFunction = (text) => {
    if (text) {
      setModalVisable(true);
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1,
          width: 500,
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };
  const getItem = (item) => {
    if (stockUserArray.includes(item.title.toLowerCase())) {
      alert("That stock is already in your watchlist");
    } else {
      var newArray = [...stockUserArray, item.title.toLowerCase()];
      console.log(newArray);
      setStockUserArray(newArray);
      saveAllData(GLOBAL.USERNAME, newArray); // this might be working completely
      alert(item.title + " has been added to your watchlist");
    }
  };
  // this is a copy of line 72
  const ItemView_2 = ({ item }) => {
    // we must do a long press for it to delete
    return (
      //{item.title.toUpperCase()}
      <Text style={styles.itemStyle} onLongPress={() => getItem_2(item)}>
        {stockUserArray[item]}
      </Text>
    );
  };

  const ItemSeparatorView_2 = () => {
    return (
      <View
        style={{
          height: 1,
          width: 500,
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };
  const getItem_2 = (item) => {
    // this will delete from the added watchlist
    var newArray = [...stockUserArray];
    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i] === newArray[item]) {
        // this finds and deletes the item from the list
        alert(newArray[i] + " has been deleted from your watchlist");
        newArray.splice(i, 1);
      }
    }
    setStockUserArray(newArray);
    //saveAllData(GLOBAL.USERNAME, newArray);// we havent placed this just yet.
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => setModalVisable(!modalVisible)}
        >
          <Text style={styles.search}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={Object.keys(stockUserArray)}
          //renderItem={({ item }) => <Text>{stockUserArray[item]}</Text>}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView_2}
          renderItem={ItemView_2}
          /*data = {filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}*/
        />
        <Modal
          animationType="slide"
          //transparent = {true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisable(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <SearchBar
              round
              searchIcon={{ size: 24 }}
              onChangeText={(text) => searchFilterFunction(text)}
              //onClear={(text) => searchFilterFunction('')}
              onClear={(text) => searchFilterFunction("")}
              placeholder="Type Here..."
              value={search}
            />
            <View style={styles.flatListStyle}>
              <FlatList
                /*data = {Object.keys(stockUserArray)}
                // renderItem = {({ item }) => <Text>{stockUserArray[item]}</Text>}*/
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
              />
            </View>
            <TouchableOpacity
              style={styles.clearBtn}
              onPress={() => setModalVisable(!modalVisible)}
            >
              <Text style={styles.search}>Back</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff9fb",
    justifyContent: "center",
    alignItems: "center",
  },
  itemStyle: {
    padding: 10,
  },
  searchBtn: {
    width: "100%",
    backgroundColor: "#F2A950",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  clearBtn: {
    width: "100%",
    backgroundColor: "#F2A950",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  search: {
    color: "#F2F3F7",
  },
  modalView: {
    padding: 10,
    paddingTop: 50,
  },
  flatListStyle: {
    height: "75%",
  },
});
