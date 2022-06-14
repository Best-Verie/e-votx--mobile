import { View, Text, StyleSheet, TouchableOpacity, Pressable, TextInput } from "react-native";
import BackButton from "../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/navigator";


type Props = NativeStackScreenProps<RootStackParamList, "Signup">

export default function SignUpScreen({ navigation }: Props) {
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
          <TextInput style={styles.inputStyle} placeholder="First Name" />
          <TextInput style={styles.inputStyle} placeholder="Last Name" />
          <TextInput style={styles.inputStyle} placeholder="Email" autoCapitalize="none" />
          <TextInput style={styles.inputStyle} placeholder="Password" secureTextEntry={true} />
          <View style={styles.submitButton}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Signin")}
            >
              <Text style={styles.caption}>Sign up</Text>
            </Pressable>
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
});
