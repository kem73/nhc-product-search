import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import Home from "@/assets/images/home_icon.png";
import Search from "@/assets/images/search_icon.png";
import About from "@/assets/images/about_icon.png";
import getTabBarIcon from "@/components/layout/TabBarIcon";

const TabLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarButton: HapticTab,
        tabBarStyle: [
          styles.tabBarBase,
          Platform.OS === "ios" ? styles.iosTabBar : styles.androidTabBar,
        ],
        }}
    >
      <Tabs.Screen name="index" options={{ tabBarIcon: getTabBarIcon(Home) }} />
      <Tabs.Screen name="search" options={{ tabBarIcon: getTabBarIcon(Search) }} />
      <Tabs.Screen name="about" options={{ tabBarIcon: getTabBarIcon(About) }} />
      <Tabs.Screen
        name="product"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBarBase: {
    backgroundColor: "#fff",
    height: 60,
    paddingBottom: 0,
    paddingTop: 5,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#0000004D",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  iosTabBar: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 25,
    borderRadius: 20,
    height: 70,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  androidTabBar: {
    elevation: 8,
  },
});


export default TabLayout;
