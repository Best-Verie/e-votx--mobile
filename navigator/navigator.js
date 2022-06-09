import { useContext } from "react";
import { AuthContext } from "../hooks/authContext";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "../screen/loginScreen";
import HomeScreen from "../screen/homeScreen";
import SignUpScreen from "../screen/signUpScreen";
import SearchScreen from "../screen/searchScreen";

export default function Navigator() {
  if (useContext(AuthContext).isLoggedIn) {
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
      <stack.Screen
        name="login"
        screenOptions={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <stack.Screen name="signup" component={SignUpScreen} />
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
          backgroundColor: "#4361EE",
          height: 50,
          paddingBottom: 10,
          padding: 30,
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          // marginHorizontal: 5,
          position: "absolute",
          borderColor: "white",
          elevation: 10,
        },
        tabBarButton: (props) => {
          return (
            <View {...props}>
              <View
                style={{
                  minWidth: 40,
                  minHeight: 40,
                  borderRadius: 10,
                  backgroundColor: "transparent",
                }}
              >
                <TouchableOpacity {...props} />
              </View>
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#F7941D",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={26} color={color} />
          ),
        }}
        component={HomeScreen}
      />

      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" size={24} color={color} />
          ),
        }}
        component={SearchScreen}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-analytics"
              size={24}
              color={color}
            />
          ),
        }}
        component={LoginScreen}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="adduser" size={24} color={color} />
          ),
        }}
        component={LoginScreen}
      />
    </Tabs.Navigator>
  );
}
