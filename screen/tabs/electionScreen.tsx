import { View, StyleSheet, Text, Image, Pressable } from "react-native";

import BackButton from "../../components/BackButton";
import CandidateDetails from "./candidateDetails";
export default function Election(props) {
  const navigateBack = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.backbtnView}>
          <BackButton onPress={navigateBack} />
        </View>
        <View style={styles.top}>
          <Text style={styles.topText}>Presidential elections</Text>
        </View>
      </View>
      <View style={styles.midContainer}>
        <View
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightpink",
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Presidential elections
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.cTitle}>Candidates(3)</Text>
        <View style={styles.candidates}>
          <View style={styles.candidatesList}>
            {/* <View */}
            {/* style={styles.candidate} */}
            {/* // onPress={() => props.navigation.navigate("details")} */}
            {/* > */}
            <Image
              source={require("./../../assets/cand-profile.png")}
              style={styles.candidateImage}
            />
            <Text style={styles.cName}>Iradukunda Best Verie</Text>
            {/* </View> */}
          </View>
          <View style={styles.vote}>
            <Pressable onPress={() => props.navigation.navigate("analytics")}>
              <View style={styles.voteBtn}>
                <Text style={styles.voteText}>Vote</Text>
              </View>
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
  candidates: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 40,
    marginRight: 60,
    marginTop: 30,
  },

  cTitle: {
    marginTop: 20,
    fontFamily: "urbanist-semi-bold",
    fontSize: 18,
    marginLeft: 40,
  },
  candidatesList: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  candidateProfile: {
    // marginTop
    width: "10%",
  },
  candidateImage: {
    width: 50,
    height: 50,
    // height: "45%",
  },
  cName: {
    fontFamily: "urbanist-semi-bold",
    marginLeft: 10,
  },
  vote: {
    // alignItems: "flex-end",
  },
  voteBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#4361EE",
    width: 80,
    height: 30,
  },
  voteText: {
    fontFamily: "urbanist-semi-bold",
    color: "white",
  },
});
