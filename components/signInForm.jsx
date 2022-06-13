import react from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import SubmitButton from "./SubmitButton";
import { AuthContext } from "../hooks/authContext";
import { useFormik } from "formik";
import * as SecureStore from "expo-secure-store";

export default function SignInForm(props) {
  const setIsLoggedIn = react.useContext(AuthContext).setIsLoggedIn;

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (!values.email && !values.password) {
        Alert.alert("Please enter your email and password");
        return;
      }

      const response = await fetch(
        "https://voting-backend-production.up.railway.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      console.log("response:", response);

      if (!response.ok) {
        Alert.alert("Error", "Invalid credentials");
      }

      const data = await response.json();

      console.log({ data })

      if (data.access_token) {
        // console.log("data.access_token:", data.access_token);
        Alert.alert("Success", "You have successfully signed in");
        await SecureStore.setItemAsync("token", data.access_token);
        const token = await SecureStore.getItemAsync("access_token");
        console.log("token:", token);
        setIsLoggedIn(true);
      }
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={values.email}
        autoCapitalize="none"
        onChangeText={handleChange("email")}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        secureTextEntry={true}
        value={values.password}
        onChangeText={handleChange("password")}
      />
      <Pressable>
        <View style={styles.submitButton}>
          <SubmitButton title="Login" onPress={() => handleSubmit()} />
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
