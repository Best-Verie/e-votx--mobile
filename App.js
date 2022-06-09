import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/authContext";
import "react-native-gesture-handler";
import Navigator from "./navigator/navigator";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    "urbanist-light": require("./assets/fonts/Urbanist/static/Urbanist-Light.ttf"),
    "urbanist-bold": require("./assets/fonts/Urbanist/static/Urbanist-Bold.ttf"),
    "urbanist-semi-bold": require("./assets/fonts/Urbanist/static/Urbanist-SemiBold.ttf"),
    "urbanist-regular": require("./assets/fonts/Urbanist/static/Urbanist-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>App loading ..</Text>;
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
