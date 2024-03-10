import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Input, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const BookTheServiceStep = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bookTheServiceStep1, styles.childLayout]}>
      <StatusBar style={styles.framePosition} barStyle="default" />
      <View style={styles.steps}>
        <Text style={[styles.step1, styles.step1Typo]}>Step1</Text>
        <Text style={[styles.step2, styles.stepTypo]}>Step 2</Text>
        <Text style={[styles.step3, styles.stepTypo]}>Step 3</Text>
        <View style={styles.view}>
          <View style={[styles.view1, styles.viewPosition]}>
            <Image
              style={[styles.child, styles.childPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-209.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>01</Text>
          </View>
          <View style={[styles.item, styles.itemPosition]} />
          <View style={[styles.view2, styles.childPosition]}>
            <Image
              style={[styles.child, styles.childPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-2091.png")}
            />
            <Text style={[styles.text1, styles.stepTypo]}>02</Text>
          </View>
          <View style={[styles.lineView, styles.itemPosition]} />
          <View style={[styles.view3, styles.viewPosition]}>
            <View style={styles.groupChildLayout}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-2091.png")}
              />
              <Text style={[styles.text2, styles.stepTypo]}>03</Text>
            </View>
            <View style={styles.child1} />
          </View>
        </View>
      </View>
      <View style={styles.enterDetailInformation}>
        <Text style={[styles.enterDetailInformation1, styles.step1Typo]}>
          Enter Detail Information
        </Text>
        <View style={[styles.formField, styles.formFieldSpaceBlock]}>
          <View style={styles.dateAndTime}>
            <Text style={[styles.dateAndTime1, styles.step1Typo]}>
              Date And Time :
            </Text>
            <Input
              style={[styles.enterDateAndTime, styles.enterSpaceBlock]}
              placeholder="Enter Date And Time"
              placeholderTextColor="#6c757d"
              textStyle={styles.enterDateAndTimeText}
            />
          </View>
          <View style={styles.yourAddress}>
            <View style={styles.dateAndTime}>
              <Text style={[styles.dateAndTime1, styles.step1Typo]}>
                Your Address :
              </Text>
              <Input
                style={[styles.enterDateAndTime1, styles.enterSpaceBlock]}
                placeholder="Enter Your Address"
                placeholderTextColor="#6c757d"
                textStyle={styles.enterDateAndTime1Text}
              />
            </View>
            <Text
              style={[styles.useCurrentLocation, styles.formFieldSpaceBlock]}
            >
              Use Current Location
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <Button
        style={styles.nextBtn}
        title="Next"
        appearance=""
        color="#5f60b9"
        textStyle={styles.nextBtnText}
        onPress={() => navigation.navigate("BookTheServiceStep1")}
      >
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  enterDateAndTimeText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  enterDateAndTime1Text: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  nextBtnText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  childLayout: {
    overflow: "hidden",
    width: "100%",
  },
  framePosition: {
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  step1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  stepTypo: {
    color: Color.body,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  viewPosition: {
    bottom: "0%",
    height: "100%",
    width: "17.45%",
    top: "0%",
    position: "absolute",
  },
  childPosition: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  itemPosition: {
    borderTopWidth: 1.5,
    borderColor: Color.border,
    bottom: "47.84%",
    top: "48.11%",
    height: "4.05%",
    borderRadius: 0.001,
    borderStyle: "dashed",
    position: "absolute",
  },
  groupChildLayout: {
    height: 37,
    width: 37,
  },
  formFieldSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  enterSpaceBlock: {
    marginTop: 12,
    paddingRight: Padding.p_90xl,
    paddingTop: Padding.p_lg,
    paddingLeft: Padding.p_base,
    borderRadius: Border.br_3xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  step1: {
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "76.81%",
    position: "absolute",
  },
  step2: {
    left: "79.26%",
    textTransform: "capitalize",
    top: "76.81%",
  },
  step3: {
    left: "133.64%",
    display: "none",
    textTransform: "capitalize",
    top: "76.81%",
  },
  child: {
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    overflow: "hidden",
    width: "100%",
  },
  text: {
    top: "29.73%",
    left: "29.73%",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  view1: {
    right: "82.55%",
    left: "0%",
  },
  item: {
    width: "47.88%",
    right: "26.51%",
    left: "25.61%",
  },
  text1: {
    top: "27.03%",
    left: "27.03%",
  },
  view2: {
    left: "82.55%",
    width: "17.45%",
    right: "0%",
  },
  lineView: {
    width: "35.61%",
    right: "-30.57%",
    left: "94.95%",
    display: "none",
  },
  groupChild: {
    left: 0,
    width: 37,
    top: 0,
    position: "absolute",
  },
  text2: {
    top: 10,
    left: 10,
  },
  child1: {
    borderColor: Color.colorLightgray,
    borderRightWidth: 1.5,
    width: 2,
    height: 87,
    marginTop: 20,
    borderRadius: 0.001,
    borderStyle: "dashed",
    display: "none",
  },
  view3: {
    right: "-55.66%",
    left: "138.21%",
    display: "none",
    alignItems: "center",
  },
  view: {
    height: "53.62%",
    width: "97.7%",
    right: "1.84%",
    bottom: "46.38%",
    left: "0.46%",
    top: "0%",
    position: "absolute",
  },
  steps: {
    top: 105,
    left: 79,
    width: 217,
    height: 69,
    position: "absolute",
  },
  enterDetailInformation1: {
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  dateAndTime1: {
    alignSelf: "stretch",
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  enterDateAndTime: {
    paddingBottom: Padding.p_lg,
  },
  dateAndTime: {
    alignSelf: "stretch",
  },
  enterDateAndTime1: {
    paddingBottom: 60,
  },
  useCurrentLocation: {
    fontSize: FontSize.size_xs,
    color: Color.main,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    marginTop: 16,
  },
  yourAddress: {
    alignItems: "flex-end",
    marginTop: 24,
    alignSelf: "stretch",
  },
  formField: {
    backgroundColor: Color.background,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xl,
    borderRadius: Border.br_xs,
    marginTop: 16,
  },
  enterDetailInformation: {
    top: 214,
    width: 335,
    left: 20,
    position: "absolute",
  },
  frameIcon: {
    top: 752,
    height: 60,
  },
  nextBtn: {
    top: 595,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: Border.br_xs,
    width: 335,
    left: 20,
    position: "absolute",
  },
  bookTheServiceStep1: {
    flex: 1,
    height: 812,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default BookTheServiceStep;
