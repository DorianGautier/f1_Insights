import { useState } from "react";
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
import axios from "axios";
import { ActivityIndicator } from "react-native";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigation = useNavigation();

  const submit = async () => {
    setLoader(true);
    console.log("enter");
    let result = null;
    try {
      result = await axios.post(
        "https://ed5b-79-174-199-126.ngrok-free.app/register",
        {
          username: username,
          password: password,
        }
      );
    } catch (error) {
      console.log(error);
      setLoader(false);
    }

    setLoader(false);
    console.log(result.data);
    if (result.status === 201) {
      console.log("Votre compte a ete créee avec succes");
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
      navigation.dispatch(resetAction);
    }
    return;
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.content}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
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
              <CustomButton title="Inscritpion" onPress={submit}></CustomButton>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
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
