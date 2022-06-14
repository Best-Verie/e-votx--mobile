import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from "react-native";
import BackButton from "../../components/BackButton";
import CreateElection from "../../components/createElectionForm";
import { RootStackParamList } from "../../navigator/navigator";



type Props = NativeStackScreenProps<RootStackParamList, "Add">

export default function AdminCreateElection({ navigation }: Props) {

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
          <Text style={styles.topText}>Admin create election</Text>
        </View>
      </View>
      <View>
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
