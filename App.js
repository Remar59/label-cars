import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./routes/Home";
import Caritem from "./routes/Caritem";
import Carlist from "./routes/Carlist";
import { StyleSheet, Dimensions, Image, Pressable, Text } from "react-native";
import React, { useState } from 'react';


const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer style={styles.text}>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#2D4F6C',
        },
        headerTintColor: '#ffffff',
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: 'white',

        }
      }}>
        <Stack.Screen options={{
          headerTitle: () => <Image
            style={{ width: 50, height: 50 }}
            source={require('./img/logo-transparent.png')}
          />
        }} name="Home" component={Home}></Stack.Screen>
        <Stack.Screen
          name="CarItem"
          component={Caritem}
          options={({ route }) => ({
            headerTitle: route.params.item.name,
            headerStyle: {
              backgroundColor: '#2D4F6C',
            },
            headerTintColor: '#ffffff',
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: 'white',
            },
          })}
        />
        <Stack.Screen name="CarList" component={Carlist} options={{
          title: 'Nos Véhicules',
          headerRight: () => (
            <Pressable >
              <Text style={styles.filter}>Filtres</Text>
            </Pressable>
          ),
        }}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );

}
const vw = Dimensions.get("screen").width;


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1E2F97",
    width: vw,
    height: vw / 1.5,
  },
  text: {
    color: "white",
  },
  filter: {
    color: "white",
  }
})