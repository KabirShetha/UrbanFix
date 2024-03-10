import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Signup = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signup, styles.signupLayout]}>
      <View style={[styles.navigation, styles.loginBtnFlexBox]}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
        </View>
        <View style={styles.symbols}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
        </View>
      </View>
      <View style={styles.btnAndText}>
        <View style={[styles.loginBtn, styles.loginBtnFlexBox]}>
          <Text style={[styles.login, styles.loginTypo]}>signup</Text>
        </View>
        <View style={styles.dontHaveAnAccount}>
          <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.signIn1, styles.loginTypo]}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.details, styles.detailsPosition]}>
        <View style={styles.fullName}>
          <Input
            style={[styles.fullNameAndIcon, styles.loginBtnFlexBox]}
            placeholder="Full Name"
            placeholderTextColor="#6c757d"
            textStyle={styles.fullNameAndIconText}
          />
        </View>
        <Input
          style={styles.emailSpaceBlock}
          placeholder="User Name"
          placeholderTextColor="#6c757d"
          textStyle={styles.userNameTextInputText}
        />
        <Input
          style={styles.emailSpaceBlock}
          placeholder="Contact Number"
          placeholderTextColor="#6c757d"
          textStyle={styles.contactNumberTextInputText}
        />
        <Input
          style={styles.emailSpaceBlock}
          placeholder="Password"
          placeholderTextColor="#6c757d"
          textStyle={styles.passwordTextInputText}
        />
        <Input
          style={styles.emailSpaceBlock}
          placeholder="deep@deppcorpo.com"
          placeholderTextColor="#6c757d"
          textStyle={styles.emailTextInputText}
          label="Email"
        />
      </View>
      <Image
        style={styles.userImageIcon}
        contentFit="cover"
        source={require("../assets/user-image.png")}
      />
      <View style={styles.text1}>
        <Image
          style={[styles.logoIcon, styles.signupLayout]}
          contentFit="cover"
          source={require("../assets/logo1.png")}
        />
        <Text style={[styles.helloUser, styles.helloUserTypo]}>
          Hello User!
        </Text>
        <Text
          style={[styles.createYourAccount, styles.helloUserTypo]}
        >{`Create your account for
better Experience`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullNameAndIconText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  userNameTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  contactNumberTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  passwordTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  emailTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#5f60b9",
  },
  signupLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  loginBtnFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  loginTypo: {
    fontWeight: "600",
    textAlign: "left",
  },
  detailsPosition: {
    width: 335,
    left: 20,
    position: "absolute",
  },
  helloUserTypo: {
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: FontFamily.workSansMedium,
    marginTop: 16,
    alignSelf: "stretch",
    fontWeight: "500",
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    fontWeight: "500",
    color: Color.heading,
    fontSize: FontSize.size_sm,
  },
  time: {
    width: 27,
    alignItems: "flex-end",
    justifyContent: "center",
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
    width: 51,
    paddingLeft: 1,
    paddingRight: Padding.p_12xs_5,
    height: 12,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  navigation: {
    top: 10,
    paddingLeft: Padding.p_12xs_5,
    alignItems: "center",
    width: 335,
    left: 20,
    position: "absolute",
  },
  login: {
    textTransform: "uppercase",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.white,
    fontSize: FontSize.size_base,
  },
  loginBtn: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.main,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    alignSelf: "stretch",
  },
  alreadyHaveAn: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  signIn1: {
    textDecoration: "underline",
    fontStyle: "italic",
    fontFamily: FontFamily.workSansSemiBoldItalic,
    color: Color.main,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  dontHaveAnAccount: {
    marginTop: 16,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  btnAndText: {
    top: 692,
    left: 40,
    width: 293,
    alignItems: "center",
    position: "absolute",
  },
  fullNameAndIcon: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.background,
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  fullName: {
    alignSelf: "stretch",
  },
  emailSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  details: {
    top: 283,
  },
  userImageIcon: {
    top: 77,
    left: 147,
    width: 80,
    height: 80,
    position: "absolute",
  },
  logoIcon: {
    borderRadius: Border.br_161xl,
    width: "100%",
    display: "none",
    height: 80,
    alignSelf: "stretch",
  },
  helloUser: {
    fontSize: FontSize.size_3xl,
    color: Color.heading,
    textAlign: "center",
    textTransform: "capitalize",
  },
  createYourAccount: {
    lineHeight: 20,
    color: Color.body,
    fontSize: FontSize.size_base,
  },
  text1: {
    top: 184,
    left: 93,
    width: 190,
    alignItems: "center",
    position: "absolute",
  },
  signup: {
    backgroundColor: Color.white,
    width: 375,
    height: 812,
    maxHeight: "100%",
  },
});

export default Signup;
