import React from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList
} from "react-native";
import cars from "../cars.js";




export default function Home(props) {

  const renderCarItem = (item) => {
    return (
  
        <TouchableOpacity style={styles.carItemReserved} onPress={() => props.navigation.navigate("CarItem", { item })}>
          <Image style={styles.carImageReserved} source={{ uri: item.image }} />
          <View style={styles.carTextReserved}>
            <Text style={styles.carNameReserved}>{item.name}</Text>
            <Text style={{ fontSize: 18 }}>{item.price}€ par jour</Text></View>
        </TouchableOpacity>
  
    )
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("CarList")}>
        <Image style={styles.carImage} source={require("../img/hero.jpg")} />
        <Text style={styles.cartext}> 8 véhicules à découvrir !</Text>
      </TouchableOpacity>

      <Text style={styles.titleReserved}>Les plus réservés</Text>

      <View style={styles.ContainerReserved}>

        <FlatList
          data={cars}
          renderItem={({ item }) => renderCarItem(item)}
          keyExtractor={item => item.name}
          numColumns={2}
        />

      </View>
    </View>
  );

  
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  header: {
    width: vw,
    height: vw / 1.5,
  },
  carImage: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    borderRadius: 20,
    position: "relative",
    marginTop: 20
  },
  cartext: {
    position: "absolute",
    bottom: 5,
    left: 20,
    fontSize: 22,
    color: "white"
  },
  carImageReserved: {
    width: 150,
    height: 100,
  },
  carTextReserved: {
    flexShrink: 1,
  },
  carNameReserved: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
  carItemReserved: {
    padding: 10,
    margin: 10,
    backgroundColor: "#DFDFDF",
    borderRadius: 20,
    width: "45%",
  },
  ContainerReserved: {
    width: "95%",
    alignSelf: "center",
  },
  titleReserved: {
    fontSize: 25,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20
  }

});
