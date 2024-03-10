import * as React from "react";
import { StatusBar, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OnClickOfCategory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onclickOfCategory}>
      <StatusBar style={styles.framePosition1} barStyle="default" />
      <View style={[styles.frame1, styles.frame1FlexBox]}>
        <View style={[styles.search, styles.searchSpaceBlock]}>
          <View style={styles.iconlylightsearchParent}>
            <Image
              style={styles.iconlylightsearch}
              contentFit="cover"
              source={require("../assets/iconlylightsearch1.png")}
            />
            <Text style={[styles.searchHere, styles.textSpaceBlock]}>
              Search here...
            </Text>
          </View>
        </View>
        <View style={[styles.searchAndFilter, styles.frame1FlexBox]}>
          <Input
            style={[styles.search1, styles.search1Layout]}
            placeholder="Search Here"
            placeholderTextColor="#6c757d"
            textStyle={styles.searchTextInputText}
          />
          <View style={[styles.filterBy, styles.search1Layout]}>
            <Image
              style={styles.iconlylightfilter}
              contentFit="cover"
              source={require("../assets/iconlylightfilter.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <View style={[styles.allWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.all, styles.allTypo]}>All</Text>
        </View>
        <View style={[styles.wallPainingWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.wallPaining, styles.allTypo]}>Wall Paining</Text>
        </View>
        <View style={[styles.homePaintingWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.all, styles.allTypo]}>Home Painting</Text>
        </View>
      </View>
      <View style={[styles.frame3, styles.framePosition1]}>
        <Pressable
          style={styles.serviceList}
          onPress={() => navigation.navigate("BookTheServiceStep")}
        >
          <View style={styles.serviceLayout}>
            <Image
              style={[styles.imageIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/image9.png")}
            />
            <View style={[styles.categoryName, styles.priceSpaceBlock]}>
              <Text style={[styles.install, styles.textTypo]}>Eletronics</Text>
            </View>
            <View style={styles.detail}>
              <View>
                <View style={styles.iconlylightsearchParent}>
                  <View style={styles.star}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                  </View>
                  <Text style={[styles.text, styles.textTypo]}>4.3</Text>
                </View>
                <Text
                  style={[styles.uninstallationAndFlickering, styles.text1Typo]}
                >{`Fixing Anroid Smart Devices around
Interior and Wiring`}</Text>
              </View>
              <View style={styles.providerName}>
                <Image
                  style={styles.imageIcon1}
                  contentFit="cover"
                  source={require("../assets/image7.png")}
                />
                <Text style={[styles.wadeWarren, styles.allTypo]}>
                  HandyMan
                </Text>
              </View>
            </View>
            <View style={[styles.price, styles.priceSpaceBlock]}>
              <Text style={[styles.text1, styles.text1Typo]}>₹150</Text>
            </View>
          </View>
          <View style={[styles.service1, styles.serviceLayout]}>
            <Image
              style={[styles.imageIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/image10.png")}
            />
            <View style={[styles.categoryName, styles.priceSpaceBlock]}>
              <Text style={[styles.install, styles.textTypo]}>Fixing</Text>
            </View>
            <View style={styles.detail}>
              <View>
                <View style={styles.iconlylightsearchParent}>
                  <View style={styles.star}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                  </View>
                  <Text style={[styles.text, styles.textTypo]}>4.3</Text>
                </View>
                <Text
                  style={[styles.uninstallationAndFlickering, styles.text1Typo]}
                >{`Black and White Spot in display
and blur Images`}</Text>
              </View>
              <View style={styles.providerName}>
                <Image
                  style={styles.imageIcon1}
                  contentFit="cover"
                  source={require("../assets/image7.png")}
                />
                <Text style={[styles.wadeWarren, styles.allTypo]}>
                  HandyMan
                </Text>
              </View>
            </View>
            <View style={[styles.price, styles.priceSpaceBlock]}>
              <Text style={[styles.text1, styles.text1Typo]}>₹150</Text>
            </View>
          </View>
          <View style={[styles.service1, styles.serviceLayout]}>
            <Image
              style={[styles.imageIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/image11.png")}
            />
            <View style={[styles.categoryName, styles.priceSpaceBlock]}>
              <Text style={[styles.install, styles.textTypo]}>
                pest control
              </Text>
            </View>
            <View style={styles.detail}>
              <View>
                <View style={styles.iconlylightsearchParent}>
                  <View style={styles.star}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                  </View>
                  <Text style={[styles.text, styles.textTypo]}>4.3</Text>
                </View>
                <Text
                  style={[styles.uninstallationAndFlickering, styles.text1Typo]}
                >{`Retail Shop pest control and
Disinfection of entire premises `}</Text>
              </View>
              <View style={styles.providerName}>
                <Image
                  style={styles.imageIcon1}
                  contentFit="cover"
                  source={require("../assets/image7.png")}
                />
                <Text style={[styles.wadeWarren, styles.allTypo]}>
                  HandyMan
                </Text>
              </View>
            </View>
            <View style={[styles.price, styles.priceSpaceBlock]}>
              <Text style={[styles.text1, styles.text1Typo]}>₹150</Text>
            </View>
          </View>
          <View style={[styles.service1, styles.serviceLayout]}>
            <Image
              style={[styles.imageIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/image12.png")}
            />
            <View style={[styles.categoryName, styles.priceSpaceBlock]}>
              <Text style={[styles.install, styles.textTypo]}>Install</Text>
            </View>
            <View style={styles.detail}>
              <View>
                <View style={styles.iconlylightsearchParent}>
                  <View style={styles.star}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                    <Image
                      style={[styles.fill2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/fill-11.png")}
                    />
                  </View>
                  <Text style={[styles.text, styles.textTypo]}>4.3</Text>
                </View>
                <Text
                  style={[styles.uninstallationAndFlickering, styles.text1Typo]}
                >{`Uninstallation and Flickering TV
Display Screen`}</Text>
              </View>
              <View style={styles.providerName}>
                <Image
                  style={styles.imageIcon1}
                  contentFit="cover"
                  source={require("../assets/image7.png")}
                />
                <Text style={[styles.wadeWarren, styles.allTypo]}>
                  HandyMan
                </Text>
              </View>
            </View>
            <View style={[styles.price, styles.priceSpaceBlock]}>
              <Text style={[styles.text1, styles.text1Typo]}>₹150</Text>
            </View>
          </View>
        </Pressable>
        <View style={styles.hanymanApp}>
          <Pressable
            style={[styles.iconlylighthome, styles.iconlylighthomeLayout]}
            onPress={() => navigation.navigate("MainScreen")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/iconlylighthome.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.iconlylightticket, styles.iconlylighthomeLayout]}
            onPress={() => navigation.navigate("BookTheServiceStep")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/iconlylightticket.png")}
            />
          </Pressable>
          <Image
            style={[styles.iconlyboldprofile, styles.iconlylighthomeLayout]}
            contentFit="cover"
            source={require("../assets/iconlyboldprofile.png")}
          />
          <Pressable
            style={[styles.iconlylightcategory, styles.iconlylighthomeLayout]}
            onPress={() => navigation.navigate("Category")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/iconlylightcategory.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  framePosition1: {
    width: 375,
    left: 0,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frame1FlexBox: {
    width: 335,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  searchSpaceBlock: {
    padding: Padding.p_base,
    width: 271,
    backgroundColor: Color.background,
    alignItems: "center",
  },
  textSpaceBlock: {
    marginLeft: 10,
    color: Color.body,
  },
  search1Layout: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  framePosition: {
    left: 20,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_71xl,
    flexDirection: "row",
    alignItems: "center",
  },
  allTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  priceSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  iconLayout: {
    height: 11,
    width: 12,
  },
  text1Typo: {
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  serviceLayout: {
    height: 326,
    alignSelf: "stretch",
  },
  iconlylighthomeLayout: {
    height: "33.33%",
    width: "5.33%",
    position: "absolute",
  },
  iconlylightsearch: {
    width: 16,
    height: 16,
  },
  searchHere: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  iconlylightsearchParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    borderRadius: Border.br_8xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  search1: {
    padding: Padding.p_base,
    width: 271,
    backgroundColor: Color.background,
    alignItems: "center",
  },
  iconlylightfilter: {
    width: 24,
    height: 24,
  },
  filterBy: {
    padding: Padding.p_xs,
    backgroundColor: Color.main,
  },
  searchAndFilter: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frame1: {
    top: 105,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 20,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  all: {
    color: Color.body,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  allWrapper: {
    backgroundColor: Color.background,
  },
  wallPaining: {
    color: Color.white,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  wallPainingWrapper: {
    backgroundColor: Color.main,
    justifyContent: "space-between",
  },
  homePaintingWrapper: {
    backgroundColor: Color.background,
    justifyContent: "space-between",
  },
  frame2: {
    top: 169,
    width: 385,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  imageIcon: {
    height: "49.08%",
    top: "0%",
    right: "0%",
    bottom: "50.92%",
    left: "0%",
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
  },
  install: {
    letterSpacing: -0.2,
    textTransform: "uppercase",
    color: Color.main,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  categoryName: {
    marginTop: -147,
    top: "50%",
    left: 14,
    borderRadius: Border.br_151xl,
    paddingHorizontal: Padding.p_3xs,
    display: "none",
    backgroundColor: Color.white,
    paddingVertical: Padding.p_8xs,
  },
  fill2Icon: {
    marginLeft: 6,
  },
  star: {
    borderRadius: Border.br_5xl,
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    marginLeft: 10,
    color: Color.body,
  },
  uninstallationAndFlickering: {
    lineHeight: 20,
    color: Color.heading,
    width: 310,
    marginTop: 14,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  imageIcon1: {
    width: 30,
    height: 30,
  },
  wadeWarren: {
    marginLeft: 15,
    color: Color.body,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  providerName: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    height: "50.92%",
    width: "89.33%",
    top: "49.08%",
    right: "5.33%",
    bottom: "0%",
    left: "5.33%",
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingRight: Padding.p_4xs,
    paddingBottom: Padding.p_5xl,
    backgroundColor: Color.background,
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    color: Color.white,
  },
  price: {
    height: "10.74%",
    width: "17.6%",
    top: "43.56%",
    right: "6.27%",
    bottom: "45.71%",
    left: "76.13%",
    borderRadius: Border.br_6xl,
    borderStyle: "solid",
    borderColor: Color.background,
    borderWidth: 3,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.main,
  },
  service1: {
    marginTop: 24,
  },
  serviceList: {
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  iconlylighthome: {
    left: "9.6%",
    right: "85.07%",
    bottom: "33.33%",
    top: "33.33%",
    height: "33.33%",
    width: "5.33%",
  },
  iconlylightticket: {
    left: "34.67%",
    right: "60%",
    bottom: "33.33%",
    top: "33.33%",
    height: "33.33%",
    width: "5.33%",
  },
  iconlyboldprofile: {
    right: "9.6%",
    left: "85.07%",
    bottom: "33.33%",
    top: "33.33%",
    height: "33.33%",
    width: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconlylightcategory: {
    left: "60%",
    top: "36.67%",
    right: "34.67%",
    bottom: "30%",
  },
  hanymanApp: {
    shadowColor: "rgba(30, 28, 28, 0.2)",
    shadowOffset: {
      width: -30,
      height: 0,
    },
    shadowRadius: 100,
    elevation: 100,
    shadowOpacity: 1,
    height: 60,
    marginTop: -858,
    alignSelf: "stretch",
    backgroundColor: Color.background,
  },
  frame3: {
    top: 233,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  onclickOfCategory: {
    flex: 1,
    height: 1618,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default OnClickOfCategory;
