import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
export default function SignUpForm(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} placeholder="First Name" />
      <TextInput style={styles.inputStyle} placeholder="Last Name" />
      <TextInput style={styles.inputStyle} placeholder="Email" autoCapitalize="none" />
      <TextInput style={styles.inputStyle} placeholder="Password" secureTextEntry={true} />
      <View style={styles.submitButton}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.caption}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     marginTop: 200,
  //     flex: 1,
  //     backgroundColor: "#FFFFFF",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
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
