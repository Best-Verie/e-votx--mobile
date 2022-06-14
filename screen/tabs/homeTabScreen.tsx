import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import CardSilder from "react-native-cards-slider";

export default function HomeTabScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Search for elections"
        />
      </View>
      <Text style={styles.currentText}>Current Elections</Text>
      <CardSilder style={styles.slider}>
        <Pressable onPress={() => props.navigation.navigate("add")}>
          <View
            style={{
              height: 170,
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "urbanist-semi-bold",
              backgroundColor: "skyblue",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                fontFamily: "urbanist-semi-bold",
              }}
            >
              Presidential elections
            </Text>
          </View>
        </Pressable>

        <View
          style={{
            height: 170,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightsalmon",
            fontFamily: "urbanist-semi-bold",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              fontFamily: "urbanist-semi-bold",
            }}
          >
            Inzego zibanze
          </Text>
        </View>
        <View
          style={{
            height: 170,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "teal",
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Abadepite
          </Text>
        </View>
        <View
          style={{
            height: 170,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightpink",
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Abaministri
          </Text>
        </View>
      </CardSilder>

      <View style={styles.latest}>
        <Text style={styles.latestText}>Latest elections</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  currentText: {
    marginTop: 30,
    fontSize: 18,
    fontFamily: "urbanist-semi-bold",
    marginLeft: 20,
  },
  slider: {
    marginTop: 40,
    fontFamily: "urbanist-semi-bold",
    height: "40%",
  },
  latest: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  searchView: {
    marginTop: 28,
    marginBottom: 24,
    marginLeft: 30,
    marginRight: 30,
  },
  inputStyle: {
    borderRadius: 20,
    borderColor: "#E5E5E5",
    borderWidth: 2,
    padding: 5,
    fontFamily: "urbanist-semi-bold",
  },
});
