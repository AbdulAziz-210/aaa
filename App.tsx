import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import "./global.css";
import Home from "./src/screens/home";
import Detailed from "./src/screens/movie";
import AppNavigation from "./src/navigations/app-navigation";
import TabNavigation from "./src/navigations/tab-navigation";

export default function App() {
  return (
    <AppNavigation />
    //  <Detailed/>
  );
}
6;
