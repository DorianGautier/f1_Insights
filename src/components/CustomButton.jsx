import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 15,
    paddingHorizontal: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

export default CustomButton;
