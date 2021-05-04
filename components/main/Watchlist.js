import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  View, 
  FlatList, 
  Modal,
  TouchableOpacity,
  TouchableOpacityComponent, 
} from 'react-native';

import { SearchBar } from 'react-native-elements';
import { getAllDataMethod } from '../../all_scripts/getAllData.js';
GLOBAL = require('../GlobalState.js');

export default function Watchlist() {
  
  const [stockUserArray, setStockUserArray] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [modalVisible, setModalVisable] = useState(false);
  const [loadedArray, setLoadedArray] = useState(false);
  //let stockUserObject = getMyData();

  useEffect(() => {
    async function getMyData(){
      let userData = await getAllDataMethod(GLOBAL.USERNAME);
      console.log('inside getMyData ' + userData.followed);
      setStockUserArray(userData.followed);
     }
     console.log('loaded? ' + loadedArray);
    if(loadedArray === false){
      console.log('call to database')
      //anytime edits are made we need to setLoadedArray(false) to ensure a reload of the correct elements
      setLoadedArray(true);
      getMyData();
    }
    //setStockUserObject(getMyData().followed)
    fetch('https://api.npoint.io/565c60051f6b1592e9da')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log('from setter ' + stockUserArray);
  

  const searchFilterFunction = (text) => {
    if (text) {
      setModalVisable(true);
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
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
        {'.'}
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
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    alert(' Title: ' + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 5 }}>
      <View style={styles.container}>
        <TouchableOpacity style = {styles.searchBtn} 
          onPress={() => setModalVisable(!modalVisible)}>
            <Text style = {styles.search}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data = {Object.keys(stockUserArray)}
          renderItem = {({ item }) => <Text>{stockUserArray[item]}</Text>}
          /*data = {filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}*/
        />
        <Modal
          animationType = "slide"
          //transparent = {true}
          visible = {modalVisible}
          onRequestClose = {() => {
            setModalVisable(!modalVisible);
          }}
        >
          <View style = {styles.modalView}>
            <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            //onClear={(text) => searchFilterFunction('')}
            onClear={(text) => searchFilterFunction('')}
            placeholder="Type Here..."
            value={search}
            />
            <View style = {styles.flatListStyle} >
              <FlatList
                /*data = {Object.keys(stockUserArray)}
                // renderItem = {({ item }) => <Text>{stockUserArray[item]}</Text>}*/
                data = {filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                />
            
            </View>
              <TouchableOpacity style = {styles.clearBtn} 
                onPress={() => setModalVisable(!modalVisible)}>
                  <Text style = {styles.search}>Back</Text>
              </TouchableOpacity>
            
          </View> 
        </Modal>
      </View>
    </SafeAreaView>
  );    
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dff9fb",
    justifyContent: "center", 
    alignItems: "center"
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
  search:{
    color: "#F2F3F7",  
  },
  modalView: {
    padding : 10,
    paddingTop: 50,
  },
  flatListStyle: {
    height : "75%",

  }
});