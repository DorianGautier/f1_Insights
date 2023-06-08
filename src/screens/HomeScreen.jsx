import { StyleSheet } from "react-native";
import { Text } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <Text>Bienvenue !!!!!!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
  },
});
