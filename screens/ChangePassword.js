import * as React from "react";
import { Text, StyleSheet, View, Pressable, StatusBar } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.changePassword, styles.frameFlexBox]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.navigation, styles.topNavFlexBox]}>
          <View style={styles.time}>
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
          <View style={[styles.symbols, styles.topNavFlexBox]}>
            <Image
              style={styles.wiFiIcon}
              contentFit="cover"
              source={require("../assets/wifi3.png")}
            />
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../assets/battery2.png")}
            />
          </View>
        </View>
        <View style={[styles.topNav, styles.topNavFlexBox]}>
          <Pressable
            style={styles.arrowLeft2}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "Profile" })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/arrow--left-2.png")}
            />
          </Pressable>
          <Text style={[styles.changePassword1, styles.textTypo]}>
            Change Password
          </Text>
        </View>
      </View>
      <StatusBar style={styles.frameFlexBox} barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  topNavFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    color: Color.white,
    fontWeight: "500",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sFProDisplay,
  },
  time: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  batteryIcon: {
    width: 25,
    marginLeft: 9,
    height: 12,
  },
  symbols: {
    paddingLeft: 1,
    paddingRight: Padding.p_12xs_5,
    marginLeft: 257,
    height: 12,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  navigation: {
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    width: 375,
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeft2: {
    width: 6,
    height: 12,
  },
  changePassword1: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansMedium,
  },
  topNav: {
    backgroundColor: Color.main,
    justifyContent: "space-between",
    paddingHorizontal: 27,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_mini,
    width: 375,
    flexDirection: "row",
  },
  frame: {
    alignSelf: "stretch",
  },
  changePassword: {
    backgroundColor: Color.white,
    width: "100%",
    flex: 1,
  },
});

export default ChangePassword;
