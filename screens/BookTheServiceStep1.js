import * as React from "react";
import { StatusBar, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const BookTheServiceStep1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookTheServiceStep2}>
      <StatusBar style={styles.frameLayout} barStyle="default" />
      <View style={styles.steps}>
        <Text style={[styles.step1, styles.textTypo1]}>Step1</Text>
        <Text style={[styles.step2, styles.textTypo1]}>Step 2</Text>
        <Text style={[styles.step3, styles.textTypo1]}>Step 3</Text>
        <View style={styles.view}>
          <View style={[styles.view1, styles.viewPosition]}>
            <Image
              style={[styles.child, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-2092.png")}
            />
            <Image
              style={[styles.icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/icon22.png")}
            />
            <Text style={[styles.text, styles.iconPosition]}>01</Text>
          </View>
          <View style={[styles.item, styles.itemPosition]} />
          <View style={[styles.view2, styles.childPosition]}>
            <Image
              style={[styles.child, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-209.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>02</Text>
          </View>
          <View style={[styles.lineView, styles.itemPosition]} />
          <View style={[styles.view3, styles.viewPosition]}>
            <View style={styles.groupChildLayout}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-2091.png")}
              />
              <Text style={[styles.text2, styles.textTypo1]}>03</Text>
            </View>
            <View style={styles.child1} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.frameIcon, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <View style={[styles.frame1, styles.frame1Layout]}>
        <View style={styles.enterDetailInformation}>
          <View style={[styles.detail, styles.detailSpaceBlock1]}>
            <View style={styles.serviceTitle}>
              <Text style={[styles.apartmentCleaning, styles.textTypo1]}>
                Apartment Cleaning
              </Text>
              <View style={styles.quantity}>
                <Image
                  style={styles.quantityLayout}
                  contentFit="cover"
                  source={require("../assets/polygon-2.png")}
                />
                <Text style={[styles.text3, styles.textTypo1]}>2</Text>
                <Image
                  style={[styles.quantityItem, styles.quantityLayout]}
                  contentFit="cover"
                  source={require("../assets/polygon-1.png")}
                />
              </View>
            </View>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image16.png")}
            />
          </View>
          <View
            style={[
              styles.enterDetailInformationInner,
              styles.detailSpaceBlock,
            ]}
          >
            <View style={styles.frameChild} />
          </View>
          <View style={styles.detailSpaceBlock}>
            <Text style={[styles.priceDetail, styles.next1Typo]}>
              Price Detail
            </Text>
            <View style={[styles.formField, styles.detailSpaceBlock1]}>
              <View style={styles.enterDetailInformation}>
                <View style={styles.enterDetailInformation}>
                  <View style={[styles.price, styles.detailFlexBox]}>
                    <Text style={[styles.price1, styles.textTypo1]}>Price</Text>
                    <Text style={[styles.text4, styles.textTypo1]}>₹120</Text>
                  </View>
                  <View style={[styles.line, styles.lineSpaceBlock]} />
                  <View style={[styles.subTotal, styles.lineSpaceBlock]}>
                    <Text style={[styles.price1, styles.textTypo1]}>
                      Sub Total
                    </Text>
                    <Text style={[styles.text5, styles.textTypo]}>
                      ₹120 * 2 = ₹240
                    </Text>
                  </View>
                  <View style={[styles.line, styles.lineSpaceBlock]} />
                  <View style={[styles.subTotal, styles.lineSpaceBlock]}>
                    <Text
                      style={[styles.discount5OffContainer, styles.textTypo1]}
                    >
                      <Text style={styles.discount}>{`Discount `}</Text>
                      <Text style={styles.off}>(5% off)</Text>
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>
                      - ₹15.12
                    </Text>
                  </View>
                  <View style={[styles.line, styles.lineSpaceBlock]} />
                  <View style={[styles.subTotal, styles.lineSpaceBlock]}>
                    <Text style={[styles.price1, styles.textTypo1]}>Tax</Text>
                    <Text style={[styles.text7, styles.textTypo]}>₹15.12</Text>
                  </View>
                  <View style={[styles.line, styles.lineSpaceBlock]} />
                  <View style={[styles.coupon, styles.lineSpaceBlock]}>
                    <Text style={[styles.price1, styles.textTypo1]}>
                      Coupon
                    </Text>
                    <Text style={[styles.applyCoupon, styles.textTypo1]}>
                      Apply Coupon
                    </Text>
                  </View>
                </View>
                <View style={styles.lineWrapper}>
                  <View style={[styles.line4, styles.lineLayout]} />
                </View>
                <View style={[styles.totalAmount, styles.detailFlexBox]}>
                  <Text style={[styles.totalAmount1, styles.text8Typo]}>
                    Total Amount
                  </Text>
                  <Text style={[styles.text8, styles.text8Typo]}>₹255.12</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.detailFlexBox]}
          onPress={() => navigation.navigate("ConfrimBookingPopup")}
        >
          <View style={styles.detailFlexBox}>
            <Pressable
              style={[styles.cancel, styles.nextSpaceBlock]}
              onPress={() => navigation.navigate("BookTheServiceStep")}
            >
              <Text style={[styles.cancel1, styles.next1Typo]}>Previous</Text>
            </Pressable>
            <Button
              style={styles.nextSpaceBlock}
              title="Book"
              size="medium"
              status="primary"
              appearance="filled"
              color="#5f60b9"
              textStyle={styles.nextText}
            >
              Book
            </Button>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  frameLayout: {
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  viewPosition: {
    bottom: "0%",
    height: "100%",
    width: "17.45%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    top: "29.73%",
    position: "absolute",
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
  childPosition: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 37,
    width: 37,
  },
  frame1Layout: {
    width: 335,
    alignItems: "center",
  },
  detailSpaceBlock1: {
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.background,
    borderRadius: Border.br_xs,
  },
  quantityLayout: {
    height: 11,
    width: 11,
    borderRadius: Border.br_12xs,
  },
  detailSpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  next1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  detailFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lineSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  lineLayout: {
    height: 1,
    backgroundColor: Color.border,
  },
  text8Typo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  nextSpaceBlock: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_3xs,
    width: 157,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  step1: {
    color: Color.body,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    left: "0%",
    top: "76.81%",
    position: "absolute",
  },
  step2: {
    left: "79.26%",
    color: Color.heading,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    top: "76.81%",
    position: "absolute",
  },
  step3: {
    left: "133.64%",
    display: "none",
    color: Color.body,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    top: "76.81%",
    position: "absolute",
  },
  child: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  icon: {
    height: "39.73%",
    width: "54.05%",
    right: "21.62%",
    bottom: "30.54%",
    left: "24.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text: {
    left: "29.73%",
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.body,
    fontSize: FontSize.size_sm,
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
    color: Color.white,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
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
    top: 0,
    position: "absolute",
  },
  text2: {
    top: 10,
    left: 10,
    color: Color.body,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
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
  frameIcon: {
    top: 752,
    left: -3,
    height: 60,
  },
  apartmentCleaning: {
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
    color: Color.heading,
  },
  text3: {
    color: Color.colorBlack,
    marginLeft: 12,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  quantityItem: {
    marginLeft: 12,
  },
  quantity: {
    padding: Padding.p_5xs,
    marginTop: 16,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  serviceTitle: {
    width: 176,
  },
  imageIcon: {
    width: 80,
    height: 80,
    borderRadius: Border.br_8xs,
  },
  detail: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 335,
    alignItems: "center",
  },
  frameChild: {
    backgroundColor: Color.colorSilver,
    width: 100,
    height: 100,
  },
  enterDetailInformationInner: {
    justifyContent: "space-between",
    flexDirection: "row",
    display: "none",
  },
  priceDetail: {
    alignSelf: "stretch",
    color: Color.heading,
    textTransform: "capitalize",
  },
  price1: {
    color: Color.heading,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text4: {
    color: Color.body,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  price: {
    alignSelf: "stretch",
  },
  line: {
    height: 1,
    backgroundColor: Color.border,
  },
  text5: {
    color: Color.body,
  },
  subTotal: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  discount: {
    color: Color.heading,
  },
  off: {
    color: Color.colorMediumseagreen_200,
  },
  discount5OffContainer: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text6: {
    color: Color.colorMediumseagreen_200,
  },
  text7: {
    color: Color.colorRed,
  },
  applyCoupon: {
    color: Color.main,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  coupon: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  enterDetailInformation: {
    alignSelf: "stretch",
  },
  line4: {
    alignSelf: "stretch",
  },
  lineWrapper: {
    paddingTop: Padding.p_xl,
    alignSelf: "stretch",
  },
  totalAmount1: {
    color: Color.heading,
  },
  text8: {
    color: Color.main,
    textTransform: "capitalize",
  },
  totalAmount: {
    paddingTop: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  formField: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  cancel1: {
    color: Color.heading,
  },
  cancel: {
    backgroundColor: Color.white,
  },
  button: {
    marginTop: -5,
    borderRadius: Border.br_xs,
    justifyContent: "space-between",
    width: 335,
  },
  frame1: {
    top: 217,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  bookTheServiceStep2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default BookTheServiceStep1;
