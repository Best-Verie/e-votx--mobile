import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function BackButton(props: {
  onPress: () => void;
}) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Image source={require("../assets/arrow.png")} style={styles.icon} />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 20,
    // marginLeft: 10,
  },
});
