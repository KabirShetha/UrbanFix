import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const UserProfile = () => {
  return (
    <View style={styles.userProfile}>
      <View style={[styles.navigation, styles.generalFlexBox]}>
        <View style={styles.time}>
          <Text style={[styles.text, styles.textClr]}>9:41</Text>
        </View>
        <View style={[styles.symbols, styles.symbolsFlexBox]}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi4.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
        </View>
      </View>
      <StatusBar style={styles.editBg} barStyle="default" />
      <View style={[styles.profileDetail, styles.detailLayout]}>
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image8.png")}
        />
        <View style={[styles.detail, styles.detailLayout]}>
          <Text style={[styles.deepParmar, styles.deepParmarFlexBox]}>
            Deep Parmar
          </Text>
          <Text style={[styles.deepexamplegmailcom, styles.logout1Typo]}>
            deepexample@gmail.com
          </Text>
        </View>
        <View style={[styles.edit, styles.editBg]}>
          <Image
            style={styles.iconlylightedit}
            contentFit="cover"
            source={require("../assets/iconlylightedit.png")}
          />
        </View>
      </View>
      <View style={styles.generalSetting}>
        <View style={[styles.general, styles.generalFlexBox]}>
          <Text style={styles.general1}>General</Text>
        </View>
        <View style={styles.list}>
          <View style={styles.darkMode}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon19.png")}
            />
            <View style={[styles.switch, styles.editBg]}>
              <Image
                style={styles.iconlylightedit}
                contentFit="cover"
                source={require("../assets/circle.png")}
              />
            </View>
            <Text style={[styles.darkMode1, styles.darkMode1Typo]}>
              Dark Mode
            </Text>
          </View>
          <View style={[styles.changePassword, styles.helpSupportSpaceBlock]}>
            <Image
              style={[styles.iconlylightlock, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconlylightlock1.png")}
            />
            <Image
              style={[styles.stroke1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/stroke-1.png")}
            />
            <Text style={[styles.changePassword1, styles.darkMode1Typo]}>
              Change Password
            </Text>
          </View>
          <View style={[styles.changePassword, styles.helpSupportSpaceBlock]}>
            <Image
              style={[styles.iconlylightlock, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon20.png")}
            />
            <Image
              style={[styles.stroke1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/stroke-1.png")}
            />
            <Text style={[styles.changePassword1, styles.darkMode1Typo]}>
              App Language
            </Text>
          </View>
          <View style={[styles.changePassword, styles.helpSupportSpaceBlock]}>
            <Image
              style={[styles.iconlylightlock, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconlylightheart.png")}
            />
            <Image
              style={[styles.stroke1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/stroke-1.png")}
            />
            <Text style={[styles.changePassword1, styles.darkMode1Typo]}>
              Favourite Service
            </Text>
          </View>
          <View style={[styles.changePassword, styles.helpSupportSpaceBlock]}>
            <Image
              style={[styles.iconlylightlock, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconlylightstar.png")}
            />
            <Image
              style={[styles.stroke1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/stroke-1.png")}
            />
            <Text style={[styles.changePassword1, styles.darkMode1Typo]}>
              Rate Us
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.aboutApp, styles.appLayout]}>
        <View style={[styles.general, styles.generalFlexBox]}>
          <Text style={styles.general1}>About App</Text>
        </View>
        <View style={styles.list}>
          <View style={[styles.privacyPolicy, styles.symbolsFlexBox]}>
            <Image
              style={styles.iconlylightedit}
              contentFit="cover"
              source={require("../assets/iconlylightshield-done.png")}
            />
            <Text style={styles.privacyPolicy1Typo}>Privacy Policy</Text>
          </View>
          <View style={[styles.termsConditions, styles.helpSupportSpaceBlock]}>
            <Image
              style={styles.iconlylightedit}
              contentFit="cover"
              source={require("../assets/iconlylightdocument.png")}
            />
            <Text
              style={[styles.termsConditions1, styles.privacyPolicy1Typo]}
            >{`Terms & Conditions`}</Text>
          </View>
          <View style={[styles.helpSupport, styles.helpSupportSpaceBlock]}>
            <Image
              style={styles.icon2}
              contentFit="cover"
              source={require("../assets/icon21.png")}
            />
            <Text style={[styles.helpSupport1, styles.deepParmarTypo]}>
              Help Support
            </Text>
          </View>
          <View style={[styles.helpSupport, styles.helpSupportSpaceBlock]}>
            <Image
              style={styles.iconlylightedit}
              contentFit="cover"
              source={require("../assets/iconlylightdanger-circle.png")}
            />
            <Text style={styles.privacyPolicy1Typo}>About</Text>
          </View>
        </View>
      </View>
      <Button
        style={styles.logout}
        title="Logout"
        size="medium"
        status="primary"
        appearance="filled"
        color="#5f60b9"
        textStyle={styles.logoutText}
      >
        Logout
      </Button>
      <Image
        style={[styles.hanymanAppIcon, styles.appLayout]}
        contentFit="cover"
        source={require("../assets/hanyman-app3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoutText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  generalFlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textClr: {
    color: Color.white,
    textAlign: "left",
  },
  symbolsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  editBg: {
    backgroundColor: Color.main,
    flexDirection: "row",
    position: "absolute",
  },
  detailLayout: {
    width: 201,
    position: "absolute",
  },
  deepParmarFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  logout1Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  darkMode1Typo: {
    left: 26,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  helpSupportSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  appLayout: {
    width: 375,
    left: 0,
  },
  privacyPolicy1Typo: {
    marginLeft: 10,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  deepParmarTypo: {
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    fontWeight: "500",
    color: Color.white,
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
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    paddingVertical: 0,
    alignItems: "center",
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  imageIcon: {
    left: 45,
    borderRadius: Border.br_161xl,
    width: 100,
    height: 100,
    top: 0,
    position: "absolute",
  },
  deepParmar: {
    fontSize: FontSize.size_3xl,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  deepexamplegmailcom: {
    color: Color.body,
    marginTop: 8,
    textAlign: "center",
    alignSelf: "stretch",
  },
  detail: {
    top: 124,
    alignItems: "center",
    left: 0,
  },
  iconlylightedit: {
    width: 16,
    height: 16,
  },
  edit: {
    top: 67,
    left: 112,
    borderRadius: Border.br_71xl,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 3,
    padding: Padding.p_5xs,
  },
  profileDetail: {
    top: 121,
    left: 83,
    height: 177,
  },
  general1: {
    fontSize: FontSize.size_xs,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    textAlign: "left",
  },
  general: {
    backgroundColor: Color.background,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
  icon: {
    height: "84.21%",
    top: "10.53%",
    bottom: "5.26%",
    left: "0%",
    right: "95.21%",
    width: "4.79%",
    maxWidth: "100%",
  },
  switch: {
    left: 299,
    borderRadius: 149,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_lg,
    paddingTop: 2,
    paddingRight: 2,
    paddingBottom: 2,
    alignItems: "center",
    top: 0,
  },
  darkMode1: {
    top: 2,
  },
  darkMode: {
    height: 19,
    alignSelf: "stretch",
  },
  iconlylightlock: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "95.21%",
    width: "4.79%",
    maxWidth: "100%",
  },
  stroke1Icon: {
    height: "56.25%",
    width: "1.35%",
    top: "18.75%",
    right: "0%",
    bottom: "25%",
    left: "98.65%",
  },
  changePassword1: {
    top: 0,
  },
  changePassword: {
    height: 16,
  },
  list: {
    paddingLeft: Padding.p_xl,
    marginTop: 16,
    alignSelf: "stretch",
  },
  generalSetting: {
    top: 330,
    width: 354,
    left: 0,
    position: "absolute",
  },
  privacyPolicy: {
    height: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  termsConditions1: {
    flex: 1,
  },
  termsConditions: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon2: {
    height: 15,
    width: 15,
  },
  helpSupport1: {
    marginLeft: 11,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
  },
  helpSupport: {
    height: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  aboutApp: {
    top: 587,
    position: "absolute",
  },
  logout: {
    top: 853,
    left: 20,
    borderRadius: Border.br_xs,
    width: 335,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  hanymanAppIcon: {
    top: 785,
    height: 60,
    position: "absolute",
  },
  userProfile: {
    backgroundColor: Color.white,
    width: "100%",
    height: 916,
    overflow: "hidden",
    flex: 1,
  },
});

export default UserProfile;
