import { View, StyleSheet, Text, Image } from "react-native";
import BackButton from "../../components/BackButton";

export default function CandidateDetails(props) {
  const { navigation } = props;
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
          <Text style={styles.topText}>Best verie's details elections</Text>
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
      <View style={styles.bottomContent}>
        <View style={styles.personalInfo}>
          <Image
            source={require("../../assets/cand-profile.png")}
            style={styles.profileImg}
          />
          <View style={styles.personalDescr}>
            <Text style={styles.personalDescrText}>Best Verie Iradukunda</Text>
            <Text style={styles.personalDescrText}>34 years</Text>
            <Text style={styles.personalDescrText}>irabestverie@gmail.com</Text>
            <Text style={styles.personalDescrText}>Kigali-Rwanda</Text>
          </View>
        </View>
        <Text style={styles.descrText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          commodi nihil sit corrupti similique omnis labore minima, nam maiores
          laudantium tempora sint tenetur suscipit beatae distinctio? Similique
          tempore error asperiores?
        </Text>
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
  bottomContent: {
    marginTop: 30,
  },
  personalInfo: {
    flexDirection: "row",
    // marginLeft: 20,
    alignItems: "center",
  },
  personalDescr: {
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  descrText: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: "urbanist-semi-bold",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  personalDescrText: {
    fontSize: 16,
    fontFamily: "urbanist-semi-bold",
  },
});
