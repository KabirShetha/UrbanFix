import * as React from "react";
import { Text, StyleSheet, View, StatusBar, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ServiceFilter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceFilter}>
      <View style={[styles.navigation, styles.viewFlexBox]}>
        <View style={[styles.time, styles.timeFlexBox]}>
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
      <StatusBar style={styles.viewFlexBox} barStyle="default" />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/9.png")}
      />
      <Pressable
        style={[styles.price, styles.ratingBorder]}
        onPress={() => navigation.navigate("ServiceFilter1")}
      >
        <Text style={[styles.price1, styles.price1Typo]}>Price</Text>
        <View style={styles.range}>
          <View style={[styles.sliderRange, styles.rangeLayout]}>
            <View style={[styles.range1, styles.rangeLayout]}>
              <Image
                style={styles.leftThumbIcon}
                contentFit="cover"
                source={require("../assets/leftthumb.png")}
              />
              <Image
                style={styles.leftThumbIcon}
                contentFit="cover"
                source={require("../assets/leftthumb.png")}
              />
            </View>
          </View>
          <View style={[styles.price2, styles.viewFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>₹1200</Text>
            <Text style={[styles.text1, styles.textTypo]}>₹2000</Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rating, styles.ratingBorder]}
        onPress={() => navigation.navigate("ServiceFilter1")}
      >
        <Text style={[styles.price1, styles.price1Typo]}>Rating</Text>
        <View style={styles.stars}>
          <View style={[styles.view, styles.viewFlexBox]}>
            <View style={[styles.bg, styles.bgLayout]} />
            <View style={[styles.starsAndNumber, styles.viewFlexBox]}>
              <View style={styles.starParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
              </View>
              <Text style={[styles.text3, styles.textTypo]}>5.0</Text>
            </View>
          </View>
          <View style={[styles.view1, styles.viewFlexBox]}>
            <View style={[styles.bg, styles.bgLayout]} />
            <View style={[styles.starsAndNumber1, styles.viewFlexBox]}>
              <View style={styles.starParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
              </View>
              <Text style={[styles.text3, styles.textTypo]}>4.0</Text>
            </View>
          </View>
          <View style={[styles.view2, styles.viewFlexBox]}>
            <View style={[styles.bg, styles.bgLayout]} />
            <View style={[styles.starsAndNumber, styles.viewFlexBox]}>
              <View style={styles.starParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
              </View>
              <Text style={[styles.text3, styles.textTypo]}>3.0</Text>
            </View>
          </View>
          <View style={[styles.view2, styles.viewFlexBox]}>
            <View style={[styles.bg, styles.bgLayout]} />
            <View style={[styles.starsAndNumber3, styles.viewFlexBox]}>
              <View style={styles.starParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
              </View>
              <Text style={[styles.text3, styles.textTypo]}>2.0</Text>
            </View>
          </View>
          <View style={[styles.view2, styles.viewFlexBox]}>
            <View style={[styles.bg, styles.bgLayout]} />
            <View style={[styles.starsAndNumber, styles.viewFlexBox]}>
              <View style={styles.starParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
              </View>
              <Text style={[styles.text3, styles.textTypo]}>1.0</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rating2, styles.ratingBorder]}
        onPress={() => navigation.navigate("ServiceFilter1")}
      >
        <Text style={[styles.price1, styles.price1Typo]}>
          Category name List
        </Text>
        <View style={styles.parent}>
          <View style={[styles.view, styles.viewFlexBox]}>
            <View style={styles.handymanInfo}>
              <View>
                <Text style={[styles.painting, styles.price1Typo]}>
                  Painting
                </Text>
                <Text style={[styles.services, styles.textTypo]}>
                  33 Services
                </Text>
              </View>
            </View>
            <View style={[styles.checkBox, styles.bgLayout]} />
          </View>
          <View style={styles.rectangleView} />
          <View style={[styles.view2, styles.viewFlexBox]}>
            <View style={styles.handymanInfo}>
              <View>
                <Text style={[styles.painting, styles.price1Typo]}>
                  Painting
                </Text>
                <Text style={[styles.services, styles.textTypo]}>
                  33 Services
                </Text>
              </View>
            </View>
            <Image
              style={styles.bgLayout}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
          </View>
        </View>
      </Pressable>
      <Image
        style={[styles.hanymanAppIcon, styles.topNavPosition]}
        contentFit="cover"
        source={require("../assets/hanyman-app2.png")}
      />
      <Image
        style={[styles.iconlylightcategory, styles.icon1Layout]}
        contentFit="cover"
        source={require("../assets/iconlylightcategory.png")}
      />
      <Pressable
        style={[styles.profile, styles.profilePosition]}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <Image
          style={[styles.icon1, styles.icon1Layout]}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  timeFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  ratingBorder: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    width: 335,
    borderRadius: Border.br_xs,
    left: 21,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    backgroundColor: Color.background,
    position: "absolute",
  },
  price1Typo: {
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  rangeLayout: {
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  bgLayout: {
    height: 14,
    width: 14,
  },
  topNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  icon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profilePosition: {
    top: "95.2%",
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  time: {
    width: 27,
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
    width: 375,
    left: 0,
    position: "absolute",
  },
  icon: {
    top: 753,
    left: 138,
    width: 10,
    height: 10,
    position: "absolute",
  },
  price1: {
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  leftThumbIcon: {
    width: 18,
    height: 18,
  },
  range1: {
    backgroundColor: "#6a6dcd",
    height: 9,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  sliderRange: {
    backgroundColor: "#d6d7fb",
    paddingHorizontal: 38,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 0,
  },
  text1: {
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  price2: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  range: {
    marginTop: 30,
    alignSelf: "stretch",
    alignItems: "center",
  },
  price: {
    top: 565,
    justifyContent: "center",
  },
  bg: {
    borderRadius: Border.br_10xs,
    borderWidth: 1,
    borderStyle: "solid",
    height: 14,
    width: 14,
    borderColor: Color.border,
  },
  frameChild: {
    borderRadius: Border.br_12xs,
    width: 17,
    height: 17,
  },
  starParent: {
    flexDirection: "row",
  },
  text3: {
    fontSize: FontSize.size_sm,
  },
  starsAndNumber: {
    width: 263,
  },
  view: {
    alignSelf: "stretch",
  },
  starsAndNumber1: {
    width: 260,
  },
  view1: {
    width: 277,
    marginTop: 16,
  },
  view2: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  starsAndNumber3: {
    width: 264,
  },
  stars: {
    paddingTop: Padding.p_5xs,
    marginTop: 10,
    alignSelf: "stretch",
  },
  rating: {
    top: 316,
  },
  painting: {
    fontSize: FontSize.size_sm,
  },
  services: {
    fontSize: FontSize.size_xs,
    marginTop: 8,
  },
  handymanInfo: {
    alignItems: "center",
    flexDirection: "row",
  },
  checkBox: {
    borderRadius: Border.br_smi,
    borderColor: Color.main,
    borderWidth: 1,
    borderStyle: "solid",
    height: 14,
    width: 14,
    backgroundColor: Color.background,
  },
  rectangleView: {
    backgroundColor: Color.border,
    height: 1,
    marginTop: 16,
    alignSelf: "stretch",
  },
  parent: {
    width: 293,
    marginTop: 10,
  },
  rating2: {
    top: 105,
  },
  hanymanAppIcon: {
    top: 751,
    height: 60,
  },
  iconlylightcategory: {
    height: "2.46%",
    width: "5.33%",
    right: "34.67%",
    bottom: "2.34%",
    left: "60%",
    top: "95.2%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  profile: {
    left: "86.13%",
    right: "10.67%",
    bottom: "2.92%",
    width: "3.2%",
    height: "1.88%",
  },
  serviceFilter: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ServiceFilter;
