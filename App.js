import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/authContext";
import 'react-native-gesture-handler';

import Navigator from "./navigator/navigator";
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
