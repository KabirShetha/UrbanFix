import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { Button as RNPButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

const AllBookingListWithStatus = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.allBookingListWithStatus}>
      <View style={styles.dropdown}>
        <Text style={[styles.pending, styles.pendingTypo]}>All</Text>
        <Image
          style={styles.iconlylightarrowDown2}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--down-2.png")}
        />
      </View>
      <StatusBar style={styles.framePosition} barStyle="default" />
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={styles.all}>
          <View style={styles.viewBorder}>
            <View style={styles.imageLayout}>
              <Image
                style={[styles.imageIcon, styles.imageLayout]}
                contentFit="cover"
                source={require("../assets/image27.png")}
              />
              <View style={[styles.status, styles.statusPosition]}>
                <Text style={[styles.pending1, styles.pendingTypo]}>
                  Pending
                </Text>
              </View>
            </View>
            <View style={styles.apartmentCleaning}>
              <View>
                <View style={styles.titleAndId}>
                  <Text style={[styles.apartmentCleaning1, styles.pendingTypo]}>
                    Apartment Cleaning
                  </Text>
                  <View style={styles.id}>
                    <Text style={[styles.text, styles.offTypo]}>#123</Text>
                  </View>
                </View>
                <View style={styles.price}>
                  <Text style={styles.text1}>₹120</Text>
                  <Text style={[styles.off, styles.offTypo]}>21% Off</Text>
                </View>
              </View>
              <View style={styles.apartmentCleaning}>
                <View style={styles.location}>
                  <Image
                    style={styles.iconlylightlocation}
                    contentFit="cover"
                    source={require("../assets/iconlylightlocation2.png")}
                  />
                  <Text
                    style={[
                      styles.washingtonAventure,
                      styles.washingtonAventureTypo,
                    ]}
                  >
                    G-84 Laxmi Complex, Manjalpur, Vadodara
                  </Text>
                </View>
                <View style={styles.date}>
                  <Image
                    style={styles.iconlylightlocation}
                    contentFit="cover"
                    source={require("../assets/iconlylightcalendar.png")}
                  />
                  <Text
                    style={[
                      styles.febuary2022AtContainer,
                      styles.washingtonAventureTypo,
                    ]}
                  >
                    <Text
                      style={styles.febuary2022At}
                    >{`02 Febuary, 2022 at `}</Text>
                    <Text style={styles.am}>8:30 AM</Text>
                  </Text>
                </View>
                <View style={styles.date}>
                  <Image
                    style={styles.iconlylightlocation}
                    contentFit="cover"
                    source={require("../assets/iconlylightprofile3.png")}
                  />
                  <Text
                    style={[
                      styles.washingtonAventure,
                      styles.washingtonAventureTypo,
                    ]}
                  >
                    Manav Patel
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.line, styles.lineLayout]} />
            <View style={styles.btn}>
              <Button
                style={[styles.accept, styles.acceptFlexBox]}
                title="Accept"
                size="medium"
                status="primary"
                appearance="outline"
                color="#5f60b9"
                textStyle={styles.acceptText}
                onPress={() => navigation.navigate("OnClickOfBookingServiceS")}
              >
                Accept
              </Button>
              <Button
                style={[styles.decline, styles.declineSpaceBlock]}
                title="Decline"
                appearance="filled"
                color="#f6f7f9"
                textStyle={styles.declineText}
              >
                Decline
              </Button>
            </View>
          </View>
          <View style={[styles.view, styles.viewBorder]}>
            <View style={styles.imageLayout}>
              <Image
                style={[styles.imageIcon, styles.imageLayout]}
                contentFit="cover"
                source={require("../assets/image28.png")}
              />
              <View style={[styles.status1, styles.statusPosition]}>
                <Text style={[styles.pending2, styles.offTypo]}>completed</Text>
              </View>
            </View>
            <View style={styles.apartmentCleaning}>
              <View>
                <View style={styles.titleAndId}>
                  <Text style={[styles.apartmentCleaning1, styles.pendingTypo]}>
                    House Cleaning
                  </Text>
                  <View style={styles.id}>
                    <Text style={[styles.text, styles.offTypo]}>#123</Text>
                  </View>
                </View>
                <View style={styles.price}>
                  <Text style={styles.text1}>₹120</Text>
                  <Text style={[styles.off, styles.offTypo]}>21% Off</Text>
                </View>
              </View>
              <View style={styles.apartmentCleaning}>
                <View style={styles.location}>
                  <Image
                    style={styles.iconlylightlocation}
                    contentFit="cover"
                    source={require("../assets/iconlylightlocation2.png")}
                  />
                  <Text
                    style={[
                      styles.washingtonAventure,
                      styles.washingtonAventureTypo,
                    ]}
                  >
                    66-B Kajal Soc, Makarpura, Vadodara
                  </Text>
                </View>
                <View style={styles.date}>
                  <Image
                    style={styles.iconlylightlocation}
                    contentFit="cover"
                    source={require("../assets/iconlylightcalendar.png")}
                  />
                  <Text
                    style={[
                      styles.febuary2022AtContainer,
                      styles.washingtonAventureTypo,
                    ]}
                  >
                    <Text
                      style={styles.febuary2022At}
                    >{`15 Febuary, 2022 at `}</Text>
                    <Text style={styles.am}>8:30 AM</Text>
                  </Text>
                </View>
                <View style={styles.date}>
                  <Image
                    style={styles.iconlylightlocation}
                    contentFit="cover"
                    source={require("../assets/iconlylightprofile3.png")}
                  />
                  <Text
                    style={[
                      styles.washingtonAventure,
                      styles.washingtonAventureTypo,
                    ]}
                  >
                    Gurjyot Gill
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.line, styles.lineLayout]} />
            <View style={styles.btn1}>
              <Button
                style={[styles.accept2, styles.acceptFlexBox]}
                title="Accept"
                size="medium"
                status="primary"
                appearance="outline"
                color="#5f60b9"
                textStyle={styles.accept1Text}
                onPress={() => navigation.navigate("OnClickOfBookingServiceS")}
              >
                Accept
              </Button>
              <Button
                style={[styles.decline2, styles.declineSpaceBlock]}
                title="Decline"
                size="medium"
                status="primary"
                appearance="filled"
                color="#f6f7f9"
                textStyle={styles.decline1Text}
              >
                Decline
              </Button>
            </View>
          </View>
          <View style={[styles.view, styles.viewBorder]}>
            <View style={styles.imageLayout}>
              <Image
                style={[styles.imageIcon, styles.imageLayout]}
                contentFit="cover"
                source={require("../assets/image29.png")}
              />
              <View style={[styles.status2, styles.statusPosition]}>
                <Text style={[styles.pending2, styles.offTypo]}>On Going</Text>
              </View>
            </View>
            <View style={styles.apartmentCleaning}>
              <View>
                <View style={styles.titleAndId}>
                  <Text style={[styles.apartmentCleaning1, styles.pendingTypo]}>
                    Electronic Device fixing
                  </Text>
                  <View style={styles.id}>
                    <Text style={[styles.text, styles.offTypo]}>#123</Text>
                  </View>
                </View>
                <View style={styles.price}>
                  <Text style={styles.text1}>₹120</Text>
                  <Text style={[styles.off, styles.offTypo]}>21% Off</Text>
                </View>
              </View>
              <View style={styles.apartmentCleaning}>
                <View style={styles.location}>
                  <Image
                    style={styles.iconlylightlocation}
                    contentFit="cover"
                    source={require("../assets/iconlylightlocation2.png")}
                  />
                  <Text
                    style={[
                      styles.washingtonAventure,
                      styles.washingtonAventureTypo,
                    ]}
                  >
                    88-B Kailash Nagar, Manaja, Vadodara
                  </Text>
                </View>
                <View style={styles.date}>
                  <Image
                    style={styles.iconlylightlocation}
                    contentFit="cover"
                    source={require("../assets/iconlylightcalendar.png")}
                  />
                  <Text
                    style={[
                      styles.febuary2022AtContainer,
                      styles.washingtonAventureTypo,
                    ]}
                  >
                    <Text
                      style={styles.febuary2022At}
                    >{`28 Febuary, 2023 at `}</Text>
                    <Text style={styles.am}>8:30 AM</Text>
                  </Text>
                </View>
                <View style={styles.date}>
                  <Image
                    style={styles.iconlylightlocation}
                    contentFit="cover"
                    source={require("../assets/iconlylightprofile3.png")}
                  />
                  <Text
                    style={[
                      styles.washingtonAventure,
                      styles.washingtonAventureTypo,
                    ]}
                  >
                    Jay Prajapati
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.line2, styles.btn2SpaceBlock]} />
            <View style={[styles.btn2, styles.btn2SpaceBlock]}>
              <View style={[styles.accept4, styles.acceptFlexBox]}>
                <Text style={[styles.accept1, styles.pendingTypo]}>Accept</Text>
              </View>
              <View style={[styles.decline4, styles.declineSpaceBlock]}>
                <Text style={[styles.pending, styles.pendingTypo]}>
                  Decline
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.providerAppIcon}
          contentFit="cover"
          source={require("../assets/provider-app3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  acceptText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  declineText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  accept1Text: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  accept2Btn: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  decline1Text: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  pendingTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  imageLayout: {
    height: 130,
    width: 303,
  },
  statusPosition: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_151xl,
    left: 10,
    top: 10,
    flexDirection: "row",
    position: "absolute",
  },
  offTypo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    textAlign: "left",
  },
  washingtonAventureTypo: {
    marginLeft: 10,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  lineLayout: {
    height: 1,
    backgroundColor: Color.border,
    width: 303,
  },
  acceptFlexBox: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    height: 38,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  declineSpaceBlock: {
    marginLeft: 20,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    height: 38,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  viewBorder: {
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
  },
  btn2SpaceBlock: {
    display: "none",
    marginTop: 20,
  },
  pending: {
    textAlign: "left",
    color: Color.heading,
    fontSize: FontSize.size_sm,
  },
  iconlylightarrowDown2: {
    width: 18,
    height: 18,
  },
  dropdown: {
    top: 110,
    left: 21,
    width: 334,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    justifyContent: "space-between",
    position: "absolute",
    flexDirection: "row",
    backgroundColor: Color.background,
    borderRadius: Border.br_5xs,
  },
  imageIcon: {
    left: 0,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_5xs,
    height: 130,
  },
  pending1: {
    color: Color.white,
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  status: {
    backgroundColor: Color.colorCrimson,
  },
  apartmentCleaning1: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.heading,
  },
  text: {
    color: Color.white,
    fontSize: FontSize.size_sm,
  },
  id: {
    borderRadius: Border.br_24xl,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.main,
    flexDirection: "row",
  },
  titleAndId: {
    width: 303,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text1: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    color: Color.main,
    textTransform: "capitalize",
    textAlign: "left",
  },
  off: {
    color: Color.colorMediumseagreen_100,
    marginLeft: 12,
    fontSize: FontSize.size_xs,
  },
  price: {
    borderRadius: Border.br_121xl,
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  iconlylightlocation: {
    width: 14,
    height: 14,
  },
  washingtonAventure: {
    color: Color.body,
  },
  location: {
    alignItems: "center",
    flexDirection: "row",
  },
  febuary2022At: {
    color: Color.body,
  },
  am: {
    color: Color.heading,
  },
  febuary2022AtContainer: {
    textTransform: "capitalize",
  },
  date: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  apartmentCleaning: {
    marginTop: 20,
  },
  line: {
    marginTop: 20,
  },
  accept: {
    width: 141,
  },
  decline: {
    width: 141,
  },
  btn: {
    marginTop: 20,
    flexDirection: "row",
  },
  pending2: {
    color: Color.white,
    fontSize: FontSize.size_xs,
  },
  status1: {
    backgroundColor: Color.colorMediumseagreen_100,
  },
  accept2: {
    flex: 1,
  },
  decline2: {
    flex: 1,
  },
  btn1: {
    width: 302,
    marginTop: 20,
    flexDirection: "row",
  },
  view: {
    marginTop: 24,
  },
  status2: {
    backgroundColor: "#fd6922",
  },
  line2: {
    height: 1,
    backgroundColor: Color.border,
    width: 303,
  },
  accept1: {
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  accept4: {
    width: 141,
    backgroundColor: Color.main,
  },
  decline4: {
    width: 141,
    backgroundColor: Color.background,
    marginLeft: 20,
  },
  btn2: {
    flexDirection: "row",
  },
  all: {
    width: 355,
    height: 1306,
  },
  providerAppIcon: {
    width: 372,
    height: 60,
    marginTop: -64,
  },
  frame1: {
    top: 152,
    width: 396,
    height: 1967,
    justifyContent: "flex-end",
    paddingTop: 581,
    paddingBottom: 587,
    alignItems: "center",
    overflow: "hidden",
  },
  allBookingListWithStatus: {
    backgroundColor: Color.white,
    width: "100%",
    height: 1546,
    overflow: "hidden",
    flex: 1,
  },
});

export default AllBookingListWithStatus;
