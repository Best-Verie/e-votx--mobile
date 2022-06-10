import { View, StyleSheet, Text, TextInput } from "react-native";
import CardSilder from "react-native-cards-slider";

export default function HomeTabScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Search for elections"
        />
      </View>
      <Text style={styles.currentText}>Current Elections</Text>
      {/* <View style={styles.slider}> */}
      <CardSilder>
        <View
          style={{
            height: 170,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "skyblue",
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
            Presidential elections
          </Text>
        </View>
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
      {/* </View> */}
      {/* <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        nostrum excepturi illum corporis blanditiis libero dolorem neque a qui
        dignissimos. Voluptatibus adipisci consectetur tempore explicabo earum
        fugit cum. Saepe, maiores?
      </Text> */}
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
    marginTop: 20,
    backgroundColor: "red",
    fontFamily: "urbanist-semi-bold",
    marginBottom: 20,
  },
  latest: {
    alignItems: "center",
    justifyContent: "flex-end",
    // marginTop: 150,
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
