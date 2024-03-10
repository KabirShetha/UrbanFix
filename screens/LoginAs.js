import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LoginAs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginAs}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.logo}>
            <View style={styles.houseman}>
              <Image
                style={styles.subtractIcon}
                contentFit="cover"
                source={require("../assets/subtract.png")}
              />
              <View style={styles.hParent}>
                <Image
                  style={styles.hIcon}
                  contentFit="cover"
                  source={require("../assets/h.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/group-4.png")}
                />
              </View>
            </View>
            <Text style={styles.urbanFix}>Urban Fix</Text>
          </View>
        </View>
        <Text style={styles.proceedAs}>Proceed as...</Text>
      </View>
      <View style={styles.frame2}>
        <Button
          style={styles.loginBtn}
          title="Button ot login as serviceman"
          size="medium"
          status="primary"
          appearance="filled"
          color="#5f60b9"
          textStyle={styles.loginBtnText}
          onPress={() => navigation.navigate("LoginServiceMan")}
        >
          A Serviceman
        </Button>
        <Button
          style={styles.loginBtn1}
          title="a User"
          appearance="outline"
          color="#5f60b9"
          textStyle={styles.loginBtn1Text}
          onPress={() => navigation.navigate("Login")}
        >
          a User
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtnText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  loginBtn1Text: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  subtractIcon: {
    position: "relative",
    width: 121,
    height: 135,
  },
  hIcon: {
    position: "relative",
    borderRadius: 5,
    width: 10,
    height: 48,
  },
  frameChild: {
    position: "relative",
    width: 10,
    height: 48,
    marginLeft: 28,
  },
  hParent: {
    width: 49,
    height: 73,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -91,
  },
  houseman: {
    width: 122,
    height: 135,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  urbanFix: {
    position: "relative",
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.heading,
    textAlign: "left",
    marginTop: 20,
  },
  logo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame1: {
    width: 143,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  proceedAs: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.workSansRegular,
    color: Color.heading,
    textAlign: "left",
    height: 35,
    marginLeft: 9,
    marginTop: 95,
  },
  frame: {
    width: 195,
    height: 320,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  loginBtn: {
    borderRadius: Border.br_xl,
    width: 335,
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
  },
  loginBtn1: {
    borderRadius: Border.br_xl,
    width: 335,
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    marginTop: 51,
  },
  frame2: {
    width: 335,
    height: 201,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 31,
  },
  loginAs: {
    position: "relative",
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 76,
  },
});

export default LoginAs;
