import React from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.coffeeItem}
        onPress={() => props.navigation.navigate("CarList")}>
        <Image style={styles.carImage} source={require("../img/hero.jpg")} />
        <Text style={styles.cartext}> 8 véhicules à découvrir !</Text>
      </TouchableOpacity>
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
  }

});
