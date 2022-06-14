import React, { useContext } from "react";
import { AuthContext } from "../hooks/authContext";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "../screen/loginScreen";
import HomeScreen from "../screen/homeScreen";
import SignUpScreen from "../screen/signUpScreen";
import HomeTabScreen from "../screen/tabs/homeTabScreen";
import Election from "../screen/tabs/electionScreen";
import CandidateDetails from "../screen/tabs/candidateDetails";
import ElectionResults from "../screen/tabs/electionResults";
import AdminCreateElection from "../screen/admin/CreateElection";

export type RootStackParamList = {
  Home: undefined;
  Signin: undefined;
  Signup: undefined;
  Add: undefined;
  Analytics: undefined;
  Profile: undefined;
  Details: {
    id: string;
  }
}
const Stack = createStackNavigator<RootStackParamList>();

export default function Navigator(): React.ReactElement {
  if (useContext(AuthContext).authedUser) {
    return <AppNavigator />;
  } else {
    return <AuthNavigator />;
  }
}

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }
      }
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Signin"
        component={LoginScreen}
      />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      {/* <Stack.Screen name="details" component={CandidateDetails} /> */}
    </Stack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#4361EE",
          height: 50,
          paddingBottom: 10,
          padding: 30,
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
        component={HomeTabScreen}
      />

      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" size={26} color={color} />
          ),
        }}
        component={Election}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-analytics"
              size={26}
              color={color}
            />
          ),
        }}
        component={ElectionResults}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="adduser" size={24} color={color} />
          ),
        }}
        component={AdminCreateElection}
      />
    </Tabs.Navigator>
  );
}

function otherNavigators() {
  return (
    <Stack.Navigator
      initialRouteName="details"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }
      }
    >
      <Stack.Screen name="details" component={CandidateDetails} />
    </Stack.Navigator>
  );
}
