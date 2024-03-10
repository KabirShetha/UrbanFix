import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const LoginServiceMan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginServiceman}>
      <View style={[styles.navigation, styles.emailFlexBox]}>
        <View style={styles.time}>
          <Text style={[styles.text, styles.textTypo]}>9:41</Text>
        </View>
        <View style={styles.symbols}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
        </View>
      </View>
      <View style={[styles.text1, styles.text1Position]}>
        <Text style={styles.helloServiceman}>Hello ServiceMan!</Text>
        <Text style={[styles.gladToHave, styles.haveTypo]}>
          Glad to Have you back!
        </Text>
      </View>
      <View style={styles.loginForm}>
        <View>
          <Input
            style={[styles.email, styles.emailLayout]}
            placeholder="Email Address"
            placeholderTextColor="#6c757d"
            textStyle={styles.emailTextInputText}
          />
          <View style={styles.forgotPassword}>
            <Input
              style={[styles.email, styles.emailLayout]}
              placeholder="Password"
              placeholderTextColor="#6c757d"
              textStyle={styles.frameTextInputText}
            />
            <View style={styles.frameParent}>
              <View style={styles.frameGroup}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/frame-34821.png")}
                />
                <Text style={styles.rememberMe}>Remember Me</Text>
              </View>
              <Text style={styles.forgotPassword1}>Forgot Password ?</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.loginBtnParent}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Profile" })
          }
        >
          <Button
            style={[styles.loginBtn, styles.emailLayout]}
            title="login srvicemen"
            size="medium"
            status="primary"
            appearance="filled"
            color="#5f60b9"
            textStyle={styles.loginBtnText}
          >
            Login
          </Button>
          <Pressable
            style={styles.dontHaveAnAccount}
            onPress={() => navigation.navigate("SignupServiceMan")}
          >
            <Text style={[styles.dontHaveAn, styles.haveTypo]}>
              Don’t have an account?
            </Text>
            <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
          </Pressable>
        </Pressable>
      </View>
      <View style={[styles.frame, styles.text1Position]}>
        <Text
          style={[styles.changeModes, styles.haveTypo]}
        >{`Change Modes? `}</Text>
        <Pressable
          style={styles.backToModesContainer}
          onPress={() => navigation.navigate("LoginAs")}
        >
          <Text style={styles.signUpTypo}> Back To Modes</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  frameTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  loginBtnText: {
    fontWeight: "600",
    fontFamily: "WorkSans-SemiBold",
  },
  emailFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  text1Position: {
    position: "absolute",
    alignItems: "center",
  },
  haveTypo: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  emailLayout: {
    borderRadius: Border.br_xs,
    flexDirection: "row",
    width: 335,
  },
  signUpTypo: {
    textDecoration: "underline",
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.heading,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  time: {
    width: 27,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  wiFiIcon: {
    height: 11,
    width: 15,
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
    flexDirection: "row",
    width: 335,
    justifyContent: "space-between",
    left: 20,
    position: "absolute",
  },
  helloServiceman: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    fontFamily: FontFamily.workSansMedium,
    textTransform: "capitalize",
    color: Color.heading,
    fontWeight: "500",
  },
  gladToHave: {
    lineHeight: 20,
    width: 254,
    marginTop: 16,
    fontSize: FontSize.size_base,
    color: Color.body,
    textAlign: "center",
    textTransform: "capitalize",
  },
  text1: {
    top: 97,
    left: 60,
    alignItems: "center",
  },
  email: {
    backgroundColor: Color.background,
    padding: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameChild: {
    borderRadius: Border.br_11xs,
    height: 15,
    width: 15,
  },
  rememberMe: {
    marginLeft: 8,
    fontSize: FontSize.size_xs,
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  forgotPassword1: {
    marginLeft: 117,
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  frameParent: {
    marginTop: 10,
    flexDirection: "row",
  },
  forgotPassword: {
    marginTop: 24,
  },
  loginBtn: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
  },
  dontHaveAn: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.body,
  },
  signUp: {
    marginLeft: 5,
  },
  dontHaveAnAccount: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loginBtnParent: {
    marginTop: 40,
    alignItems: "center",
  },
  loginForm: {
    top: 258,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  changeModes: {
    width: 113,
    height: 15,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.body,
  },
  backToModesContainer: {
    marginLeft: -4,
  },
  frame: {
    top: 565,
    left: 80,
    width: 216,
    height: 16,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  loginServiceman: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LoginServiceMan;
