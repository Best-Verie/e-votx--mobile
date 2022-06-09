import { View, StyleSheet, Text } from "react-native";
import CardSilder from "react-native-cards-slider";

export default function HomeTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.currentText}>Current Elections</Text>
      <CardSilder style={styles.slider}>
        <View
          style={{
            height: 170,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "skyblue",
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            悉尼
          </Text>
        </View>
        <View
          style={{
            height: 170,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightsalmon",
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            纽约
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
            东京
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
            上海
          </Text>
        </View>
      </CardSilder>
      {/* <View style={styles.latest}> */}
      {/* <Text style={styles.latestText}>Latest elections</Text> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  currentText: {
    marginTop: 40,
    fontSize: 18,
    fontFamily: "urbanist-semi-bold",
    marginLeft: 20,
  },
  slider: {
    marginTop: 70,
  },
  latest: {
    marginTop: 50,
  },
});
