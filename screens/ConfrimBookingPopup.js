import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ConfrimBookingPopup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confrimBookingPopup}>
      <View style={styles.navigation}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
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
      <View style={[styles.topNav, styles.btnFlexBox]}>
        <Image
          style={styles.stroke1Icon}
          contentFit="cover"
          source={require("../assets/stroke-11.png")}
        />
        <Text style={[styles.bookService, styles.textTypo1]}>Book Service</Text>
      </View>
      <View style={styles.steps}>
        <Text style={[styles.step1, styles.stepTypo]}>Step1</Text>
        <Text style={[styles.step2, styles.stepTypo]}>Step 2</Text>
        <Text style={[styles.step3, styles.stepTypo]}>Step 3</Text>
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
            <Text style={[styles.text1, styles.iconPosition]}>01</Text>
          </View>
          <View style={[styles.item, styles.itemPosition]} />
          <View style={[styles.view2, styles.childPosition]}>
            <Image
              style={[styles.child, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-209.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>02</Text>
          </View>
          <View style={[styles.lineView, styles.itemPosition]} />
          <View style={[styles.view3, styles.viewPosition]}>
            <View style={styles.groupChildLayout}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-2091.png")}
              />
              <Text style={[styles.text3, styles.textTypo1]}>03</Text>
            </View>
            <View style={styles.child1} />
          </View>
        </View>
      </View>
      <View style={[styles.enterDetailInformation, styles.popupPosition]}>
        <View style={[styles.detail, styles.detailSpaceBlock1]}>
          <View>
            <Text style={[styles.apartmentCleaning, styles.textTypo1]}>
              Apartment Cleaning
            </Text>
            <View style={[styles.quantity, styles.symbolsFlexBox]}>
              <Image
                style={styles.quantityLayout}
                contentFit="cover"
                source={require("../assets/polygon-21.png")}
              />
              <Text style={[styles.text4, styles.textTypo1]}>2</Text>
              <Image
                style={[styles.quantityItem, styles.quantityLayout]}
                contentFit="cover"
                source={require("../assets/polygon-11.png")}
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
          style={[styles.enterDetailInformationInner, styles.detailSpaceBlock]}
        >
          <View style={styles.frameChild} />
        </View>
        <View style={styles.detailSpaceBlock}>
          <Text style={[styles.priceDetail, styles.next1Typo]}>
            Price Detail
          </Text>
          <View style={[styles.formField, styles.detailSpaceBlock1]}>
            <View style={styles.contentParent}>
              <View style={styles.contentParent}>
                <View style={[styles.price, styles.btnFlexBox]}>
                  <Text style={[styles.price1, styles.textTypo1]}>Price</Text>
                  <Text style={[styles.text5, styles.textTypo1]}>₹120</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.subTotal, styles.lineSpaceBlock]}>
                  <Text style={[styles.price1, styles.textTypo1]}>
                    Sub Total
                  </Text>
                  <Text style={[styles.text6, styles.textTypo]}>
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
                  <Text style={[styles.text7, styles.textTypo]}>- ₹15.12</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.subTotal, styles.lineSpaceBlock]}>
                  <Text style={[styles.price1, styles.textTypo1]}>Tax</Text>
                  <Text style={[styles.text8, styles.textTypo]}>₹15.12</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.coupon, styles.lineSpaceBlock]}>
                  <Text style={[styles.price1, styles.textTypo1]}>Coupon</Text>
                  <Text style={[styles.applyCoupon, styles.textTypo1]}>
                    Apply coupon
                  </Text>
                </View>
              </View>
              <View style={styles.lineWrapper}>
                <View style={[styles.line4, styles.lineLayout]} />
              </View>
              <View style={[styles.totalAmount, styles.btnFlexBox]}>
                <Text style={[styles.totalAmount1, styles.text9Typo]}>
                  Total Amount
                </Text>
                <Text style={[styles.text9, styles.text9Typo]}>₹255.12</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.popupPosition]}>
        <View style={styles.btnFlexBox}>
          <View style={[styles.cancel, styles.cancelSpaceBlock]}>
            <Text style={[styles.cancel1, styles.next1Typo]}>Previous</Text>
          </View>
          <View style={[styles.next, styles.cancelSpaceBlock]}>
            <Text style={[styles.next1, styles.next1Typo]}>Book</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bg, styles.bgPosition]} />
      <View style={[styles.popup, styles.popupPosition]}>
        <Image
          style={styles.checkIcon}
          contentFit="cover"
          source={require("../assets/check.png")}
        />
        <View style={styles.content1}>
          <View style={styles.text10}>
            <Text style={[styles.confirmBooking, styles.areYouSureTypo]}>
              confirm Booking
            </Text>
            <Text
              style={[styles.areYouSure, styles.areYouSureTypo]}
            >{`Are you sure you want to confirm 
the booking`}</Text>
          </View>
          <Pressable
            style={[styles.button1, styles.btnFlexBox]}
            onPress={() => navigation.navigate("BookTheServiceStep1")}
          >
            <View style={[styles.btn1, styles.btnFlexBox]}>
              <Button
                style={[styles.cancel2, styles.cancelSpaceBlock]}
                title="Cancel"
                appearance=""
                color="#fff"
                textStyle={styles.cancelText}
              >
                Cancel
              </Button>
              <Button
                style={[styles.cancel2, styles.cancelSpaceBlock]}
                title="Book"
                appearance=""
                color="#5f60b9"
                textStyle={styles.nextText}
                onPress={() => navigation.navigate("BookingSuccessful")}
              >
                Book
              </Button>
            </View>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.hanymanAppIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/hanyman-app2.png")}
      />
      <Pressable
        style={[styles.iconlylightcategory, styles.iconlyboldticketLayout]}
        onPress={() => navigation.navigate("OnClickOfCategory")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightcategory.png")}
        />
      </Pressable>
      <Pressable
        style={styles.profile}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profile1.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconlyboldticket, styles.iconlyboldticketLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldticket.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cancelText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  nextText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  symbolsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textTypo1: {
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  stepTypo: {
    top: "76.81%",
    textTransform: "capitalize",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  viewPosition: {
    bottom: "0%",
    width: "17.45%",
    height: "100%",
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
  popupPosition: {
    width: 335,
    left: 20,
    position: "absolute",
  },
  detailSpaceBlock1: {
    paddingVertical: Padding.p_5xl,
    backgroundColor: Color.background,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xl,
  },
  quantityLayout: {
    width: 11,
    borderRadius: Border.br_12xs,
    height: 11,
  },
  detailSpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  next1Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
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
  text9Typo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  cancelSpaceBlock: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bgPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  areYouSureTypo: {
    textAlign: "center",
    alignSelf: "stretch",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  iconlyboldticketLayout: {
    height: "2.46%",
    width: "5.33%",
    position: "absolute",
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
    overflow: "hidden",
  },
  navigation: {
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  stroke1Icon: {
    width: 6,
    height: 12,
  },
  bookService: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansMedium,
    color: Color.white,
  },
  topNav: {
    top: 31,
    paddingHorizontal: 27,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_mini,
    backgroundColor: Color.main,
    alignItems: "center",
    width: 375,
    left: 0,
    position: "absolute",
  },
  step1: {
    color: Color.body,
    textTransform: "capitalize",
    left: "0%",
  },
  step2: {
    left: "79.26%",
    color: Color.heading,
    textTransform: "capitalize",
  },
  step3: {
    left: "133.64%",
    display: "none",
    color: Color.body,
    textTransform: "capitalize",
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
  text1: {
    left: "29.73%",
    display: "none",
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
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
  text2: {
    top: "27.03%",
    left: "27.03%",
    color: Color.white,
    fontSize: FontSize.size_sm,
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
    width: 37,
    top: 0,
    position: "absolute",
  },
  text3: {
    top: 10,
    left: 10,
    color: Color.body,
    fontSize: FontSize.size_sm,
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
  apartmentCleaning: {
    alignSelf: "stretch",
    color: Color.heading,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansMedium,
  },
  text4: {
    color: Color.colorBlack,
    marginLeft: 12,
    fontSize: FontSize.size_sm,
  },
  quantityItem: {
    marginLeft: 12,
  },
  quantity: {
    padding: Padding.p_5xs,
    marginTop: 16,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  imageIcon: {
    width: 80,
    height: 80,
    borderRadius: Border.br_8xs,
  },
  detail: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild: {
    backgroundColor: Color.colorSilver,
    width: 100,
    height: 100,
  },
  enterDetailInformationInner: {
    display: "none",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  priceDetail: {
    alignSelf: "stretch",
    color: Color.heading,
    textTransform: "capitalize",
  },
  price1: {
    color: Color.heading,
    fontSize: FontSize.size_sm,
  },
  text5: {
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  price: {
    alignSelf: "stretch",
  },
  line: {
    height: 1,
    backgroundColor: Color.border,
  },
  text6: {
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
  },
  text7: {
    color: Color.colorMediumseagreen_200,
  },
  text8: {
    color: Color.colorRed,
  },
  applyCoupon: {
    color: Color.main,
    fontSize: FontSize.size_sm,
  },
  coupon: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  contentParent: {
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
  text9: {
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
  },
  enterDetailInformation: {
    top: 217,
  },
  cancel1: {
    color: Color.heading,
  },
  cancel: {
    width: 157,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
  },
  next1: {
    color: Color.white,
  },
  next: {
    width: 157,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_xs,
    backgroundColor: Color.main,
  },
  button: {
    top: 661,
    borderRadius: Border.br_xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bg: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 752,
    top: 0,
    width: 375,
  },
  checkIcon: {
    width: 105,
    height: 105,
  },
  confirmBooking: {
    fontSize: FontSize.size_3xl,
    color: Color.heading,
    textTransform: "capitalize",
  },
  areYouSure: {
    lineHeight: 20,
    marginTop: 12,
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  text10: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  cancel2: {
    borderRadius: Border.br_5xs,
    width: 134,
  },
  btn1: {
    width: 284,
  },
  button1: {
    marginTop: 40,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  content1: {
    marginTop: 48,
    alignSelf: "stretch",
    alignItems: "center",
  },
  popup: {
    top: 192,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_37xl,
    borderRadius: Border.br_xs,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  hanymanAppIcon: {
    top: 752,
    height: 60,
  },
  icon1: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  iconlylightcategory: {
    left: "60%",
    right: "34.67%",
    bottom: "2.22%",
    top: "95.32%",
  },
  profile: {
    left: "86.13%",
    right: "10.67%",
    bottom: "2.8%",
    width: "3.2%",
    height: "1.88%",
    top: "95.32%",
    position: "absolute",
  },
  iconlyboldticket: {
    top: "95.07%",
    right: "60%",
    bottom: "2.46%",
    left: "34.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  confrimBookingPopup: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ConfrimBookingPopup;
