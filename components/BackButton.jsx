import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function BackButton(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Image source={require("../assets/arrow.png")} style={styles.icon} />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginLeft: 2,
  },
});
