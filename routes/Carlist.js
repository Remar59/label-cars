import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text, Dimensions, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import cars from "../cars.js";

export default function Carlist(props) {
    

  const renderCarItem = (item) => {
    return (
        
      <TouchableOpacity style={styles.carItem} onPress={() => props.navigation.navigate("CarItem", {item})}>

        <Image style={styles.carImage} source={{ uri: item.image }}/>
        <View style={styles.cartext}>
        <Text style={styles.carName}>{item.name}</Text>
        <Text>{item.price}€ par jour</Text></View>
      </TouchableOpacity>

    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <FlatList 
        data={cars}
        renderItem={({item}) => renderCarItem(item)}
        keyExtractor={item => item.name}
      />

    </View>
  );
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  header: {
    width: vw,
    height: vw / 1.5
  },
  carImage: {
    width: 200,
    height: 100,
    alignSelf: "start"
  },
  carName: {
    
    textTransform: "uppercase"
  },
  carItem: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "#DFDFDF",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row"

  }
});
