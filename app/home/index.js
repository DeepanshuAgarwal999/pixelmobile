import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        <View>
            <Text>Home screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
