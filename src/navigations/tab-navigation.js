import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import Home from "../screens/home";
import Detailed from "../screens/movie";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconname;

            if (route.name === "Home") {
              iconname = focused ? "home" : "home-outline";
            } else if (route.name === "Detailed") {
              iconname = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconname} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "red"
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, tabBarBadge: 1 }}
        />
        <Tab.Screen
          name="Detailed"
          component={Detailed}
          options={{ headerShown: false, tabBarBadge: 5 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
