import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { View, Text } from "react-native";

const MonCompte = () => {
  const { user } = useContext(AuthContext);

  // Vérifiez si l'utilisateur est connecté avant d'accéder à ses informations
  if (!user) {
    return <Text>Loading user data...</Text>;
  }

  // L'utilisateur est connecté, vous pouvez accéder aux informations de l'utilisateur
  const { id, username } = user;

  return (
    <View>
      <Text>My Account</Text>
      <Text>User ID: {id}</Text>
      <Text>Username: {username}</Text>
    </View>
  );
};

export default MonCompte;