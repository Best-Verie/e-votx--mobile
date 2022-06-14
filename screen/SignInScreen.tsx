import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SignInForm from "../components/SignInForm";
import BackButton from "../components/BackButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/navigator";

type Props = NativeStackScreenProps<RootStackParamList, "Signin">

export default function SignInScreen({ navigation }: Props) {

  const navigateBack = () => {
    navigation.goBack();
  };


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
        <SignInForm />
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
