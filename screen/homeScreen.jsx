import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import SubmitButton from "../components/SubmitButton";

export default function HomeScreen() {
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
            onPress={() => console.log("hey")}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  slogan: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4361EE",
    marginTop: 130,
    textAlign: "center",
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
  },
  gText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "400",
    color: "gray",
    textAlign: "center",
    lineHeight: 20,
  },
  getStarted: {
    marginTop: 40,
  },
});
