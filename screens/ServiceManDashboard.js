import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const ServiceManDashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.servicemanDashboard}>
      <Image
        style={[styles.image1Icon, styles.frame4Position]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={styles.helloDeepParmar}>Hello Deep Parmar</Text>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={[styles.welcomeBack, styles.reviews2Typo]}>
          Welcome back!
        </Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <View style={styles.view}>
          <Pressable
            style={[styles.totalEarning, styles.totalBorder]}
            onPress={() => navigation.navigate("EarningList")}
          >
            <View>
              <Text style={styles.text}>₹1259</Text>
              <Text style={styles.totalEarning2Typo}>Total Earning</Text>
            </View>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon3.png")}
            />
          </Pressable>
          <View style={[styles.totalService, styles.totalBorder]}>
            <View>
              <Text style={styles.text}>1589</Text>
              <Text style={styles.totalEarning2Typo}>Total Service</Text>
            </View>
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon4.png")}
            />
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.totalBorder}>
            <View>
              <Text style={styles.text}>15</Text>
              <Text style={[styles.upcomingServices, styles.totalEarning2Typo]}>
                upcoming services
              </Text>
            </View>
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon4.png")}
            />
          </View>
          <View style={[styles.totalService, styles.totalBorder]}>
            <View>
              <Text style={styles.text}>05</Text>
              <Text style={styles.totalEarning2Typo}>{`Today’s
Service`}</Text>
            </View>
            <Image
              style={[styles.icon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon4.png")}
            />
          </View>
        </View>
      </View>
      <StatusBar style={styles.janPosition} barStyle="default" />
      <View style={[styles.frame4, styles.frame4Position]}>
        <View style={styles.reviews}>
          <View style={styles.reviews1}>
            <Text style={[styles.reviews2, styles.reviews2Typo]}>Reviews</Text>
            <Text style={styles.janTypo}>View All</Text>
          </View>
          <View style={styles.comments}>
            <View style={[styles.comment2, styles.commentLayout]}>
              <View style={styles.frame5}>
                <Image
                  style={[styles.imageIcon, styles.janPosition]}
                  contentFit="cover"
                  source={require("../assets/image1.png")}
                />
                <Text style={[styles.jan, styles.janPosition]}>25 Jan</Text>
                <View style={[styles.frame6, styles.framePosition]}>
                  <Text style={[styles.user2, styles.textTypo]}>User 2</Text>
                  <View style={styles.rating}>
                    <View style={styles.view}>
                      <Image
                        style={styles.frameLayout}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                    </View>
                    <Text style={[styles.text4, styles.textTypo]}>4.5</Text>
                  </View>
                </View>
              </View>
              <Text
                style={[styles.greatService, styles.textTypo]}
              >{`Great Service! `}</Text>
            </View>
            <View style={[styles.comment1, styles.commentSpaceBlock]}>
              <View style={styles.frame7}>
                <Image
                  style={[styles.imageIcon, styles.janPosition]}
                  contentFit="cover"
                  source={require("../assets/image2.png")}
                />
                <Text style={[styles.dec, styles.janTypo]}>02 Dec</Text>
                <View style={[styles.frame8, styles.framePosition]}>
                  <Text style={[styles.user2, styles.textTypo]}>User 1</Text>
                  <View style={styles.rating}>
                    <View style={styles.view}>
                      <Image
                        style={styles.frameLayout}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                    </View>
                    <Text style={[styles.text5, styles.textTypo]}>4.5</Text>
                  </View>
                </View>
              </View>
              <Text style={[styles.greatService, styles.textTypo]}>
                What an experience! Would recommend!!!
              </Text>
            </View>
            <View style={[styles.comment3, styles.commentSpaceBlock]}>
              <View style={styles.frame9}>
                <Image
                  style={[styles.imageIcon, styles.janPosition]}
                  contentFit="cover"
                  source={require("../assets/image1.png")}
                />
                <Text style={[styles.jan, styles.janPosition]}>30 Jan</Text>
                <View style={[styles.frame6, styles.framePosition]}>
                  <Text style={[styles.user2, styles.textTypo]}>User 3</Text>
                  <View style={styles.rating}>
                    <View style={styles.view}>
                      <Image
                        style={styles.frameLayout}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/star-1.png")}
                      />
                    </View>
                    <Text style={[styles.text4, styles.textTypo]}>4.5</Text>
                  </View>
                </View>
              </View>
              <Text
                style={[styles.greatService, styles.textTypo]}
              >{`Amazing Work Done `}</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.hanymanAppIcon}
          contentFit="cover"
          source={require("../assets/hanyman-app1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame4Position: {
    top: 427,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  reviews2Typo: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  totalBorder: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  iconLayout: {
    height: 35,
    width: 35,
  },
  totalEarning2Typo: {
    marginTop: 10,
    fontSize: FontSize.size_xs,
    color: Color.body,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  janPosition: {
    top: 0,
    position: "absolute",
  },
  commentLayout: {
    height: 76,
    width: 334,
  },
  framePosition: {
    height: 40,
    left: 66,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  frameLayout: {
    height: 16,
    width: 16,
    borderRadius: Border.br_12xs,
  },
  commentSpaceBlock: {
    marginTop: 24,
    alignItems: "flex-end",
  },
  janTypo: {
    fontSize: FontSize.size_xs,
    color: Color.body,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  image1Icon: {
    left: 20,
    height: 230,
    display: "none",
    width: 335,
  },
  helloDeepParmar: {
    fontSize: 20,
    textAlign: "left",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  frame: {
    top: 115,
    left: 1,
    width: 205,
  },
  welcomeBack: {
    color: Color.body,
    textTransform: "capitalize",
  },
  frame1: {
    top: 138,
    width: 140,
    left: 0,
  },
  text: {
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    textTransform: "capitalize",
    textAlign: "left",
  },
  icon: {
    marginLeft: 16,
  },
  totalEarning: {
    backgroundColor: Color.white,
  },
  icon1: {
    marginLeft: 17,
  },
  totalService: {
    marginLeft: 20,
    backgroundColor: Color.white,
  },
  view: {
    flexDirection: "row",
  },
  upcomingServices: {
    width: 63,
  },
  icon2: {
    marginLeft: 29,
  },
  icon3: {
    marginLeft: 49,
  },
  frame2: {
    top: 189,
    width: 354,
    height: 186,
    left: 0,
  },
  reviews2: {
    textTransform: "capitalize",
    color: Color.heading,
  },
  reviews1: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 335,
  },
  imageIcon: {
    width: 50,
    height: 50,
    left: 0,
  },
  jan: {
    left: 293,
    fontSize: FontSize.size_xs,
    color: Color.body,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  user2: {
    textTransform: "capitalize",
    color: Color.heading,
  },
  frameItem: {
    marginLeft: 1,
  },
  text4: {
    marginLeft: 8,
    color: Color.body,
  },
  rating: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  frame6: {
    width: 113,
  },
  frame5: {
    width: 332,
    height: 50,
    overflow: "hidden",
  },
  greatService: {
    lineHeight: 20,
    width: 268,
    marginTop: 6,
    color: Color.body,
  },
  comment2: {
    paddingRight: Padding.p_11xs,
    alignItems: "flex-end",
    height: 76,
    width: 334,
  },
  dec: {
    top: 1,
    left: 294,
    position: "absolute",
    fontSize: FontSize.size_xs,
  },
  text5: {
    marginLeft: 4,
    color: Color.body,
  },
  frame8: {
    width: 109,
  },
  frame7: {
    height: 50,
    width: 335,
    overflow: "hidden",
  },
  comment1: {
    height: 96,
    width: 335,
  },
  frame9: {
    width: 333,
    height: 50,
    overflow: "hidden",
  },
  comment3: {
    paddingRight: Padding.p_12xs,
    height: 76,
    width: 334,
  },
  comments: {
    marginTop: 16,
  },
  reviews: {
    height: 384,
  },
  hanymanAppIcon: {
    height: 60,
    marginTop: -60,
    width: 375,
  },
  frame4: {
    height: 385,
    justifyContent: "flex-end",
    alignItems: "center",
    width: 375,
    left: 0,
    overflow: "hidden",
  },
  servicemanDashboard: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ServiceManDashboard;
