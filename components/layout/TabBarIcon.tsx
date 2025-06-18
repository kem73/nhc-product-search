import { Image, StyleSheet } from "react-native";

  const getTabBarIcon = (icon: any) => {
    const TabBarIcon = ({ focused }: { focused: boolean }) => (
      <Image
        source={icon}
        style={[
          styles.icon,
          { tintColor: focused ? "#285F9D" : "#000000" },
        ]}
      />
    );
    TabBarIcon.displayName = "TabBarIcon";
    return TabBarIcon;
  };
  export default getTabBarIcon





  const styles = StyleSheet.create({
    icon: {
      width: 40,
      height: 40,
      resizeMode: "contain",
      marginTop: 15,
    },
    iosTabBar: {
      position: "absolute",
    },
  });