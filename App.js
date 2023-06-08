// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MonCompte from "./src/screens/CompteScreen";
import ConnexionScreen from "./src/screens/ConnexionScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import AuthProvider from "./src/contexts/UserContext";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const StackNavigator = () => (

    <Stack.Navigator>
      <Stack.Screen name="Connexion" component={ConnexionScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false, }} name="Home" component={TabNavigator}/>
    </Stack.Navigator>
);

const TabNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Mon Compte" component={MonCompte} />
    </Tab.Navigator>
);

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator>
          <TabNavigator />
        </StackNavigator>
      </NavigationContainer>
  );
}
