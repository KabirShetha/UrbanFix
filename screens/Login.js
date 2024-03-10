import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.navigation, styles.frameFlexBox]}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
        </View>
        <View style={[styles.symbols, styles.symbolsFlexBox]}>
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
      <View style={[styles.loginForm, styles.loginFormPosition]}>
        <View style={styles.inputField}>
          <Input
            style={[styles.email, styles.emailFlexBox]}
            placeholder="Email Address"
            placeholderTextColor="#6c757d"
            textStyle={styles.emailTextInputText}
          />
          <View style={styles.forgotPassword}>
            <View style={[styles.email, styles.emailFlexBox]}>
              <Image
                style={[styles.iconlylightlock, styles.iconlylightlockLayout]}
                contentFit="cover"
                source={require("../assets/iconlylightlock.png")}
              />
              <Input
                style={styles.password}
                placeholder="Password"
                placeholderTextColor="#6c757d"
                textStyle={styles.passwordTextInputText}
              />
              <Image
                style={styles.iconlylightlockLayout}
                contentFit="cover"
                source={require("../assets/iconlylighthide1.png")}
              />
            </View>
            <View style={[styles.frameParent, styles.frameFlexBox]}>
              <View style={[styles.frameGroup, styles.symbolsFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/frame-34821.png")}
                />
                <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
                  Remember Me
                </Text>
              </View>
              <Text style={styles.forgotPassword1}>Forgot Password ?</Text>
            </View>
          </View>
        </View>
        <View style={styles.loginBtnParent}>
          <Button
            style={[styles.loginBtn, styles.emailFlexBox]}
            title="Login as USer"
            size="medium"
            status="primary"
            appearance="filled"
            color="#5f60b9"
            textStyle={styles.loginBtnText}
            onPress={() => navigation.navigate("MainScreen")}
          >
            Login
          </Button>
          <View style={[styles.dontHaveAnAccount, styles.frameFlexBox]}>
            <Text style={[styles.dontHaveAn, styles.rememberMeTypo]}>
              Don’t have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signUp1}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text
          style={[styles.changeModes, styles.rememberMeTypo]}
        >{`Change Modes? `}</Text>
        <Pressable onPress={() => navigation.navigate("LoginAs")}>
          <Text style={styles.signUp1}> Back To Modes</Text>
        </Pressable>
      </View>
      <View style={[styles.text1, styles.framePosition]}>
        <Text style={[styles.helloUser, styles.helloUserTypo]}>
          Hello User!
        </Text>
        <Text style={[styles.gladToHave, styles.helloUserTypo]}>
          Glad to Have you back!
        </Text>
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
  passwordTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  loginBtnText: {
    fontWeight: "600",
    fontFamily: "WorkSans-SemiBold",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  symbolsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginFormPosition: {
    width: 335,
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  emailFlexBox: {
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconlylightlockLayout: {
    height: 18,
    width: 18,
  },
  rememberMeTypo: {
    fontFamily: FontFamily.workSansMedium,
    color: Color.body,
    textAlign: "left",
    fontWeight: "500",
  },
  framePosition: {
    position: "absolute",
    alignItems: "center",
  },
  helloUserTypo: {
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: FontFamily.workSansMedium,
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
  email: {
    backgroundColor: Color.background,
    padding: Padding.p_xl,
    alignItems: "center",
  },
  iconlylightlock: {
    display: "none",
  },
  password: {
    width: 242,
  },
  frameChild: {
    borderRadius: Border.br_11xs,
    height: 15,
    width: 15,
  },
  rememberMe: {
    marginLeft: 8,
    color: Color.body,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
  },
  frameGroup: {
    alignItems: "center",
  },
  forgotPassword1: {
    textAlign: "center",
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
  },
  frameParent: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  forgotPassword: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  inputField: {
    alignSelf: "stretch",
  },
  loginBtn: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
  },
  dontHaveAn: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontSize: FontSize.size_sm,
  },
  signUp1: {
    textDecoration: "underline",
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontStyle: "italic",
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  dontHaveAnAccount: {
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginBtnParent: {
    marginTop: 40,
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginForm: {
    top: 258,
    alignItems: "center",
  },
  changeModes: {
    width: 113,
    color: Color.body,
    height: 15,
    fontFamily: FontFamily.workSansMedium,
    fontSize: FontSize.size_sm,
  },
  frame: {
    top: 566,
    left: 78,
    width: 216,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  helloUser: {
    fontSize: FontSize.size_3xl,
    color: Color.heading,
    textTransform: "capitalize",
  },
  gladToHave: {
    lineHeight: 20,
    marginTop: 16,
    fontSize: FontSize.size_base,
    color: Color.body,
  },
  text1: {
    top: 97,
    left: 97,
    width: 182,
    alignItems: "center",
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login;
