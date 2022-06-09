import { useContext } from "react";
import { AuthContext } from "../hooks/authContext";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "../screen/loginScreen";
import HomeScreen from "../screen/homeScreen";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { View, Text, TouchableOpacity } from "react-native";
export default function Navigator() {
  if (useContext(AuthContext).isLogggedIn) {
    return <AppNavigator />;
  } else {
    return <AuthNavigator />;
  }
}

function AuthNavigator() {
  const stack = createStackNavigator();
  return (
    <stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <stack.Screen name="home" component={HomeScreen} />
      <stack.Screen name="login" component={LoginScreen} />
    </stack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="search"
      screenOptions={{
        headerShown: false,
        tabBarHideKeyboard: true,
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
          height: 80,
          paddingBottom: 10,
          padding: 30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginHorizontal: 5,
          position: "absolute",
          borderColor: "white",
          elevation: 10,
        },
        tabBarButton: (props) => {
          return (
            <View {...props}>
              <View
                style={{
                  minwidth: 50,
                  minHeight: 50,
                  borderRadius: 10,
                  backgroundColor: props.accessibilityState.selected
                    ? "#F6E3DB"
                    : "white",
                }}
              >
                {/* <TouchableOpacity>{...props}</TouchableOpacity> */}
              </View>
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#F7941D",
      }}
    >
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
        component={LoginScreen}
      />
    </Tabs.Navigator>
  );
}
