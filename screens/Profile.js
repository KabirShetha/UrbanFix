import * as React from "react";
import { StatusBar, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <StatusBar style={styles.countersFlexBox1} barStyle="default" />
      <View style={[styles.bg, styles.bgPosition]} />
      <Pressable
        style={[styles.counters, styles.countersFlexBox]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", {
            screen: "ServiceManDashboard",
          })
        }
      >
        <View style={styles.serviceDelivered}>
          <Text style={styles.text}>259+</Text>
          <Text
            style={[styles.serviceDelivered1, styles.appLanguage1Typo]}
          >{`Service 
Delivered`}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.serviceDelivered}>
          <Text style={styles.text}>05 +</Text>
          <Text
            style={[styles.serviceDelivered1, styles.appLanguage1Typo]}
          >{`Years of
Experience`}</Text>
        </View>
      </Pressable>
      <View style={styles.field}>
        <View style={styles.appLanguage}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.appLanguage1, styles.appLanguage1Typo]}>
            App Language
          </Text>
        </View>
        <View style={styles.line1} />
        <View style={[styles.appTheme, styles.countersFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
          <Text style={[styles.appLanguage1, styles.appLanguage1Typo]}>
            App Theme
          </Text>
        </View>
        <View style={styles.line1} />
        <Pressable
          style={styles.changePassword}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Image
            style={styles.icon2}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Text style={[styles.appLanguage1, styles.appLanguage1Typo]}>
            Change Password
          </Text>
        </Pressable>
        <View style={styles.line1} />
        <View style={styles.language}>
          <Image
            style={styles.image21Traced}
            contentFit="cover"
            source={require("../assets/image-21-traced.png")}
          />
          <Text style={[styles.appLanguage1, styles.appLanguage1Typo]}>
            Earning List
          </Text>
        </View>
      </View>
      <Button
        style={styles.logout}
        title="Logout"
        size="medium"
        status="primary"
        appearance="filled"
        textStyle={styles.logoutText}
        onPress={() => navigation.navigate("LoginServiceMan")}
      >
        Logout
      </Button>
      <View style={styles.name}>
        <Text style={[styles.deepParmar, styles.deepParmarTypo]}>
          Deep Parmar
        </Text>
        <Text style={[styles.deepdeppcorpocom, styles.deepParmarTypo]}>
          deep@deppcorpo.com
        </Text>
      </View>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoutText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  logout1Text: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  countersFlexBox1: {
    justifyContent: "space-between",
    position: "absolute",
  },
  bgPosition: {
    left: 0,
    width: 375,
  },
  countersFlexBox: {
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  appLanguage1Typo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  deepParmarTypo: {
    color: Color.white,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  bg: {
    top: 31,
    backgroundColor: Color.main,
    height: 319,
    width: 375,
    position: "absolute",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    textAlign: "left",
    fontSize: FontSize.size_3xl,
  },
  serviceDelivered1: {
    fontSize: FontSize.size_xs,
    color: Color.body,
    textAlign: "center",
    marginTop: 8,
  },
  serviceDelivered: {
    alignItems: "center",
  },
  line: {
    width: 1,
    height: 30,
    backgroundColor: Color.border,
  },
  counters: {
    top: 302,
    left: 38,
    backgroundColor: Color.background,
    width: 311,
    paddingHorizontal: 40,
    paddingVertical: Padding.p_5xl,
    justifyContent: "space-between",
    position: "absolute",
  },
  icon: {
    height: 16,
    width: 16,
  },
  appLanguage1: {
    color: Color.heading,
    marginLeft: 12,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  appLanguage: {
    alignItems: "center",
    flexDirection: "row",
  },
  line1: {
    width: 335,
    height: 1,
    marginTop: 18,
    backgroundColor: Color.border,
  },
  appTheme: {
    width: 299,
    marginTop: 18,
  },
  icon2: {
    width: 12,
    height: 16,
  },
  changePassword: {
    marginTop: 18,
    alignItems: "center",
    flexDirection: "row",
  },
  image21Traced: {
    height: 14,
    width: 16,
  },
  language: {
    width: 122,
    height: 19,
    marginTop: 18,
    alignItems: "center",
    flexDirection: "row",
  },
  field: {
    top: 466,
    left: 20,
    position: "absolute",
  },
  logout: {
    top: 709,
    left: 161,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  deepParmar: {
    fontSize: FontSize.size_3xl,
  },
  deepdeppcorpocom: {
    fontSize: FontSize.size_base,
    marginTop: 8,
  },
  name: {
    top: 215,
    left: 98,
    alignItems: "center",
    position: "absolute",
  },
  imageIcon: {
    top: 71,
    left: 128,
    borderRadius: 60,
    width: 120,
    height: 120,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Profile;
