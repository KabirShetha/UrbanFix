import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const BookingSuccessful = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookingSuccessful}>
      <View style={[styles.navigation, styles.buttonFlexBox]}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
        </View>
        <View style={[styles.symbols, styles.topNavFlexBox]}>
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
      <View style={[styles.topNav, styles.topNavFlexBox]}>
        <Image
          style={styles.stroke1Icon}
          contentFit="cover"
          source={require("../assets/stroke-11.png")}
        />
        <Text style={[styles.booking, styles.bookingTypo]}>Booking</Text>
      </View>
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <View style={styles.popup}>
        <Image
          style={styles.checkIcon}
          contentFit="cover"
          source={require("../assets/check1.png")}
        />
        <View style={styles.content}>
          <View style={styles.text1}>
            <Text style={[styles.bookingSuccessful1, styles.itIsATypo]}>
              Booking Successful
            </Text>
            <Text
              style={[styles.itIsA, styles.itIsATypo]}
            >{`It is a long established fact that a reader will be distracted by the readable `}</Text>
          </View>
          <Button
            style={[styles.button, styles.buttonFlexBox]}
            title="Back To Home"
            appearance="filled"
            color="#5f60b9"
            textStyle={styles.buttonText}
            onPress={() => navigation.navigate("MainScreen")}
          >
            Back To Home
          </Button>
        </View>
      </View>
      <Image
        style={[styles.hanymanAppIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/hanyman-app2.png")}
      />
      <Image
        style={[styles.profileIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/profile1.png")}
      />
      <Pressable
        style={[styles.iconlylightcategory, styles.iconlyboldticketLayout]}
        onPress={() => navigation.navigate("Category")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightcategory.png")}
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
  buttonText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  buttonFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topNavFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookingTypo: {
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    color: Color.white,
    fontWeight: "500",
  },
  iconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  itIsATypo: {
    textAlign: "center",
    alignSelf: "stretch",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconlyboldticketLayout: {
    height: "2.46%",
    width: "5.33%",
    position: "absolute",
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
    overflow: "hidden",
  },
  navigation: {
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignItems: "center",
    width: 375,
    left: 0,
    position: "absolute",
    top: 0,
  },
  stroke1Icon: {
    width: 6,
    height: 12,
  },
  booking: {
    fontSize: FontSize.size_lg,
    marginLeft: 15,
    flex: 1,
  },
  topNav: {
    top: 31,
    backgroundColor: Color.main,
    paddingHorizontal: 27,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_mini,
    alignItems: "center",
    width: 375,
    left: 0,
    position: "absolute",
  },
  bgIcon: {
    opacity: 0.8,
    top: 0,
    left: 0,
    height: 812,
  },
  checkIcon: {
    width: 106,
    height: 105,
  },
  bookingSuccessful1: {
    fontSize: FontSize.size_3xl,
    textTransform: "capitalize",
    color: Color.heading,
  },
  itIsA: {
    lineHeight: 20,
    color: Color.body,
    marginTop: 12,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  text1: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    marginTop: 40,
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
  },
  content: {
    marginTop: 48,
    alignSelf: "stretch",
    alignItems: "center",
  },
  popup: {
    top: 189,
    left: 16,
    width: 343,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_37xl,
    borderRadius: Border.br_xs,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  hanymanAppIcon: {
    top: 752,
    height: 60,
  },
  profileIcon: {
    height: "1.88%",
    width: "3.2%",
    right: "10.67%",
    bottom: "2.8%",
    left: "86.13%",
    top: "95.32%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlylightcategory: {
    left: "60%",
    right: "34.67%",
    bottom: "2.22%",
    top: "95.32%",
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
  bookingSuccessful: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default BookingSuccessful;
