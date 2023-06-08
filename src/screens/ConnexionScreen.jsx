import { StyleSheet } from "react-native";
import { Text } from "react-native";
import RedirectionButton from "../components/RedirectionButton";

export default function HomeScreen() {
  return (
    <>
    <RedirectionButton screenName="Login" title="Je me connecte" />
    <RedirectionButton screenName="Register" title="Je créer un compte" />
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
