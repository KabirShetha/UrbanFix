import * as React from "react";
import { Text, StyleSheet, View, StatusBar, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Category = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.category}>
      <View style={[styles.navigation, styles.viewFlexBox]}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
        </View>
        <View style={styles.symbols}>
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery3.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi5.png")}
          />
        </View>
      </View>
      <StatusBar style={styles.topNavPosition} barStyle="default" />
      <Pressable
        style={styles.categoryList}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "ServiceFilter" })
        }
      >
        <View style={[styles.view, styles.viewFlexBox]}>
          <View style={styles.plumber}>
            <View style={[styles.icon, styles.bg1Layout]}>
              <View style={[styles.bg, styles.bgBorder]} />
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon11.png")}
              />
            </View>
            <Text style={[styles.plumber1, styles.salonTypo]}>Plumber</Text>
          </View>
          <View style={styles.plumber}>
            <View style={[styles.bg1, styles.bgBorder]} />
            <Text style={[styles.smartHome1, styles.salonTypo]}>
              Smart Home
            </Text>
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon12.png")}
            />
          </View>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <View style={styles.plumber}>
            <View style={[styles.icon, styles.bg1Layout]}>
              <View style={[styles.bg1, styles.bgBorder]} />
              <Image
                style={[styles.icon4, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon13.png")}
              />
            </View>
            <Text style={[styles.painter1, styles.salonTypo]}>Painter</Text>
          </View>
          <View style={styles.plumber}>
            <View style={[styles.icon, styles.bg1Layout]}>
              <View style={[styles.bg1, styles.bgBorder]} />
              <Image
                style={[styles.icon4, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon14.png")}
              />
            </View>
            <Text style={[styles.pestControl1, styles.salonTypo]}>
              Pest Control
            </Text>
          </View>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <View style={styles.plumber}>
            <View style={[styles.icon, styles.bg1Layout]}>
              <View style={[styles.bg1, styles.bgBorder]} />
              <Image
                style={[styles.icon8, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon15.png")}
              />
            </View>
            <Text style={[styles.carpenter1, styles.salonTypo]}>Carpenter</Text>
          </View>
          <View style={styles.plumber}>
            <View style={[styles.icon, styles.bg1Layout]}>
              <View style={[styles.bg1, styles.bgBorder]} />
              <Image
                style={[styles.icon10, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon16.png")}
              />
            </View>
            <Text style={[styles.security1, styles.salonTypo]}>Security</Text>
          </View>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <View style={styles.plumber}>
            <View style={[styles.icon, styles.bg1Layout]}>
              <View style={[styles.bg1, styles.bgBorder]} />
              <Image
                style={[styles.icon12, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon17.png")}
              />
            </View>
            <Text style={[styles.acRepair, styles.salonTypo]}>AC Repair</Text>
          </View>
          <View style={styles.plumber}>
            <View style={[styles.icon, styles.bg1Layout]}>
              <View style={[styles.bg1, styles.bgBorder]} />
              <Image
                style={[styles.icon14, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon18.png")}
              />
            </View>
            <Text style={[styles.salon, styles.salonTypo]}>Salon</Text>
          </View>
        </View>
      </Pressable>
      <Image
        style={[styles.hanymanAppIcon, styles.topNavPosition]}
        contentFit="cover"
        source={require("../assets/hanyman-app3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  bg1Layout: {
    height: 115,
    width: 157,
    left: 0,
    top: 0,
  },
  bgBorder: {
    backgroundColor: Color.colorGhostwhite,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    borderWidth: 1.5,
    borderColor: Color.border,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  salonTypo: {
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    top: 135,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition: {
    left: "31.21%",
    right: "30.57%",
    width: "38.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    marginTop: -8.5,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    textAlign: "left",
    fontWeight: "500",
    top: "50%",
    left: 0,
    position: "absolute",
  },
  time: {
    width: 27,
    height: 17,
  },
  batteryIcon: {
    marginTop: -5.8,
    right: 1,
    width: 25,
    height: 12,
    top: "50%",
    position: "absolute",
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  symbols: {
    width: 51,
    height: 12,
    overflow: "hidden",
  },
  navigation: {
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    alignItems: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    width: 375,
    left: 0,
    position: "absolute",
    top: 0,
    flexDirection: "row",
  },
  bg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  icon1: {
    width: "36.56%",
    right: "31.59%",
    left: "31.85%",
    bottom: "24.35%",
    height: "52.17%",
    top: "23.48%",
  },
  icon: {
    position: "absolute",
  },
  plumber1: {
    marginLeft: -34,
    left: "50%",
    textAlign: "center",
  },
  plumber: {
    borderRadius: Border.br_xs,
    width: 160,
    height: 177,
    borderWidth: 1.5,
    borderColor: Color.border,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  bg1: {
    height: 115,
    width: 157,
    left: 0,
    top: 0,
  },
  smartHome1: {
    left: 29,
    textAlign: "left",
  },
  icon2: {
    height: "33.9%",
    width: "37.5%",
    top: "15.25%",
    right: "31.88%",
    bottom: "50.85%",
    left: "30.63%",
  },
  view: {
    width: 334,
  },
  icon4: {
    width: "33.31%",
    right: "33.57%",
    left: "33.12%",
    bottom: "24.35%",
    height: "52.17%",
    top: "23.48%",
  },
  painter1: {
    left: 50,
    textAlign: "left",
  },
  pestControl1: {
    left: 30,
    textAlign: "left",
  },
  view1: {
    marginTop: 20,
    width: 334,
  },
  icon8: {
    width: "46.69%",
    right: "26.56%",
    left: "26.75%",
    bottom: "24.35%",
    height: "52.17%",
    top: "23.48%",
  },
  carpenter1: {
    left: 39,
    textAlign: "left",
  },
  icon10: {
    height: "37.74%",
    top: "31.3%",
    bottom: "30.96%",
  },
  security1: {
    left: 46,
    textAlign: "left",
  },
  icon12: {
    height: "52.26%",
    bottom: "24.26%",
    top: "23.48%",
    left: "31.21%",
    right: "30.57%",
    width: "38.22%",
  },
  acRepair: {
    left: 40,
    textAlign: "left",
  },
  icon14: {
    bottom: "24.35%",
    height: "52.17%",
    top: "23.48%",
  },
  salon: {
    left: 57,
    textAlign: "left",
  },
  categoryList: {
    top: 105,
    left: 20,
    width: 334,
    position: "absolute",
  },
  hanymanAppIcon: {
    top: 862,
    height: 60,
  },
  category: {
    flex: 1,
    height: 922,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Category;
