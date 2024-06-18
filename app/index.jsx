import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}></ScrollView>
    </SafeAreaView>
  );
}
