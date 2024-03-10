import React, { useState } from "react";
import { Text, StyleSheet, View, StatusBar, Pressable } from "react-native";
import { Image } from "expo-image";
import { RadioGroup, Radio, Button } from "@ui-kitten/components";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ServiceFilter1 = () => {
  const [radioselectedIndex, setRadioselectedIndex] = useState(undefined);
  const [checkBox3checked, setCheckBox3checked] = useState(false);
  const [checkBox4checked, setCheckBox4checked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.serviceFilter}>
      <View style={[styles.navigation, styles.viewFlexBox]}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
        </View>
        <View style={styles.symbols}>
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
      <StatusBar style={styles.framePosition1} barStyle="default" />
      <View style={[styles.frame, styles.framePosition1]}>
        <View style={[styles.all, styles.allBorder]}>
          <Text style={[styles.status, styles.statusTypo]}>Status</Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.framePosition1]}>
        <Pressable
          style={[styles.all, styles.allBorder]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "ServiceFilter" })
          }
        >
          <Text style={[styles.status, styles.statusTypo]}>Rating</Text>
        </Pressable>
      </View>
      <View style={[styles.frame2, styles.framePosition1]}>
        <View style={[styles.all2, styles.allBorder]}>
          <Text style={[styles.provider, styles.statusTypo]}>Provider</Text>
        </View>
      </View>
      <View style={[styles.frame3, styles.framePosition1]}>
        <Pressable
          style={[styles.all, styles.allBorder]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "ServiceFilter" })
          }
        >
          <Text style={[styles.status, styles.statusTypo]}>Price</Text>
        </Pressable>
      </View>
      <View style={[styles.frame4, styles.framePosition]}>
        <View style={[styles.view, styles.viewFlexBox]}>
          <View style={styles.viewFlexBox}>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image13.png")}
            />
            <View style={styles.name}>
              <Text style={[styles.naomieHackett, styles.applyTypo]}>
                Naomie Hackett
              </Text>
              <Text style={[styles.memberSince2015, styles.yearOfJoiningTypo]}>
                Member since 2015
              </Text>
            </View>
          </View>
          <Image
            style={styles.radioBtnIcon}
            contentFit="cover"
            source={require("../assets/radio-btn.png")}
          />
        </View>
      </View>
      <View style={styles.serviceFilterChild} />
      <View style={[styles.frame5, styles.framePosition]}>
        <View style={styles.parent}>
          <View style={[styles.view, styles.viewFlexBox]}>
            <View style={[styles.handymanInfo1, styles.viewFlexBox]}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image14.png")}
              />
              <View>
                <Text style={[styles.handyman, styles.statusTypo]}>
                  HandyMan
                </Text>
                <Text style={styles.yearOfJoiningTypo}>Year of Joining</Text>
              </View>
            </View>
            <View style={[styles.checkbox, styles.checkboxLayout]} />
          </View>
          <View style={[styles.frameChild, styles.view2SpaceBlock]} />
          <View style={[styles.view2, styles.view2SpaceBlock]}>
            <View style={[styles.handymanInfo2, styles.viewFlexBox]}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image14.png")}
              />
              <View>
                <Text style={[styles.handyman, styles.statusTypo]}>
                  HandyMan
                </Text>
                <Text style={styles.yearOfJoiningTypo}>Year of Joining</Text>
              </View>
            </View>
            <View style={[styles.checkbox1, styles.checkboxLayout]} />
          </View>
          <View style={[styles.frameChild, styles.view2SpaceBlock]} />
          <View style={[styles.view2, styles.view2SpaceBlock]}>
            <View style={[styles.handymanInfo3, styles.viewFlexBox]}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image14.png")}
              />
              <View>
                <Text style={[styles.handyman, styles.statusTypo]}>
                  HandyMan
                </Text>
                <Text style={styles.yearOfJoiningTypo}>Year of Joining</Text>
              </View>
            </View>
            <View style={styles.checkboxLayout}>
              <RadioGroup
                style={[styles.radiogroup, styles.checkboxLayout]}
                selectedIndex={radioselectedIndex}
                onChange={setRadioselectedIndex}
              >
                <Radio>{() => <Text style={styles.radioText}> </Text>}</Radio>
              </RadioGroup>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/2.png")}
              />
            </View>
          </View>
          <View style={[styles.frameChild, styles.view2SpaceBlock]} />
          <View style={[styles.view2, styles.view2SpaceBlock]}>
            <View style={[styles.handymanInfo2, styles.viewFlexBox]}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image15.png")}
              />
              <View>
                <Text style={[styles.handyman, styles.statusTypo]}>
                  HandyMan
                </Text>
                <Text style={styles.yearOfJoiningTypo}>Year of Joining</Text>
              </View>
            </View>
            <Image
              style={styles.checkboxLayout}
              contentFit="cover"
              source={require("../assets/checkbox1.png")}
            />
          </View>
          <View style={[styles.frameChild, styles.view2SpaceBlock]} />
          <View style={[styles.view2, styles.view2SpaceBlock]}>
            <View style={[styles.handymanInfo2, styles.viewFlexBox]}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image14.png")}
              />
              <View>
                <Text style={[styles.handyman, styles.statusTypo]}>
                  HandyMan
                </Text>
                <Text style={styles.yearOfJoiningTypo}>Year of Joining</Text>
              </View>
            </View>
            <View style={styles.checkboxLayout}>
              <Image
                style={[styles.icon1, styles.checkboxLayout]}
                contentFit="cover"
                source={require("../assets/12.png")}
              />
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/2.png")}
              />
            </View>
          </View>
          <View style={[styles.frameChild, styles.view2SpaceBlock]} />
          <View style={[styles.view2, styles.view2SpaceBlock]}>
            <View style={[styles.handymanInfo2, styles.viewFlexBox]}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image14.png")}
              />
              <View>
                <Text style={[styles.handyman, styles.statusTypo]}>
                  Handyman
                </Text>
                <Text style={styles.yearOfJoiningTypo}>Year of Joining</Text>
              </View>
            </View>
            <View>
              <Checkbox
                status={checkBox3checked ? "checked" : "unchecked"}
                onPress={() => setCheckBox3checked(!checkBox3checked)}
                color="#f6f7f9"
              />
            </View>
          </View>
          <View style={[styles.frameChild, styles.view2SpaceBlock]} />
          <View style={[styles.view2, styles.view2SpaceBlock]}>
            <View style={[styles.handymanInfo7, styles.viewFlexBox]}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image14.png")}
              />
              <View>
                <Text style={[styles.handyman, styles.statusTypo]}>
                  HandyMan
                </Text>
                <Text style={styles.yearOfJoiningTypo}>Member Since 2020</Text>
              </View>
            </View>
            <View>
              <Checkbox
                status={checkBox4checked ? "checked" : "unchecked"}
                onPress={() => setCheckBox4checked(!checkBox4checked)}
                color="#f6f7f9"
              />
            </View>
          </View>
          <View style={[styles.frameChild, styles.view2SpaceBlock]} />
          <View style={[styles.view2, styles.view2SpaceBlock]}>
            <View style={[styles.handymanInfo8, styles.viewFlexBox]}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image14.png")}
              />
              <View>
                <Text style={[styles.handyman, styles.statusTypo]}>
                  Handyman
                </Text>
                <Text style={styles.yearOfJoiningTypo}>Member Since 2020</Text>
              </View>
            </View>
            <Image
              style={styles.checkboxLayout}
              contentFit="cover"
              source={require("../assets/12.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.hanymanAppIcon, styles.framePosition1]}
        contentFit="cover"
        source={require("../assets/hanyman-app2.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
      <View style={styles.frame6}>
        <Button
          style={styles.applyBtn}
          title="Apply"
          appearance="outline"
          color="#5f60b9"
          textStyle={styles.applyBtnText}
          onPress={() => navigation.navigate("OnClickOfCategory")}
        >
          Apply
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radioText: {},
  applyBtnText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  framePosition1: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  allBorder: {
    paddingRight: Padding.p_5xl,
    paddingLeft: Padding.p_xl,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    justifyContent: "space-between",
  },
  statusTypo: {
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  framePosition: {
    left: 138,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  applyTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  yearOfJoiningTypo: {
    marginTop: 8,
    color: Color.body,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  checkboxLayout: {
    height: 14,
    width: 14,
  },
  view2SpaceBlock: {
    marginTop: 21,
    alignSelf: "stretch",
  },
  frameIconPosition: {
    top: 773,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.white,
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
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    width: 375,
    left: 0,
    position: "absolute",
    top: 0,
    justifyContent: "space-between",
  },
  status: {
    color: Color.heading,
    textTransform: "capitalize",
  },
  all: {
    borderRadius: Border.br_5xs,
    width: 98,
    height: 40,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_xs,
    backgroundColor: Color.white,
  },
  frame: {
    top: 105,
    justifyContent: "center",
    overflow: "hidden",
  },
  frame1: {
    top: 157,
    justifyContent: "center",
    overflow: "hidden",
  },
  provider: {
    color: Color.main,
    textTransform: "capitalize",
  },
  all2: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    width: 118,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    backgroundColor: Color.background,
    height: 50,
  },
  frame2: {
    top: 209,
    justifyContent: "center",
    overflow: "hidden",
  },
  frame3: {
    top: 261,
    justifyContent: "center",
    overflow: "hidden",
  },
  imageIcon: {
    width: 60,
    height: 60,
    borderRadius: Border.br_141xl,
  },
  naomieHackett: {
    alignSelf: "stretch",
    color: Color.heading,
  },
  memberSince2015: {
    alignSelf: "stretch",
  },
  name: {
    width: 125,
  },
  radioBtnIcon: {
    width: 10,
    height: 10,
    display: "none",
  },
  view: {
    alignSelf: "stretch",
  },
  frame4: {
    top: 753,
    width: 237,
  },
  serviceFilterChild: {
    top: 81,
    left: 117,
    width: 258,
    height: 731,
    backgroundColor: Color.background,
    position: "absolute",
  },
  imageIcon1: {
    width: 45,
    height: 45,
    borderRadius: Border.br_141xl,
  },
  handyman: {
    color: Color.heading,
  },
  handymanInfo1: {
    width: 139,
  },
  checkbox: {
    borderRadius: Border.br_smi,
    borderColor: Color.main,
    width: 14,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.background,
  },
  frameChild: {
    backgroundColor: Color.border,
    height: 1,
  },
  handymanInfo2: {
    width: 141,
  },
  checkbox1: {
    borderRadius: 14,
    borderColor: Color.main,
    width: 14,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.background,
  },
  view2: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  handymanInfo3: {
    width: 140,
  },
  radiogroup: {
    borderColor: Color.main,
    width: 14,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    top: 6,
    left: 6,
    width: 8,
    height: 8,
    display: "none",
    position: "absolute",
  },
  icon1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  handymanInfo7: {
    width: 174,
  },
  handymanInfo8: {
    width: 173,
  },
  parent: {
    alignSelf: "stretch",
  },
  frame5: {
    width: 222,
    top: 105,
  },
  hanymanAppIcon: {
    top: 751,
    height: 60,
  },
  frameIcon: {
    left: 225,
    width: 150,
    height: 20,
  },
  frameIcon1: {
    top: 775,
    left: 227,
    width: 148,
    height: 17,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon2: {
    left: 323,
    width: 52,
    height: 15,
  },
  applyBtn: {
    borderRadius: Border.br_xs,
    width: 335,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
    flexDirection: "row",
  },
  frame6: {
    top: 708,
    left: 17,
    width: 355,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  serviceFilter: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ServiceFilter1;
