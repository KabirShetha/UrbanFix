import * as React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Payment = () => {
  return (
    <View style={[styles.payment, styles.frameFlexBox]}>
      <StatusBar style={styles.frameFlexBox} barStyle="default" />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View>
            <View style={styles.paymentLayout}>
              <View style={[styles.bg, styles.bgBorder]} />
              <View style={styles.serviceDetail}>
                <View style={[styles.paymentId, styles.paymentFlexBox]}>
                  <Text style={styles.id}>ID</Text>
                  <Text style={[styles.text, styles.textTypo1]}>#12</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Status</Text>
                  <Text style={[styles.text, styles.textTypo1]}>Pending</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Method</Text>
                  <Text style={[styles.text, styles.textTypo1]}>Cash</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Amount Paid</Text>
                  <Text style={[styles.text1, styles.textTypo]}>₹1500</Text>
                </View>
              </View>
              <View style={[styles.userNameAndId, styles.paymentFlexBox]}>
                <Text
                  style={[styles.alexisLockman, styles.text2Typo]}
                >{`User  -> HandyMan`}</Text>
                <Text style={[styles.text2, styles.text2Typo]}>#123</Text>
              </View>
            </View>
            <View style={[styles.payment2, styles.paymentLayout]}>
              <View style={[styles.bg, styles.bgBorder]} />
              <View style={styles.serviceDetail}>
                <View style={[styles.paymentId, styles.paymentFlexBox]}>
                  <Text style={styles.id}>ID</Text>
                  <Text style={[styles.text, styles.textTypo1]}>#14</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Status</Text>
                  <Text style={[styles.text, styles.textTypo1]}>Pending</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Method</Text>
                  <Text style={[styles.text, styles.textTypo1]}>wallet</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Amount Paid</Text>
                  <Text style={[styles.text1, styles.textTypo]}>₹1245</Text>
                </View>
              </View>
              <View style={[styles.userNameAndId, styles.paymentFlexBox]}>
                <Text
                  style={[styles.alexisLockman, styles.text2Typo]}
                >{`User  -> HandyMan`}</Text>
                <Text style={[styles.text2, styles.text2Typo]}>#124</Text>
              </View>
            </View>
            <View style={[styles.payment2, styles.paymentLayout]}>
              <View style={[styles.bg, styles.bgBorder]} />
              <View style={styles.serviceDetail}>
                <View style={[styles.paymentId, styles.paymentFlexBox]}>
                  <Text style={styles.id}>ID</Text>
                  <Text style={[styles.text, styles.textTypo1]}>#12</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Status</Text>
                  <Text style={[styles.text, styles.textTypo1]}>Pending</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Method</Text>
                  <Text style={[styles.text, styles.textTypo1]}>Wallet</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Amount Paid</Text>
                  <Text style={[styles.text1, styles.textTypo]}>₹1500</Text>
                </View>
              </View>
              <View style={[styles.userNameAndId, styles.paymentFlexBox]}>
                <Text
                  style={[styles.alexisLockman, styles.text2Typo]}
                >{`User  -> HandyMan`}</Text>
                <Text style={[styles.text2, styles.text2Typo]}>#125</Text>
              </View>
            </View>
            <View style={[styles.payment2, styles.paymentLayout]}>
              <View style={[styles.bg, styles.bgBorder]} />
              <View style={styles.serviceDetail}>
                <View style={[styles.paymentId, styles.paymentFlexBox]}>
                  <Text style={styles.id}>ID</Text>
                  <Text style={[styles.text, styles.textTypo1]}>#12</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Status</Text>
                  <Text style={[styles.text, styles.textTypo1]}>Pending</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Method</Text>
                  <Text style={[styles.text, styles.textTypo1]}>Cash</Text>
                </View>
                <View style={[styles.line, styles.lineSpaceBlock]} />
                <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
                  <Text style={styles.id}>Amount Paid</Text>
                  <Text style={[styles.text1, styles.textTypo]}>₹248</Text>
                </View>
              </View>
              <View style={[styles.userNameAndId, styles.paymentFlexBox]}>
                <Text
                  style={[styles.alexisLockman, styles.text2Typo]}
                >{`User  -> HandyMan`}</Text>
                <Text style={[styles.text2, styles.text2Typo]}>#126</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.providerAppIcon}
          contentFit="cover"
          source={require("../assets/provider-app4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  bgBorder: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    position: "absolute",
  },
  paymentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textTypo1: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  lineSpaceBlock: {
    marginTop: 10,
    width: 303,
  },
  textTypo: {
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  text2Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  paymentLayout: {
    height: 220,
    width: 335,
  },
  bg: {
    height: "100.91%",
    width: "100.6%",
    top: "-0.45%",
    right: "-0.3%",
    bottom: "-0.45%",
    left: "-0.3%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
  },
  id: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "right",
  },
  paymentId: {
    width: 303,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  line: {
    backgroundColor: Color.border,
    height: 1,
  },
  paymentStatus: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text1: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  serviceDetail: {
    height: "57.73%",
    width: "90.45%",
    top: "33.18%",
    right: "4.78%",
    bottom: "9.09%",
    left: "4.78%",
    position: "absolute",
  },
  alexisLockman: {
    color: Color.heading,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text2: {
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  userNameAndId: {
    height: "24.09%",
    top: "0%",
    right: "0%",
    bottom: "75.91%",
    left: "0%",
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.colorGhostwhite,
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    position: "absolute",
    alignItems: "center",
    width: "100%",
  },
  payment2: {
    marginTop: 24,
  },
  frame2: {
    justifyContent: "center",
    width: 375,
    alignItems: "center",
  },
  providerAppIcon: {
    height: 60,
    marginTop: -10,
    width: 375,
  },
  frame1: {
    height: 1002,
    width: 375,
    alignItems: "center",
  },
  payment: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Payment;
