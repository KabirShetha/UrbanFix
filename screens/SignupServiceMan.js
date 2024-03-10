import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const SignupServiceMan = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signupServiceman, styles.symbolsFlexBox]}>
      <View style={styles.navigation}>
        <Text style={[styles.text, styles.textTypo]}>9:41</Text>
        <View style={styles.time} />
        <View style={[styles.symbols, styles.symbolsFlexBox]}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
        </View>
      </View>
      <View style={[styles.frame, styles.frameLayout]}>
        <Image
          style={[styles.frameIcon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <View style={[styles.frame2, styles.frameLayout]}>
            <View style={[styles.frame3, styles.frameFlexBox]}>
              <View style={styles.details}>
                <Input
                  placeholder="Full Name"
                  placeholderTextColor="#6c757d"
                  textStyle={styles.fullNameTextInputText}
                />
                <Input
                  style={styles.userName}
                  placeholder="User Name"
                  placeholderTextColor="#6c757d"
                  textStyle={styles.userNameTextInputText}
                />
                <Input
                  style={styles.userName}
                  placeholder="Contact Number"
                  placeholderTextColor="#6c757d"
                  textStyle={styles.contactNumberTextInputText}
                />
                <Input
                  style={styles.userName}
                  placeholder="Password"
                  placeholderTextColor="#6c757d"
                  textStyle={styles.passwordTextInputText}
                />
                <Input
                  style={styles.email}
                  placeholder="deep@deppcorpo.com"
                  placeholderTextColor="#6c757d"
                  textStyle={styles.emailTextInputText}
                  label="Email"
                />
              </View>
            </View>
            <View style={[styles.frame4, styles.framePosition]}>
              <View style={styles.text1}>
                <Image
                  style={styles.logoIcon}
                  contentFit="cover"
                  source={require("../assets/logo.png")}
                />
                <Text
                  style={[styles.helloServiceman, styles.helloServicemanText]}
                >
                  Hello ServiceMan!
                </Text>
                <Text
                  style={[styles.createYourAccount, styles.alreadyHaveAnTypo]}
                >{`Create your account for
better Experience`}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnAndText}>
        <Button
          style={styles.loginBtn}
          title="signup serviceman"
          size="medium"
          status="primary"
          appearance="filled"
          color="#5f60b9"
          textStyle={styles.loginBtnText}
          onPress={() => navigation.navigate("LoginServiceMan")}
        >
          signup
        </Button>
        <Pressable
          style={styles.dontHaveAnAccount}
          onPress={() => navigation.navigate("LoginServiceMan")}
        >
          <Text style={[styles.alreadyHaveAn, styles.alreadyHaveAnTypo]}>
            Already have an account?
          </Text>
          <Text style={[styles.signIn, styles.loginTypo]}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullNameTextInputText: {
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
  loginBtnText: {
    fontWeight: "600",
    fontFamily: "WorkSans-SemiBold",
  },
  symbolsFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  frameLayout: {
    width: 343,
    overflow: "hidden",
  },
  framePosition: {
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameFlexBox: {
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  helloServicemanText: {
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 16,
  },
  alreadyHaveAnTypo: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  loginTypo: {
    fontWeight: "600",
    textAlign: "left",
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.heading,
    fontWeight: "500",
    textAlign: "left",
  },
  time: {
    width: 27,
    height: 17,
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
    flexDirection: "row",
    alignItems: "center",
  },
  navigation: {
    width: 338,
    height: 23,
    justifyContent: "space-between",
    paddingLeft: Padding.p_12xs_5,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  frameIcon: {
    left: 127,
    width: 81,
    height: 80,
  },
  userName: {
    marginTop: 24,
  },
  email: {
    width: 325,
    marginTop: 24,
  },
  details: {
    width: 374,
    height: 383,
  },
  frame3: {
    top: 102,
    left: -31,
    width: 405,
  },
  logoIcon: {
    borderRadius: Border.br_161xl,
    width: 80,
    display: "none",
    height: 80,
  },
  helloServiceman: {
    fontSize: FontSize.size_3xl,
    marginTop: 16,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.heading,
    fontWeight: "500",
  },
  createYourAccount: {
    lineHeight: 20,
    width: 254,
    fontSize: FontSize.size_base,
    marginTop: 16,
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.body,
  },
  text1: {
    alignItems: "center",
  },
  frame4: {
    left: 40,
    width: 263,
    justifyContent: "center",
  },
  frame2: {
    height: 471,
  },
  frame1: {
    top: 104,
    left: -8,
    width: 351,
  },
  frame: {
    height: 575,
    marginTop: 55,
  },
  loginBtn: {
    borderRadius: Border.br_xs,
    width: 335,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    flexDirection: "row",
    justifyContent: "center",
  },
  alreadyHaveAn: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  signIn: {
    textDecoration: "underline",
    fontStyle: "italic",
    fontFamily: FontFamily.workSansSemiBoldItalic,
    color: Color.main,
    marginLeft: 5,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  dontHaveAnAccount: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnAndText: {
    marginTop: 55,
    alignItems: "center",
  },
  signupServiceman: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    paddingRight: Padding.p_11xs,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignupServiceMan;
