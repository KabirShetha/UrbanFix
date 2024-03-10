import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const BookingStatus = () => {
  return (
    <View style={styles.bookingStatus}>
      <View style={[styles.navigation, styles.navigationFlexBox]}>
        <View style={styles.time}>
          <Text style={[styles.text, styles.textClr]}>9:41</Text>
        </View>
        <View style={styles.symbols}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi6.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
        </View>
      </View>
      <StatusBar style={styles.bgPosition} barStyle="default" />
      <View style={[styles.bookingId, styles.linePosition]}>
        <Text style={[styles.bookingId1, styles.febTypo]}>Booking ID</Text>
        <Text style={[styles.text1, styles.text1Typo]}>#123</Text>
      </View>
      <View style={[styles.line, styles.lineLayout]} />
      <View style={[styles.detail, styles.linePosition]}>
        <View>
          <Text style={[styles.apartmentCleaning, styles.febTypo]}>
            Apartment Cleaning
          </Text>
          <View style={styles.serviceDetail}>
            <View style={styles.date}>
              <Text style={[styles.date1, styles.febTypo]}>Date :</Text>
              <Text style={[styles.march2023, styles.march2023Typo]}>
                26 Jan, 2022
              </Text>
            </View>
            <View style={styles.time1}>
              <Text style={[styles.date1, styles.febTypo]}>Time :</Text>
              <Text style={[styles.march2023, styles.march2023Typo]}>
                04:00 PM
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.imageIcon, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image17.png")}
        />
      </View>
      <View style={[styles.otherInfo, styles.linePosition]}>
        <View>
          <Text style={[styles.aboutHouseman, styles.febTypo]}>
            About Houseman
          </Text>
          <View style={styles.handymanDetail}>
            <View style={styles.providerNameAndRating}>
              <View style={styles.detail1}>
                <Image
                  style={[styles.imageIcon1, styles.imageIconLayout]}
                  contentFit="cover"
                  source={require("../assets/image24.png")}
                />
                <View style={styles.justineBoyle}>
                  <Text style={[styles.user, styles.pm1Typo]}>
                    Justine Boyle
                  </Text>
                  <View style={styles.serviceDetail}>
                    <Text style={[styles.cleaningExpert, styles.pm1Typo]}>
                      Cleaning Expert
                    </Text>
                    <View style={styles.text2}>
                      <View style={styles.star}>
                        <Image
                          style={styles.starChild}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                        <Image
                          style={styles.starChild}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                        <Image
                          style={styles.starChild}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                        <Image
                          style={styles.starChild}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                        <Image
                          style={styles.starChild}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                      </View>
                      <Text style={[styles.text3, styles.febTypo]}>4.5</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Image
                style={styles.verifiedIcon}
                contentFit="cover"
                source={require("../assets/verified.png")}
              />
            </View>
            <View style={styles.btn}>
              <View style={[styles.accept, styles.acceptLayout]}>
                <Text style={[styles.call, styles.febTypo]}>Call</Text>
              </View>
              <View style={[styles.decline, styles.acceptLayout]}>
                <Text style={[styles.date1, styles.febTypo]}>Chat</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.aboutCustomer}>
          <Text style={[styles.aboutHouseman, styles.febTypo]}>
            About Customer
          </Text>
          <View style={styles.handymanDetail}>
            <View style={styles.star}>
              <Image
                style={styles.imageIcon2}
                contentFit="cover"
                source={require("../assets/image25.png")}
              />
              <View style={styles.text4}>
                <Text style={[styles.user, styles.pm1Typo]}>
                  Leslie Alexander
                </Text>
                <View style={styles.serviceDetail}>
                  <View style={styles.detail1}>
                    <Image
                      style={styles.iconlylightmessage}
                      contentFit="cover"
                      source={require("../assets/iconlylightmessage2.png")}
                    />
                    <Text
                      style={[styles.examplegmailcom, styles.march2023Typo]}
                    >
                      example@gmail.com
                    </Text>
                  </View>
                  <View style={styles.address}>
                    <Image
                      style={styles.iconlylightmessage}
                      contentFit="cover"
                      source={require("../assets/iconlylightlocation1.png")}
                    />
                    <Text
                      style={[styles.examplegmailcom, styles.march2023Typo]}
                    >
                      1901 Thornridge Cirav...
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.btn}>
              <View style={[styles.call1, styles.call1Layout]}>
                <Text style={[styles.date1, styles.febTypo]}>Call</Text>
              </View>
              <View style={[styles.chat1, styles.call1Layout]}>
                <Text style={[styles.call, styles.febTypo]}>Chat</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bg, styles.bgPosition]} />
      <View style={styles.line1} />
      <View style={[styles.frameParent, styles.linePosition]}>
        <View style={[styles.bookingHistoryParent, styles.navigationFlexBox]}>
          <Text style={[styles.aboutHouseman, styles.febTypo]}>
            Booking History
          </Text>
          <Text style={[styles.id123, styles.text1Typo]}>ID : #123</Text>
        </View>
        <View style={[styles.line2, styles.lineLayout]} />
        <View style={styles.status}>
          <View style={[styles.time3, styles.time3Position]}>
            <View>
              <Text style={[styles.pm1, styles.pm1Typo]}>1:17 PM</Text>
              <Text style={[styles.feb, styles.febTypo]}>6 Feb</Text>
            </View>
            <View style={styles.dateAndTime1}>
              <Text style={[styles.pm1, styles.pm1Typo]}>1:21 PM</Text>
              <Text style={[styles.feb, styles.febTypo]}>6 Feb</Text>
            </View>
            <View style={styles.dateAndTime1}>
              <Text style={[styles.pm1, styles.pm1Typo]}>1:22 PM</Text>
              <Text style={[styles.feb, styles.febTypo]}>6 Feb</Text>
            </View>
          </View>
          <View style={[styles.text5, styles.time3Position]}>
            <View>
              <Text style={[styles.aboutHouseman, styles.febTypo]}>
                New Booking
              </Text>
              <Text style={[styles.newBookingAdded, styles.bookingTypo]}>
                New Booking Added by customer
              </Text>
            </View>
            <View style={styles.acceptBooking}>
              <Text style={[styles.aboutHouseman, styles.febTypo]}>
                Accept Booking
              </Text>
              <Text style={[styles.newBookingAdded, styles.bookingTypo]}>
                Status changed From pending to accept
              </Text>
            </View>
            <View style={styles.acceptBooking}>
              <Text style={[styles.aboutHouseman, styles.febTypo]}>
                Assigned Booking
              </Text>
              <Text style={styles.bookingTypo}>
                <Text
                  style={styles.bookingHasAssigned}
                >{`Booking has assigned to `}</Text>
                <Text style={styles.naomieHackett}>Naomie Hackett</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.lineAndCircle, styles.time3Position]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/13.png")}
            />
            <View style={styles.lineAndCircleChild} />
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/21.png")}
            />
            <View style={[styles.lineAndCircleItem, styles.lineBorder]} />
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/3.png")}
            />
            <View style={[styles.lineAndCircleInner, styles.lineBorder]} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.providerAppIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/provider-app2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navigationFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textClr: {
    color: Color.white,
    fontSize: FontSize.size_sm,
  },
  bgPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  linePosition: {
    left: 20,
    position: "absolute",
  },
  febTypo: {
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  text1Typo: {
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  lineLayout: {
    height: 1,
    backgroundColor: Color.border,
  },
  march2023Typo: {
    marginLeft: 10,
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  imageIconLayout: {
    height: 80,
    width: 80,
  },
  pm1Typo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  acceptLayout: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    height: 38,
    width: 134,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  call1Layout: {
    padding: Padding.p_3xs,
    width: 133,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  time3Position: {
    top: "0%",
    position: "absolute",
  },
  bookingTypo: {
    width: 162,
    textTransform: "capitalize",
    marginTop: 10,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  iconLayout: {
    width: 12,
    height: 12,
  },
  lineBorder: {
    borderColor: Color.colorDarkcyan,
    width: 2,
    borderRightWidth: 1.5,
    borderRadius: 0.001,
    borderStyle: "dashed",
    marginTop: 8,
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    fontWeight: "500",
    color: Color.white,
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
    width: 375,
    left: 0,
    position: "absolute",
  },
  bookingId1: {
    color: Color.body,
    fontSize: FontSize.size_base,
  },
  text1: {
    marginLeft: 210,
    fontSize: FontSize.size_lg,
  },
  bookingId: {
    top: 105,
    flexDirection: "row",
  },
  line: {
    top: 142,
    width: 336,
    left: 20,
    position: "absolute",
  },
  apartmentCleaning: {
    color: Color.heading,
    fontSize: FontSize.size_lg,
  },
  date1: {
    color: Color.heading,
    fontSize: FontSize.size_sm,
  },
  march2023: {
    textAlign: "right",
  },
  date: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  time1: {
    marginTop: 10,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  serviceDetail: {
    marginTop: 16,
  },
  imageIcon: {
    borderRadius: Border.br_3xs,
    marginLeft: 79,
  },
  detail: {
    top: 167,
    flexDirection: "row",
  },
  aboutHouseman: {
    color: Color.heading,
    fontSize: FontSize.size_base,
  },
  imageIcon1: {
    borderRadius: Border.br_121xl,
  },
  user: {
    color: Color.heading,
    fontSize: FontSize.size_lg,
  },
  cleaningExpert: {
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  starChild: {
    borderRadius: Border.br_12xs,
    height: 16,
    width: 16,
  },
  star: {
    flexDirection: "row",
  },
  text3: {
    marginLeft: 8,
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  text2: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  justineBoyle: {
    marginLeft: 16,
  },
  detail1: {
    alignItems: "center",
    flexDirection: "row",
  },
  verifiedIcon: {
    height: 15,
    marginLeft: 57,
    width: 16,
  },
  providerNameAndRating: {
    backgroundColor: Color.background,
    flexDirection: "row",
  },
  call: {
    color: Color.white,
    fontSize: FontSize.size_sm,
  },
  accept: {
    backgroundColor: Color.main,
  },
  decline: {
    marginLeft: 20,
    backgroundColor: Color.white,
  },
  btn: {
    marginTop: 24,
    flexDirection: "row",
  },
  handymanDetail: {
    borderRadius: Border.br_xs,
    padding: Padding.p_5xl,
    marginTop: 8,
    backgroundColor: Color.background,
  },
  imageIcon2: {
    width: 70,
    height: 70,
    borderRadius: Border.br_121xl,
  },
  iconlylightmessage: {
    width: 14,
    height: 14,
  },
  examplegmailcom: {
    textAlign: "left",
  },
  address: {
    marginTop: 13,
    alignItems: "center",
    flexDirection: "row",
  },
  text4: {
    marginLeft: 24,
  },
  call1: {
    backgroundColor: Color.white,
  },
  chat1: {
    marginLeft: 20,
    backgroundColor: Color.main,
  },
  aboutCustomer: {
    marginTop: 32,
  },
  otherInfo: {
    top: 287,
  },
  bg: {
    top: 371,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    height: 441,
    backgroundColor: Color.white,
  },
  line1: {
    top: 391,
    left: 168,
    borderRadius: 23,
    width: 40,
    height: 3,
    backgroundColor: Color.border,
    position: "absolute",
  },
  id123: {
    fontSize: FontSize.size_sm,
  },
  bookingHistoryParent: {
    width: 335,
  },
  line2: {
    marginTop: 20,
    width: 335,
  },
  pm1: {
    color: Color.body,
    fontSize: FontSize.size_base,
  },
  feb: {
    marginTop: 8,
    color: Color.heading,
    fontSize: FontSize.size_sm,
  },
  dateAndTime1: {
    marginTop: 60,
  },
  time3: {
    height: "93.26%",
    width: "21.28%",
    right: "78.72%",
    bottom: "6.74%",
    left: "0%",
  },
  newBookingAdded: {
    color: Color.body,
  },
  acceptBooking: {
    marginTop: 42,
  },
  bookingHasAssigned: {
    color: Color.body,
  },
  naomieHackett: {
    color: Color.heading,
  },
  text5: {
    height: "100%",
    width: "57.45%",
    right: "0%",
    bottom: "0%",
    left: "42.55%",
  },
  lineAndCircleChild: {
    borderColor: Color.colorCrimson,
    height: 77,
    width: 2,
    borderRightWidth: 1.5,
    borderRadius: 0.001,
    borderStyle: "dashed",
    marginTop: 8,
  },
  icon1: {
    marginTop: 8,
  },
  lineAndCircleItem: {
    height: 77,
  },
  lineAndCircleInner: {
    height: 39,
    display: "none",
  },
  lineAndCircle: {
    height: "81.65%",
    width: "4.26%",
    right: "65.96%",
    bottom: "18.35%",
    left: "29.79%",
    alignItems: "center",
  },
  status: {
    width: 282,
    height: 267,
    marginTop: 20,
  },
  frameParent: {
    top: 414,
  },
  providerAppIcon: {
    top: 752,
    height: 60,
  },
  bookingStatus: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default BookingStatus;
