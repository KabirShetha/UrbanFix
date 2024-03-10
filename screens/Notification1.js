import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <View style={styles.new}>
        <View style={styles.title}>
          <Text style={[styles.new1, styles.newTypo]}>New</Text>
          <Text style={[styles.markAsAll, styles.minTypo]}>
            Mark as all read
          </Text>
        </View>
        <View style={styles.comments}>
          <View style={styles.notification1}>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
            <View style={styles.comment}>
              <View>
                <Text style={[styles.addBooking, styles.newTypo]}>
                  Add Booking
                </Text>
                <Text style={[styles.newBookingAddedContainer, styles.newTypo]}>
                  <Text
                    style={styles.newBookingAdded}
                  >{`New Booking Added by `}</Text>
                  <Text style={styles.customer}>Customer</Text>
                </Text>
              </View>
              <Text style={[styles.minAgo, styles.minTypo]}>02 min ago</Text>
            </View>
          </View>
          <View style={[styles.notification2, styles.notificationSpaceBlock]}>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
            <View style={styles.comment}>
              <View>
                <Text style={[styles.addBooking, styles.newTypo]}>
                  Cancel Booking
                </Text>
                <Text style={[styles.newBookingAddedContainer, styles.newTypo]}>
                  <Text
                    style={styles.newBookingAdded}
                  >{`New Booking Added by `}</Text>
                  <Text style={styles.customer}>Customer</Text>
                </Text>
              </View>
              <Text style={[styles.minAgo, styles.minTypo]}>25 min ago</Text>
            </View>
          </View>
          <View style={styles.notificationSpaceBlock}>
            <View style={styles.image1Parent}>
              <Image
                style={styles.image1Icon}
                contentFit="cover"
                source={require("../assets/image-11.png")}
              />
              <View style={styles.comment}>
                <View>
                  <Text style={[styles.addBooking, styles.newTypo]}>
                    Add Booking
                  </Text>
                  <Text
                    style={[styles.newBookingAddedContainer, styles.newTypo]}
                  >
                    <Text
                      style={styles.newBookingAdded}
                    >{`New Booking Added by `}</Text>
                    <Text style={styles.customer}>Customer</Text>
                  </Text>
                </View>
                <Text style={[styles.minAgo, styles.minTypo]}>30 min ago</Text>
              </View>
            </View>
          </View>
          <View style={[styles.notification2, styles.notificationSpaceBlock]}>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
            <View style={styles.comment}>
              <View>
                <Text style={[styles.addBooking, styles.newTypo]}>
                  Cancel Booking
                </Text>
                <Text style={[styles.newBookingAddedContainer, styles.newTypo]}>
                  <Text
                    style={styles.newBookingAdded}
                  >{`New Booking Added by `}</Text>
                  <Text style={styles.customer}>Customer</Text>
                </Text>
              </View>
              <Text style={[styles.minAgo, styles.minTypo]}>25 min ago</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.ealier}>
        <View style={styles.title1}>
          <Text style={[styles.new1, styles.newTypo]}>Ealier</Text>
        </View>
        <View style={styles.comments}>
          <View style={styles.notification1}>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
            <View style={styles.comment}>
              <View>
                <Text style={[styles.addBooking, styles.newTypo]}>
                  Add Booking
                </Text>
                <Text style={[styles.newBookingAddedContainer, styles.newTypo]}>
                  <Text
                    style={styles.newBookingAdded}
                  >{`New Booking Added by `}</Text>
                  <Text style={styles.customer}>Customer</Text>
                </Text>
              </View>
              <Text style={[styles.minAgo4, styles.minTypo]}>1 day</Text>
            </View>
          </View>
          <View style={[styles.notification2, styles.notificationSpaceBlock]}>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
            <View style={styles.comment}>
              <View>
                <Text style={[styles.addBooking, styles.newTypo]}>
                  Cancel Booking
                </Text>
                <Text style={[styles.newBookingAddedContainer, styles.newTypo]}>
                  <Text
                    style={styles.newBookingAdded}
                  >{`New Booking Added by `}</Text>
                  <Text style={styles.customer}>Customer</Text>
                </Text>
              </View>
              <Text style={[styles.minAgo5, styles.minTypo]}>2 day</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.providerAppIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/provider-app1.png")}
      />
      <StatusBar style={styles.framePosition} barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  newTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  minTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  notificationSpaceBlock: {
    marginTop: 25,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  framePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  new1: {
    color: Color.heading,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  markAsAll: {
    color: Color.main,
  },
  title: {
    width: 356,
    justifyContent: "space-between",
    paddingLeft: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  image1Icon: {
    borderRadius: Border.br_5xs,
    width: 60,
    height: 60,
  },
  addBooking: {
    fontSize: FontSize.size_lg,
    color: Color.heading,
  },
  newBookingAdded: {
    color: Color.body,
  },
  customer: {
    color: Color.heading,
  },
  newBookingAddedContainer: {
    lineHeight: 18,
    width: 162,
    marginTop: 10,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  minAgo: {
    marginLeft: 32,
    color: Color.body,
  },
  comment: {
    marginLeft: 15,
    flexDirection: "row",
  },
  notification1: {
    paddingLeft: Padding.p_xl,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  notification2: {
    paddingLeft: Padding.p_xl,
  },
  image1Parent: {
    backgroundColor: Color.background,
    padding: Padding.p_xl,
    flexDirection: "row",
  },
  comments: {
    marginTop: 15,
  },
  new: {
    top: 95,
    left: 0,
    position: "absolute",
  },
  title1: {
    paddingLeft: Padding.p_xl,
    flexDirection: "row",
  },
  minAgo4: {
    marginLeft: 70,
    color: Color.body,
  },
  minAgo5: {
    marginLeft: 68,
    color: Color.body,
  },
  ealier: {
    top: 529,
    left: 9,
    position: "absolute",
  },
  providerAppIcon: {
    top: 752,
    height: 60,
  },
  notification: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Notification1;
