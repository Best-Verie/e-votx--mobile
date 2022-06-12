import { StyleSheet, View, Text } from "react-native";
import BackButton from "../../components/BackButton";
import CreateElection from "./../../components/createElectionForm";
export default function AdminCreateElection(props) {
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
          <Text style={styles.topText}>Admin create election</Text>
        </View>
      </View>
      <View style={styles.form}>
        <CreateElection />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
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
});
