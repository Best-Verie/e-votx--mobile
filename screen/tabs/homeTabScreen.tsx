import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
// import CardSilder from "react-native-cards-slider";
import { RootStackParamList } from "../../navigator/navigator";

type Props = NativeStackScreenProps<RootStackParamList, "Home">



export default function HomeTabScreen(props: Props) {


  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Search for elections"
        />
      </View>
      <Text style={styles.currentText}>Current Elections</Text>
      {/* <CardSilder style={styles.slider}>
        <Pressable onPress={() => props.navigation.navigate("Add")}>
          <View
            style={{
              height: 170,
              justifyContent: "center",
              alignItems: "center",
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
      </CardSilder> */}

      <View style={styles.latest}>
        {/* <Text>Latest elections</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '20%'
  },
  currentText: {
    marginTop: 30,
    fontSize: 18,
    marginLeft: 20,
  },
  slider: {
    marginTop: 40,
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
    // paddingTop: 20,
    // textAlign: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});
