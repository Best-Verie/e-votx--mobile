import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import SubmitButton from "./SubmitButton";
export default function SignInForm(props) {
  const { navigation } = props;
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} placeholder="Email" />
      <TextInput style={styles.inputStyle} placeholder="Password" />
      <Pressable>
        <View style={styles.submitButton}>
          <SubmitButton
            title="Login"
            // onPress={() => navigation.navigate("signup")}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: 350,
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#EAECEE",
    marginTop: 30,
    paddingLeft: 15,
  },
  submitButton: {
    marginTop: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#4361EE",
    width: 350,
    padding: 15,
    height: 50,
  },
  caption: {
    color: "#FFFFFF",
    fontFamily: "urbanist-bold",
  },
});
