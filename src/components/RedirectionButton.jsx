import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RedirectionButton = ({ screenName, title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};


  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#007bff",
      alignItems: "center",
      backgroundColor: "black",
      padding: 15,
      paddingHorizontal: 50,
      justifyContent: "center",
    },
    text: {
      color: "#fff",
      fontSize: 20,
      color: "white",
    },
  });
  
  export default RedirectionButton;