import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MANUAL, GPS, AC } from "../cars";

const Caritem = (props) => {
  const item = props.route.params.item;
  return (
    <View style={{ ...styles.container, backgroundColor: item.color }}>
      <Image style={styles.image} source={{ uri: item.image }}></Image>
      <View style={styles.optionsContainer}>
        <View style={styles.optionsDiv}>
          {item.options.transmission === MANUAL ? (
            <Image style={styles.icon} source={require("../icon/manual.png")} />
          ) : (
            <Image style={styles.icon} source={require("../icon/engine.png")} />
          )}
          <Text style={styles.textOptions}>
            {item.options.transmission}
          </Text>
        </View>
        
        <View style={styles.optionsDiv}>
        {item.options.navigation === true ? (
        <Image style={styles.icon} source={require("../icon/compass.png")} />
          ) : (
            <Image style={styles.icon} source={require("../icon/nocompass.png")} />
          )}
          <Text>{item.options.navigation === true ? "GPS intégré" : "Pas de GPS"}</Text>
        </View>
        <View style={styles.optionsDiv}>
          <Image style={styles.icon} source={require("../icon/doors.png")} />
          <Text>{item.options.person} personnes</Text>
        </View>

        <View style={styles.optionsDiv}>
        {item.options.aircondition === true ? (
        <Image style={styles.icon} source={require("../icon/snow.png")} />
          ) : (
            <Image style={styles.icon} source={require("../icon/nosnow.png")} />
          )}
          <Text>{item.options.aircondition === true ? "Air conditionné" : "Pas d'air conditionné"}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{item.price}€/jour</Text>
      </View>
    </View>
  );
};

export default Caritem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "brown",
    paddingTop: 50,
    position: "relative",
  },
  optionsDiv: {
    alignItems: "center",
    justifyContent: "center",
  },
  optionsContainer: {
    display: "flex",
    flexWrap: "wrap",
    maxHeight: 350,
    rowGap: 100,
    left: 80,
    top: 120,
    columnGap: 50,
  },
  image: {
    width: 400,
    height: 200,
    alignSelf: "center",
  },
  text: {
    color: "white",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 24,
    color: "black",
  },
  options: {
    flexWrap: "wrap",
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  textOptions: {
    alignContent: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#2D4F6C",
    padding: 30,
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 25,
  },
});
