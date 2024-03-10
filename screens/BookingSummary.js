import * as React from "react";
import { Text, StyleSheet, View, StatusBar, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const BookingSummary = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bookingSummary, styles.imageIconLayout]}>
      <View style={[styles.navigation, styles.andFlexBox]}>
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
      <Pressable
        style={styles.topNavPosition}
        barStyle="default"
        onPress={() => navigation.navigate("Payment")}
      />
      <View style={styles.popup}>
        <View style={[styles.titleAndIcon, styles.andFlexBox]}>
          <Text style={[styles.bookingSummary1, styles.confirm2Typo]}>
            Booking Summary
          </Text>
          <Image
            style={styles.iconlylightcloseSquare}
            contentFit="cover"
            source={require("../assets/iconlylightclose-square.png")}
          />
        </View>
        <View style={styles.serviceSummary}>
          <Image
            style={[styles.imageIcon, styles.imageIconLayout]}
            contentFit="cover"
            source={require("../assets/image26.png")}
          />
          <View style={styles.detail}>
            <View style={[styles.serviceNameAndPrice, styles.andFlexBox]}>
              <Text style={styles.carWashAnd}>Car wash and cleaning</Text>
              <Text style={styles.text1}>₹120</Text>
            </View>
            <View style={styles.serviceDetail}>
              <View style={[styles.date, styles.andFlexBox]}>
                <Text style={styles.date1}>Date</Text>
                <Text style={styles.feb2024Typo}>25 Feb, 2024</Text>
              </View>
              <View style={styles.line} />
              <View style={[styles.time1, styles.andFlexBox]}>
                <Text style={styles.date1}>Time</Text>
                <Text style={styles.feb2024Typo}>08:30 AM</Text>
              </View>
              <View style={styles.line} />
              <View style={[styles.location, styles.andFlexBox]}>
                <Text style={styles.date1}>Location</Text>
                <Text style={[styles.exampleaddress, styles.feb2024Typo]}>
                  exampleAddress
                </Text>
              </View>
              <View style={styles.line} />
              <View style={[styles.time1, styles.andFlexBox]}>
                <Text style={styles.date1}>Service Status</Text>
                <Text style={styles.feb2024Typo}>Accepted</Text>
              </View>
              <View style={styles.line} />
              <View style={[styles.time1, styles.andFlexBox]}>
                <Text style={styles.date1}>Quantity</Text>
                <Text style={styles.feb2024Typo}>*1</Text>
              </View>
              <View style={styles.line} />
              <View style={[styles.time1, styles.andFlexBox]}>
                <Text style={styles.date1}>Payment Status</Text>
                <Text style={styles.feb2024Typo}>Pending</Text>
              </View>
            </View>
            <View style={styles.confirm}>
              <Button
                style={[styles.confirm1, styles.andFlexBox]}
                title="Confirm"
                size="medium"
                status="primary"
                appearance="outline"
                color="#5f60b9"
                textStyle={styles.confirmText}
                onPress={() => navigation.navigate("Payment")}
              >
                Confirm
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  imageIconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  andFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  confirm2Typo: {
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    color: Color.white,
    fontWeight: "500",
  },
  feb2024Typo: {
    textAlign: "right",
    color: Color.body,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    color: Color.white,
    fontWeight: "500",
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
    flexDirection: "row",
    overflow: "hidden",
  },
  navigation: {
    top: 0,
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignItems: "center",
    width: 375,
    left: 0,
    position: "absolute",
  },
  bookingSummary1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
  },
  iconlylightcloseSquare: {
    width: 20,
    height: 20,
  },
  titleAndIcon: {
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    alignSelf: "stretch",
    backgroundColor: Color.main,
    alignItems: "center",
  },
  imageIcon: {
    maxWidth: "100%",
    height: 125,
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
  },
  carWashAnd: {
    textTransform: "capitalize",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "500",
  },
  text1: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    textAlign: "left",
  },
  serviceNameAndPrice: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  date1: {
    fontSize: FontSize.size_xs,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  date: {
    alignSelf: "stretch",
  },
  line: {
    backgroundColor: Color.border,
    height: 1,
    marginTop: 8,
    alignSelf: "stretch",
  },
  time1: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  exampleaddress: {
    width: 171,
  },
  location: {
    width: 156,
    marginTop: 8,
  },
  serviceDetail: {
    paddingTop: Padding.p_5xl,
    alignSelf: "stretch",
  },
  confirm1: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
    alignItems: "center",
  },
  confirm: {
    paddingTop: 32,
    alignSelf: "stretch",
  },
  detail: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  serviceSummary: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    padding: Padding.p_5xl,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  popup: {
    top: 130,
    left: 20,
    width: 335,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  bookingSummary: {
    flex: 1,
    height: 812,
    backgroundColor: Color.white,
  },
});

export default BookingSummary;
