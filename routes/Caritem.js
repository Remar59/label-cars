import React from 'react'
import { View, Text, StyleSheet, Image,  } from 'react-native';

const Caritem = (props) => {
    const item = props.route.params.item;
  return (
    <View style={{...styles.container, backgroundColor: item.color}}>
        <Image style={styles.image} source={{uri: item.image}}></Image>

        <View>
        <Image style={styles.icon} source={require("../icon/engine.png")}/></View>
        <Text>Boîte automatique</Text>
        <View>
        <Image style={styles.icon} source={require("../icon/compass.png")}/>
        <Text>GPS intégré</Text></View>
        <View>
        <Image style={styles.icon} source={require("../icon/doors.png")}/>
        <Text>5 places</Text></View>
        <View>
        <Image style={styles.icon} source={require("../icon/snow.png")}/>
        <Text>Climatisation</Text></View>
        
        
    </View>
  )
}

export default Caritem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "brown",
        paddingTop: 50,
        position: "relative"
        
    },
    image: {
        width: 400,
        height: 200,
        alignSelf: "center"
    },
    text: {
        color: "white",
        padding: 15
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20
    },
    backText: {
        fontSize: 24,
        color: "black"
    },
    options: {
        flexWrap: "wrap",
        
    },
    icon: {
        width: 50,
        height: 50
    }
})