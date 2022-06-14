import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SubmitButton from "../components/SubmitButton";
import { RootStackParamList } from "../navigator/navigator";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">


export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.slogan}>E-votx</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("./../assets/headerImg.png")}
        />
      </View>
      <View style={styles.descr}>
        <Text style={styles.descrText}>
          Not only our right- but also our power
        </Text>
        <Text style={styles.gText}>
          E-votx let’s you control your elections without limitations.
        </Text>
      </View>
      <Pressable>
        <View style={styles.getStarted}>
          <SubmitButton
            title="Get started"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </Pressable>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("Signin")}>
        <View style={styles.bottomContent}>
          <Text style={styles.bottomText}>Login to E-votx</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    paddingTop: "20%",
  },
  slogan: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4361EE",
    marginTop: 30,
    marginBottom: 80,
    textAlign: "center",
    fontFamily: "urbanist-bold",
  },
  imgContainer: {
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  descr: {
    marginTop: 20,
  },
  descrText: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: "500",
    lineHeight: 30,
    textAlign: "center",
    fontFamily: "urbanist-bold",
  },
  gText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
    textAlign: "center",
    // lineHeight: 20,
    fontFamily: "urbanist-regular",
  },
  getStarted: {
    marginTop: 40,
  },
  bottomContent: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottomText: {
    marginTop: 20,
    fontSize: 14,
    color: "#4361EE",
    textDecorationStyle: "solid",
    fontWeight: "400",
    fontFamily: "urbanist-bold",
  },
});
