import { View, Text, StyleSheet, TouchableOpacity, Pressable, TextInput, Button } from "react-native";
import BackButton from "../components/BackButton";
import RNPickerSelect from "react-native-picker-select";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/navigator";
import { useFormik } from "formik";
import SubmitButton from "../components/SubmitButton";
import { BASE_URL } from "../utils/contants";


type Props = NativeStackScreenProps<RootStackParamList, "Signup">

export default function SignUpScreen({ navigation }: Props) {

  const { values, setFieldValue, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: null
    },
    onSubmit: async (values) => {



      const response = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        body: JSON.stringify(values)
      })

      if (response.ok) {
        navigation.navigate("Signin")
      }

      // fix errors 
      // const data = await response.json()
      // if(data.)
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.backbtnView}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.top}>
          <Text style={styles.topText}>Sign up</Text>
        </View>
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.midText}>Create your free E-votx account</Text>
      </View>

      <View style={styles.loginForm}>
        <View>
          <TextInput style={styles.inputStyle} value={values.email} onChangeText={handleChange("email")} placeholder="First Name" />
          <TextInput style={styles.inputStyle} value={values.lastName} onChangeText={handleChange("lastName")} placeholder="Last Name" />
          <TextInput style={styles.inputStyle} value={values.firstName} onChangeText={handleChange("firstName")} placeholder="Email" autoCapitalize="none" />
          <TextInput style={styles.inputStyle} value={values.password} onChangeText={handleChange("password")} placeholder="Password" secureTextEntry={true} />
          <RNPickerSelect style={pickerSelectStyles} value={values.gender} placeholder={{ label: "Select gender", value: null }} useNativeAndroidPickerStyle={false}
            onValueChange={(gender) => setFieldValue("gender", gender)} items={[
              {
                label: "Male",
                value: "MALE"
              },
              {
                label: "Female",
                value: "FEMALE"
              }
            ]} />
          <View style={styles.submitButton}>
            <SubmitButton title="Signup" onPress={() => handleSubmit()} />
          </View>
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
  selectStyle: {
    marginTop: 10,
  },
  topContainer: {
    marginTop: 15,
    paddingBottom: 30,
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
    marginTop: 20,
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
    marginTop: 30,
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
});


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#EAECEE",
    color: 'black',
    marginTop: 30,
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#EAECEE",
    color: 'black',
    marginTop: 30,
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});