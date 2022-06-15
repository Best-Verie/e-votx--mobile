import { View, Text, StyleSheet, TouchableOpacity, Alert, Pressable, TextInput } from "react-native";
import BackButton from "../components/BackButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/navigator";
import React, { useEffect } from "react";
import { getToken } from "../utils/token";
import { useFormik } from "formik";
import SubmitButton from "../components/SubmitButton";
import { AuthContext } from "../hooks/authContext";
import * as SecureStore from "expo-secure-store";


type Props = NativeStackScreenProps<RootStackParamList, "Signin">

export default function SignInScreen({ navigation }: Props) {

  const navigateBack = () => {
    navigation.goBack();
  };


  const setIsLoggedIn = React.useContext(AuthContext).setIsLoggedIn;


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

      if (!response.ok) {
        Alert.alert("Error", "Invalid credentials");
      }

      const data = await response.json();


      if (data.access_token) {
        // Alert.alert("Success", "You have successfully signed in");
        await SecureStore.setItemAsync("token", data.access_token);
        // const token = await SecureStore.getItemAsync("access_token");
        setIsLoggedIn(true);
        navigation.push("Home")
      }
    },
  });

  // useEffect(() => {
  //   async function checkAuth() {
  //     const token = await getToken();
  //     if (token) {
  //       navigation.navigate("Home");
  //     }
  //   }
  //   checkAuth();
  // }, [])


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.backbtnView}>
          <BackButton onPress={navigateBack} />
        </View>
        <View style={styles.top}>
          <Text style={styles.topText}>Login</Text>
        </View>
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.midText}>Login to your E-votx account</Text>
      </View>

      <View style={styles.loginForm}>
        {/* <SignInForm /> */}
        <View>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: "20%"
  },
  topContainer: {
    marginTop: 15,
    paddingBottom: 40,
    flexDirection: "row",
  },
  backbtnView: {
    marginLeft: 20,
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    fontFamily: "urbanist-semi-bold",
    fontSize: 14,
  },
  midContainer: {
    marginTop: 50,
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "center",
  },
  midText: {
    fontFamily: "urbanist-semi-bold",
    fontSize: 23,
    textAlign: "left",
    // height: 70,
    // marginBottom: 90,
  },
  loginForm: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "flex-end",
  },

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

  // bottomContent: {
  //   marginTop: 10,
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   // justifyContent: "space-between",
  //   marginBottom: 8,
  // },
  // bottomText: {
  //   fontSize: 16,
  //   textAlign: "center",
  // },
  // bottomTextTwo: {
  //   fontSize: 16,
  //   color: "#4361EE",
  //   textAlign: "center",
  // },
});
