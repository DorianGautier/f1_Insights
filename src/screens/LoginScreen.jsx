import {
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { StyleSheet } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigation = useNavigation();
  const auth = useContext(AuthContext);

  const submit = async () => {
    setLoader(true);
    console.log("entrer");
    let result = null;
    try {
      result = await auth.login(username, password);
    } catch (error) {
      setLoader(false);
      return;
    }

    setLoader(false);
    console.log(result.data);
    if (result.status === 200) {
      console.log("Vous etes connecté");
      AsyncStorage.setItem("token", result.data.token);

      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
      navigation.dispatch(resetAction);
    }
  };

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(e) => setUsername(e)}
          ></TextInput>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={(e) => setPassword(e)}
          ></TextInput>
          {loader ? (
            <ActivityIndicator></ActivityIndicator>
          ) : (
            <CustomButton title="Connexion" onPress={submit}></CustomButton>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
  },
});
