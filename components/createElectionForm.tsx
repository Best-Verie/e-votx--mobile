import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import SubmitButton from "./SubmitButton";
export default function CreateElection(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} placeholder="Title" />
      <TextInput
        multiline={true}
        numberOfLines={10}
        placeholder="Description"
        style={styles.descriptionInput}
      />
      <TextInput style={styles.inputStyle} placeholder="Start date" />
      <TextInput style={styles.inputStyle} placeholder="End date" />
      <Pressable>
        <View style={styles.submitButton}>
          <SubmitButton title="+ save" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: 350,
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#EAECEE",
    marginTop: 30,
    paddingLeft: 15,
  },
  descriptionInput: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: 350,
    height: 150,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#EAECEE",
    marginTop: 30,
    paddingLeft: 15,
  },
  submitButton: {
    marginTop: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#4361EE",
    width: 350,
    padding: 15,
    height: 50,
  },
  caption: {
    color: "#FFFFFF",
    fontFamily: "urbanist-bold",
  },
});
