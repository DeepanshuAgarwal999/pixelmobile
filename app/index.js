import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../constants/theme";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/welcomeImg.jpeg")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <Animated.View
        entering={FadeInDown.duration(600)}
        style={styles.gradient}
      >
        {/* <LinearGradient
          colors={[
            "rgba(255,255,255,0",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        ></LinearGradient> */}
        <View style={styles.contentContainer}>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
          >
            Pixels
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(500).springify()}
            style={styles.punchLine}
          >
            Every pixel tells a story
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(600).springify()}>
            <Pressable style={styles.startButton} onPress={()=>router.push('home')}>
              <Text style={styles.startText}>Start Explore</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(55),
    bottom: 0,
    position: "absolute",
    flex: 1,
    // backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.fontWeights.bold,
  },
  punchLine: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: theme.fontWeights.medium,
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: theme.radius.xl,
  },
  startText: {
    // color: theme.colors.white,
    fontSize: hp(3),
    color: "white",
  },
});
