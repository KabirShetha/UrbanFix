import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainScreen}>
      <View style={[styles.category, styles.offerPosition]}>
        <View style={styles.category1}>
          <View style={styles.titleAndLinkBtn}>
            <Text style={[styles.category2, styles.viewTypo]}>Category</Text>
            <Pressable onPress={() => navigation.navigate("Category")}>
              <Text style={[styles.viewAll1, styles.viewText]}>view All</Text>
            </Pressable>
          </View>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <Pressable
              style={[styles.plumber, styles.salonLayout]}
              onPress={() => navigation.navigate("OnClickOfCategory")}
            >
              <View style={styles.frame}>
                <View style={[styles.bg, styles.frameLayout]} />
                <View style={[styles.bg1, styles.bg1Position]} />
              </View>
              <View style={styles.frame1}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon5.png")}
                />
                <Text style={[styles.plumber1, styles.plumber1Typo]}>
                  Plumber
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.carpenter, styles.salonLayout]}
              onPress={() => navigation.navigate("OnClickOfCategory")}
            >
              <View style={[styles.frame2, styles.frameLayout]}>
                <View style={[styles.frame3, styles.imageIconPosition]}>
                  <View style={[styles.bg, styles.frameLayout]} />
                  <View style={[styles.bg3, styles.frameLayout]} />
                </View>
                <Image
                  style={[styles.icon1, styles.iconLayout3]}
                  contentFit="cover"
                  source={require("../assets/icon6.png")}
                />
              </View>
              <Text style={[styles.carpenter1, styles.plumber1Typo]}>
                Carpenter
              </Text>
            </Pressable>
            <View style={[styles.painting, styles.salonLayout]}>
              <Image
                style={[styles.frameIcon, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/frame1.png")}
              />
              <Text style={[styles.carpenter1, styles.plumber1Typo]}>
                Painting
              </Text>
            </View>
          </View>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <Pressable
              style={[styles.salon, styles.salonLayout]}
              onPress={() => navigation.navigate("OnClickOfCategory")}
            >
              <View style={[styles.bg4, styles.imageIconPosition]} />
              <Image
                style={[styles.icon2, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon7.png")}
              />
              <Text style={[styles.salon1, styles.salon1Typo]}>Salon</Text>
            </Pressable>
            <Pressable
              style={[styles.salon, styles.salonLayout]}
              onPress={() => navigation.navigate("OnClickOfCategory")}
            >
              <View style={[styles.bg4, styles.imageIconPosition]} />
              <Image
                style={[styles.icon2, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon8.png")}
              />
              <Text style={[styles.smartHome1, styles.salon1Typo]}>
                Smart home
              </Text>
            </Pressable>
            <Pressable
              style={[styles.salon, styles.salonLayout]}
              onPress={() => navigation.navigate("OnClickOfCategory")}
            >
              <View style={[styles.bg4, styles.imageIconPosition]} />
              <Image
                style={[styles.icon4, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon9.png")}
              />
              <Text style={[styles.acRepair1, styles.salon1Typo]}>
                AC Repair
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.offer, styles.offerPosition]}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <View style={styles.viewSpaceBlock}>
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
          <Image
            style={[styles.icon6, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
          <View style={styles.line} />
          <Image
            style={[styles.icon6, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
        </View>
      </View>
      <View style={[styles.featured, styles.andLayout]}>
        <View style={styles.featured1}>
          <View style={styles.titleAndLinkBtn}>
            <Text style={[styles.category2, styles.viewTypo]}>Featured</Text>
            <Text style={[styles.viewAll2, styles.viewText]}>view All</Text>
          </View>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <View style={styles.service2}>
              <Image
                style={[styles.imageIcon, styles.imageIconPosition]}
                contentFit="cover"
                source={require("../assets/image3.png")}
              />
              <View style={styles.categoryName}>
                <Text style={[styles.fixing, styles.fixingClr]}>Fixing</Text>
              </View>
              <View style={[styles.detail, styles.imageIconPosition]}>
                <View style={styles.featured1}>
                  <View style={styles.rating}>
                    <View style={styles.star}>
                      <Image
                        style={styles.iconLayout1}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                      <Image
                        style={[styles.fill2Icon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                      <Image
                        style={[styles.fill2Icon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                      <Image
                        style={[styles.fill2Icon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                      <Image
                        style={[styles.fill2Icon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                    </View>
                    <Text style={[styles.text, styles.textTypo]}>4.3</Text>
                  </View>
                  <Text style={[styles.paintingForHome, styles.paintingTypo]}>
                    Painting for home
                  </Text>
                </View>
                <View style={[styles.providerName, styles.viewSpaceBlock]}>
                  <Image
                    style={styles.imageIcon1}
                    contentFit="cover"
                    source={require("../assets/image4.png")}
                  />
                  <Text style={[styles.handyman, styles.plumber1Typo]}>
                    HandyMan
                  </Text>
                </View>
              </View>
              <View style={[styles.price, styles.priceBorder]}>
                <Text style={[styles.text1, styles.textTypo]}>₹150</Text>
              </View>
            </View>
            <View style={styles.service2}>
              <Image
                style={[styles.imageIcon, styles.imageIconPosition]}
                contentFit="cover"
                source={require("../assets/image5.png")}
              />
              <View style={styles.categoryName}>
                <Text style={[styles.fixing, styles.fixingClr]}>Fixing</Text>
              </View>
              <View style={[styles.detail, styles.imageIconPosition]}>
                <View style={styles.featured1}>
                  <View style={styles.rating}>
                    <View style={styles.star}>
                      <Image
                        style={styles.iconLayout1}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                      <Image
                        style={[styles.fill2Icon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                      <Image
                        style={[styles.fill2Icon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                      <Image
                        style={[styles.fill2Icon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                      <Image
                        style={[styles.fill2Icon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/fill-1.png")}
                      />
                    </View>
                    <Text style={[styles.text, styles.textTypo]}>4.3</Text>
                  </View>
                  <Text style={[styles.paintingForHome, styles.paintingTypo]}>
                    Fixing TV Wire...
                  </Text>
                </View>
                <View style={[styles.providerName, styles.viewSpaceBlock]}>
                  <Image
                    style={styles.imageIcon1}
                    contentFit="cover"
                    source={require("../assets/image4.png")}
                  />
                  <Text style={[styles.handyman, styles.plumber1Typo]}>
                    HandyMan
                  </Text>
                </View>
              </View>
              <View style={[styles.price1, styles.priceBorder]}>
                <Text style={[styles.text1, styles.textTypo]}>₹150</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rating2, styles.rating2FlexBox]}>
        <Image
          style={styles.starsIcon}
          contentFit="cover"
          source={require("../assets/stars.png")}
        />
        <View style={styles.titleAndBtn}>
          <Text style={[styles.introducingCustomerRating, styles.viewText]}>
            Introducing Customer Rating
          </Text>
          <View style={styles.seeYourRating}>
            <Text style={[styles.seeYourRating1, styles.fixingClr]}>
              See Your Rating
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame4, styles.bg7Position]}>
        <View style={[styles.navigation, styles.rating2FlexBox]}>
          <View style={styles.time}>
            <Text style={styles.text4}>9:41</Text>
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
        <LinearGradient
          style={styles.imageAndNotification}
          locations={[0, 1]}
          colors={["#000", "rgba(0, 0, 0, 0)"]}
        >
          <ImageBackground
            style={styles.icon8}
            resizeMode="cover"
            source={require("../assets/imageandnotification.png")}
          >
            <View style={styles.notification}>
              <Image
                style={styles.iconlylightnotification}
                contentFit="cover"
                source={require("../assets/iconlylightnotification.png")}
              />
            </View>
            <View style={styles.pagination1}>
              <Image
                style={styles.iconLayout2}
                contentFit="cover"
                source={require("../assets/11.png")}
              />
              <Image
                style={[styles.icon6, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/11.png")}
              />
              <View style={styles.line1} />
              <Image
                style={[styles.icon6, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/11.png")}
              />
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
      <View style={[styles.locationAndSearch, styles.andLayout]}>
        <View style={[styles.location, styles.searchShadowBox]}>
          <Image
            style={styles.iconlylightlocation}
            contentFit="cover"
            source={require("../assets/iconlylightlocation.png")}
          />
          <Text style={[styles.thornridgeCirShiloh, styles.plumber1Typo]}>
            1901 Thornridge Cir. Shiloh...
          </Text>
          <View style={styles.iconWrapper}>
            <Image
              style={styles.iconlylightnotification}
              contentFit="cover"
              source={require("../assets/icon10.png")}
            />
          </View>
        </View>
        <View style={styles.searchShadowBox}>
          <Image
            style={styles.iconlylightlocation}
            contentFit="cover"
            source={require("../assets/iconlylightsearch.png")}
          />
        </View>
      </View>
      <View style={[styles.frame5, styles.frame5Position]}>
        <Pressable
          style={[styles.services, styles.frame5Position]}
          onPress={() => navigation.navigate("OnClickOfCategory")}
        >
          <View style={styles.services1}>
            <View style={[styles.bg7, styles.bg7Position]} />
            <View style={[styles.titleAndLinkBtn2, styles.andLayout]}>
              <Text style={[styles.category2, styles.viewTypo]}>Services</Text>
              <Text style={[styles.viewAll2, styles.viewText]}>view All</Text>
            </View>
            <View style={styles.serviceList}>
              <View style={styles.service11}>
                <Image
                  style={[styles.imageIcon4, styles.imageIconPosition]}
                  contentFit="cover"
                  source={require("../assets/image6.png")}
                />
                <View style={[styles.categoryName2, styles.price2SpaceBlock]}>
                  <Text style={[styles.fixing, styles.fixingClr]}>
                    painting
                  </Text>
                </View>
                <View style={[styles.detail2, styles.detailPosition]}>
                  <View style={styles.featured1}>
                    <View style={styles.rating}>
                      <View style={styles.star}>
                        <Image
                          style={styles.iconLayout}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                        <Image
                          style={[styles.fill2Icon2, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                        <Image
                          style={[styles.fill2Icon2, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                        <Image
                          style={[styles.fill2Icon2, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                        <Image
                          style={[styles.fill2Icon2, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                      </View>
                      <Text style={[styles.text5, styles.textTypo1]}>4.3</Text>
                    </View>
                    <Text
                      style={[styles.paintingForBeautiful, styles.text7Typo]}
                    >{`Painting for beautiful 
Homes...`}</Text>
                  </View>
                  <View style={styles.providerName2}>
                    <Image
                      style={styles.imageIcon5}
                      contentFit="cover"
                      source={require("../assets/image7.png")}
                    />
                    <Text style={[styles.handyman2, styles.viewTypo]}>
                      HandyMan
                    </Text>
                  </View>
                </View>
                <View style={[styles.price2, styles.price2SpaceBlock]}>
                  <Text style={styles.text6}>$ 120</Text>
                  <Text style={[styles.text7, styles.text7Typo]}>₹150</Text>
                </View>
              </View>
              <View style={styles.service11}>
                <Image
                  style={[styles.imageIcon4, styles.imageIconPosition]}
                  contentFit="cover"
                  source={require("../assets/image6.png")}
                />
                <View style={[styles.categoryName2, styles.price2SpaceBlock]}>
                  <Text style={[styles.fixing, styles.fixingClr]}>
                    painting
                  </Text>
                </View>
                <View style={[styles.detail3, styles.detailPosition]}>
                  <View style={styles.featured1}>
                    <View style={styles.rating}>
                      <View style={styles.star}>
                        <Image
                          style={styles.iconLayout}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                        <Image
                          style={[styles.fill2Icon2, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                        <Image
                          style={[styles.fill2Icon2, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                        <Image
                          style={[styles.fill2Icon2, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                        <Image
                          style={[styles.fill2Icon2, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/fill-11.png")}
                        />
                      </View>
                      <Text style={[styles.text5, styles.textTypo1]}>4.3</Text>
                    </View>
                    <Text
                      style={[styles.paintingForBeautiful, styles.text7Typo]}
                    >{`Painting for beautiful 
Homes...`}</Text>
                  </View>
                  <View style={styles.providerName3}>
                    <Image
                      style={styles.imageIcon5}
                      contentFit="cover"
                      source={require("../assets/image7.png")}
                    />
                    <Text style={[styles.wadeWarren, styles.viewTypo]}>
                      Wade Warren
                    </Text>
                  </View>
                </View>
                <View style={[styles.price2, styles.price2SpaceBlock]}>
                  <Text style={styles.text6}>$ 120</Text>
                  <Text style={[styles.text7, styles.text7Typo]}>₹150</Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
        <Image
          style={[styles.iconlylightcategory, styles.profilePosition]}
          contentFit="cover"
          source={require("../assets/iconlylightcategory.png")}
        />
        <Pressable
          style={[styles.profile, styles.profilePosition]}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Image
            style={[styles.icon13, styles.iconLayout3]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
        <Image
          style={[styles.homeIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
        <View style={[styles.hanymanAppParent, styles.hanymanLayout]}>
          <Image
            style={[styles.hanymanAppIcon, styles.hanymanLayout]}
            contentFit="cover"
            source={require("../assets/hanyman-app2.png")}
          />
          <Pressable
            style={[styles.profile1, styles.profile1Position]}
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Image
              style={[styles.icon13, styles.iconLayout3]}
              contentFit="cover"
              source={require("../assets/profile.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerPosition: {
    width: 335,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  viewTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  viewText: {
    textAlign: "center",
    textTransform: "capitalize",
  },
  viewSpaceBlock: {
    marginTop: 16,
    flexDirection: "row",
  },
  salonLayout: {
    height: 111,
    width: 100,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
  },
  frameLayout: {
    height: 75,
    width: 98,
  },
  bg1Position: {
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
  },
  plumber1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  imageIconPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    left: "29%",
    right: "31%",
    top: "15.32%",
    width: "40%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  salon1Typo: {
    top: 85,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout2: {
    height: 5,
    width: 5,
  },
  andLayout: {
    width: 334,
    alignItems: "center",
    position: "absolute",
  },
  fixingClr: {
    color: Color.main,
    textAlign: "left",
  },
  iconLayout1: {
    height: 9,
    width: 10,
  },
  textTypo: {
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  paintingTypo: {
    lineHeight: 20,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  priceBorder: {
    borderWidth: 2,
    borderColor: Color.background,
    top: 84,
    borderRadius: Border.br_6xl,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.main,
    borderStyle: "solid",
    flexDirection: "row",
    position: "absolute",
  },
  rating2FlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bg7Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  searchShadowBox: {
    padding: Padding.p_base,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  frame5Position: {
    width: 600,
    left: 0,
    position: "absolute",
  },
  price2SpaceBlock: {
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    position: "absolute",
  },
  detailPosition: {
    paddingBottom: Padding.p_5xl,
    paddingRight: Padding.p_4xs,
    paddingTop: Padding.p_5xl,
    paddingLeft: Padding.p_base,
    top: 145,
    left: 0,
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iconLayout: {
    width: 12,
    height: 11,
  },
  textTypo1: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  text7Typo: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    textAlign: "left",
  },
  profilePosition: {
    top: "28.28%",
    position: "absolute",
  },
  hanymanLayout: {
    height: 60,
    width: 375,
    left: 0,
    position: "absolute",
  },
  profile1Position: {
    top: "36.67%",
    position: "absolute",
  },
  category2: {
    textAlign: "left",
    color: Color.heading,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansMedium,
  },
  viewAll1: {
    color: Color.body,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  titleAndLinkBtn: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  bg: {
    backgroundColor: Color.colorGhostwhite,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  bg1: {
    height: 31,
    width: 98,
    backgroundColor: Color.white,
  },
  frame: {
    width: 98,
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    width: 38,
    height: 40,
  },
  plumber1: {
    marginTop: 18,
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.heading,
  },
  frame1: {
    width: 50,
    height: 95,
    marginTop: -92,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  plumber: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bg3: {
    marginTop: -75,
    backgroundColor: Color.colorGhostwhite,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  frame3: {
    top: 0,
    height: 75,
    width: 98,
    alignItems: "center",
    overflow: "hidden",
  },
  icon1: {
    height: "53.33%",
    width: "49.8%",
    top: "22.67%",
    right: "24.69%",
    bottom: "24%",
    left: "25.51%",
    position: "absolute",
  },
  frame2: {
    overflow: "hidden",
  },
  carpenter1: {
    marginTop: 10,
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.heading,
  },
  carpenter: {
    alignItems: "center",
  },
  frameIcon: {
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    overflow: "hidden",
  },
  painting: {
    alignItems: "center",
    backgroundColor: Color.white,
  },
  view: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  bg4: {
    top: 0,
    height: 75,
    width: 98,
    backgroundColor: Color.colorGhostwhite,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  icon2: {
    height: "36.04%",
    bottom: "48.65%",
  },
  salon1: {
    left: 33,
  },
  salon: {
    backgroundColor: Color.white,
  },
  smartHome1: {
    left: 12,
  },
  icon4: {
    height: "36.13%",
    bottom: "48.56%",
  },
  acRepair1: {
    left: 20,
  },
  category1: {
    paddingRight: Padding.p_12xs,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  category: {
    top: 346,
    justifyContent: "center",
    alignItems: "center",
  },
  bgIcon: {
    height: 179,
    maxWidth: "100%",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  icon6: {
    marginLeft: 6,
  },
  line: {
    width: 18,
    backgroundColor: Color.main,
    borderRadius: Border.br_lg,
    marginLeft: 6,
    height: 5,
  },
  offer: {
    top: 1097,
    alignItems: "center",
  },
  viewAll2: {
    color: Color.body,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  imageIcon: {
    height: 100,
    width: 157,
    top: 0,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  fixing: {
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.2,
    textTransform: "uppercase",
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  categoryName: {
    top: 10,
    left: 10,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_151xl,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
  },
  fill2Icon: {
    marginLeft: 4,
  },
  star: {
    borderRadius: Border.br_5xl,
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    color: Color.body,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  paintingForHome: {
    marginTop: 8,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  featured1: {
    alignSelf: "stretch",
  },
  imageIcon1: {
    height: 25,
    width: 25,
  },
  handyman: {
    marginLeft: 10,
    color: Color.body,
    textAlign: "left",
  },
  providerName: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  detail: {
    top: 100,
    backgroundColor: Color.background,
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_xl,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_xl,
    width: 157,
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
  },
  text1: {
    color: Color.white,
    textTransform: "capitalize",
  },
  price: {
    left: 99,
  },
  service2: {
    height: 223,
    width: 157,
  },
  price1: {
    left: 101,
  },
  featured: {
    top: 1329,
    left: 21,
    justifyContent: "center",
  },
  starsIcon: {
    width: 208,
    height: 48,
  },
  introducingCustomerRating: {
    color: Color.white,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
  },
  seeYourRating1: {
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  seeYourRating: {
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  titleAndBtn: {
    width: 257,
    alignItems: "center",
  },
  rating2: {
    top: 1629,
    backgroundColor: "rgba(95, 96, 185, 0.91)",
    height: 216,
    paddingVertical: 30,
    width: 375,
    left: 0,
    position: "absolute",
  },
  text4: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "500",
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
    marginLeft: 9,
    height: 12,
    width: 25,
  },
  symbols: {
    width: 51,
    paddingLeft: 1,
    paddingRight: Padding.p_12xs_5,
    height: 12,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  navigation: {
    backgroundColor: Color.colorCornflowerblue,
    paddingVertical: 0,
    height: 31,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconlylightnotification: {
    width: 16,
    height: 16,
  },
  notification: {
    top: 20,
    left: 319,
    borderRadius: 35,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
  },
  line1: {
    width: 18,
    borderRadius: Border.br_lg,
    marginLeft: 6,
    height: 5,
    backgroundColor: Color.white,
  },
  pagination1: {
    top: 204,
    left: 162,
    flexDirection: "row",
    position: "absolute",
  },
  icon8: {
    backgroundColor: "transparent",
    height: "100%",
    alignSelf: "stretch",
  },
  imageAndNotification: {
    height: 250,
  },
  frame4: {
    height: 283,
    paddingBottom: Padding.p_6xl,
    top: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  iconlylightlocation: {
    height: 18,
    width: 18,
  },
  thornridgeCirShiloh: {
    color: Color.body,
    textAlign: "left",
  },
  iconWrapper: {
    paddingLeft: 26,
    flexDirection: "row",
  },
  location: {
    width: 264,
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationAndSearch: {
    top: 261,
    left: 26,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bg7: {
    height: 396,
    top: 0,
    backgroundColor: Color.colorGhostwhite,
  },
  titleAndLinkBtn2: {
    top: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 20,
  },
  imageIcon4: {
    height: 145,
    width: 280,
    top: 0,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  categoryName2: {
    top: 16,
    left: 14,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_151xl,
    backgroundColor: Color.white,
  },
  fill2Icon2: {
    marginLeft: 6,
  },
  text5: {
    marginLeft: 10,
    color: Color.body,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  paintingForBeautiful: {
    marginTop: 14,
    lineHeight: 20,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  imageIcon5: {
    width: 30,
    height: 30,
  },
  handyman2: {
    marginLeft: 10,
    color: Color.body,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  providerName2: {
    marginTop: 18,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  detail2: {
    width: 280,
  },
  text6: {
    textDecoration: "line-through",
    fontFamily: FontFamily.interSemiBold,
    display: "none",
    color: Color.white,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text7: {
    color: Color.white,
    marginLeft: 10,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  price2: {
    top: 128,
    left: 200,
    borderColor: Color.white,
    borderWidth: 3,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_6xl,
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.main,
    borderStyle: "solid",
  },
  service11: {
    height: 311,
    width: 280,
  },
  wadeWarren: {
    color: Color.body,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  providerName3: {
    marginTop: 18,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  detail3: {
    width: 251,
  },
  serviceList: {
    top: 61,
    width: 580,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  services1: {
    height: 396,
    alignSelf: "stretch",
  },
  services: {
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  iconlylightcategory: {
    height: "5.05%",
    width: "3.33%",
    right: "59.17%",
    bottom: "66.67%",
    left: "37.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon13: {
    height: "100%",
    width: "100%",
  },
  profile: {
    left: "53.17%",
    right: "44.83%",
    bottom: "67.85%",
    width: "2%",
    height: "3.86%",
  },
  homeIcon: {
    height: "4.22%",
    width: "2.63%",
    top: "28.23%",
    right: "91.02%",
    bottom: "67.55%",
    left: "6.35%",
    position: "absolute",
  },
  hanymanAppIcon: {
    top: 0,
  },
  profile1: {
    left: "86.13%",
    right: "10.67%",
    bottom: "37.83%",
    width: "3.2%",
    height: "25.5%",
  },
  hanymanAppParent: {
    top: 90,
  },
  frame5: {
    top: 661,
    height: 396,
    overflow: "hidden",
  },
  mainScreen: {
    flex: 1,
    height: 811,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MainScreen;
