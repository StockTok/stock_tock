// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  View, 
  FlatList, 
  Modal,
  TouchableOpacity, 
} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function Watchlist() {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [modalVisible, setModalVisable] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style = {styles.searchBtn} 
          onPress={() => setModalVisable(!modalVisible)}>
            <Text style = {styles.search}>Search</Text>
        </TouchableOpacity>
        
        <Modal
          animationType = "slide"
          //transparent = {true}
          visible = {modalVisible}
          onRequestClose = {() => {
            setModalVisable(!modalVisible);
          }}
        >
          <SafeAreaView sytle = {{ flex: 1 }}>
          <View style = {styles.modalView}>
          <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          //onClear={(text) => searchFilterFunction('')}
          onClear = {() => setModalVisable(!modalVisible)}
          placeholder="Type Here..."
          value={search}
        />
             
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />
          </View> 
          </SafeAreaView>
        </Modal>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    justifyContent: "center", 
    alignItems: "center"
  },
  itemStyle: {
    padding: 10,
  },
  modalView: {
    //paddingTop: 50,
  },
  searchBtn: {
    width: "80%",
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
  }
});