import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const OnClickOfBookingServiceS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onclickOfBookingServiceS}>
      <View style={[styles.bookingId, styles.bookingPosition]}>
        <Text style={[styles.bookingId1, styles.janTypo1]}>Booking ID</Text>
        <Text style={[styles.text, styles.textTypo]}>#123</Text>
      </View>
      <View style={[styles.line, styles.lineLayout]} />
      <View style={[styles.detail, styles.bookingPosition]}>
        <View style={styles.serviceTitle}>
          <Text style={[styles.apartmentCleaning, styles.textTypo1]}>
            Apartment Cleaning
          </Text>
          <View style={styles.serviceDetail}>
            <View style={styles.date}>
              <Text style={[styles.date1, styles.textTypo2]}>Date :</Text>
              <Text style={[styles.jan2023, styles.janTypo1]}>
                26 Jan, 2023
              </Text>
            </View>
            <View style={styles.time}>
              <Text style={[styles.date1, styles.textTypo2]}>Time :</Text>
              <Text style={[styles.pm, styles.janTypo1]}>04:00 PM</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image17.png")}
      />
      <View style={[styles.otherInfo, styles.bookingPosition]}>
        <View>
          <Text style={[styles.aboutHandyman1, styles.textTypo2]}>
            About Handyman
          </Text>
          <View style={[styles.handymanDetail, styles.handymanSpaceBlock]}>
            <View style={styles.providerNameAndRating}>
              <View style={styles.detail1}>
                <Image
                  style={styles.imageIcon1}
                  contentFit="cover"
                  source={require("../assets/image18.png")}
                />
                <View>
                  <Text style={[styles.justineBoyle1, styles.textTypo1]}>
                    Justine Boyle
                  </Text>
                  <View style={styles.serviceNameExpertAndRating}>
                    <Text style={[styles.cleaningExpert, styles.janTypo1]}>
                      Cleaning Expert
                    </Text>
                    <View style={styles.text1}>
                      <View style={styles.star}>
                        <Image
                          style={[styles.starChild, styles.starChildLayout]}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                        <Image
                          style={[styles.starChild, styles.starChildLayout]}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                        <Image
                          style={[styles.starChild, styles.starChildLayout]}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                        <Image
                          style={[styles.starChild, styles.starChildLayout]}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                        <Image
                          style={[styles.starChild, styles.starChildLayout]}
                          contentFit="cover"
                          source={require("../assets/star-12.png")}
                        />
                      </View>
                      <Text style={[styles.text2, styles.janTypo1]}>4.5</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Image
                style={styles.verifiedIconLayout}
                contentFit="cover"
                source={require("../assets/verified.png")}
              />
            </View>
            <View style={styles.btn}>
              <View style={[styles.accept, styles.acceptSpaceBlock]}>
                <Text style={[styles.call, styles.callTypo]}>Call</Text>
              </View>
              <View style={[styles.decline, styles.acceptSpaceBlock]}>
                <Text style={[styles.date1, styles.textTypo2]}>Chat</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.aboutCustomer}>
          <Text style={[styles.aboutHandyman1, styles.textTypo2]}>
            About Customer
          </Text>
          <View style={styles.customerInfo}>
            <View style={styles.detail2}>
              <Image
                style={[styles.imageIcon2, styles.imageIconLayout]}
                contentFit="cover"
                source={require("../assets/image19.png")}
              />
              <View style={styles.text3}>
                <Text style={[styles.justineBoyle1, styles.textTypo1]}>
                  Leslie Alexander
                </Text>
                <View style={styles.emailAndAddress}>
                  <View style={styles.email}>
                    <Image
                      style={styles.iconlylightmessage}
                      contentFit="cover"
                      source={require("../assets/iconlylightmessage2.png")}
                    />
                    <Text style={[styles.examplegmailcom, styles.janTypo1]}>
                      example@gmail.com
                    </Text>
                  </View>
                  <View style={[styles.address, styles.addressFlexBox]}>
                    <Image
                      style={styles.iconlylightmessage}
                      contentFit="cover"
                      source={require("../assets/iconlylightlocation1.png")}
                    />
                    <Text style={[styles.examplegmailcom, styles.janTypo1]}>
                      1901 Thornridge Cirav...
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.btn1}>
              <View style={[styles.call1, styles.call1Layout]}>
                <Text style={[styles.date1, styles.textTypo2]}>Call</Text>
              </View>
              <View style={[styles.chat1, styles.call1Layout]}>
                <Text style={styles.chat2Typo}>Chat</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.aboutCustomer}>
          <Text style={[styles.priceDetail1, styles.textTypo2]}>
            Price Detail
          </Text>
          <View style={styles.serviceDetail1}>
            <View style={styles.rate}>
              <Text style={[styles.date1, styles.textTypo2]}>Rate</Text>
              <Text style={[styles.jan2023, styles.janTypo1]}>$45.00</Text>
            </View>
            <View style={[styles.line1, styles.lineLayout]} />
            <View style={styles.discount}>
              <Text style={[styles.discount5OffContainer, styles.textTypo2]}>
                <Text style={styles.discount1}>{`Discount `}</Text>
                <Text style={styles.off}>(5% off)</Text>
              </Text>
              <Text style={[styles.text5, styles.textTypo2]}>- $23.66</Text>
            </View>
            <View style={[styles.line1, styles.lineLayout]} />
            <View style={styles.discount}>
              <Text style={[styles.date1, styles.textTypo2]}>Subtotal</Text>
              <Text style={[styles.text6, styles.janTypo1]}>$459</Text>
            </View>
            <View style={[styles.line3, styles.lineSpaceBlock]}>
              <View style={[styles.line4, styles.lineLayout]} />
            </View>
            <View style={styles.totalAmount}>
              <Text style={[styles.totalAmount1, styles.textTypo]}>
                Total Amount
              </Text>
              <Text style={[styles.text7, styles.textTypo]}>$1255</Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutCustomer}>
          <View style={[styles.title, styles.titleLayout]}>
            <Text style={[styles.justineBoyle1, styles.textTypo1]}>
              Reviews
            </Text>
            <Text style={[styles.viewAll, styles.janTypo]}>View All</Text>
          </View>
          <View style={styles.serviceNameExpertAndRating}>
            <View style={styles.commentLayout1}>
              <Image
                style={styles.imageIcon3}
                contentFit="cover"
                source={require("../assets/image20.png")}
              />
              <Text style={[styles.donnaBins, styles.ratingPosition]}>
                Donna Bins
              </Text>
              <View style={[styles.rating, styles.ratingPosition]}>
                <View style={styles.star}>
                  <Image
                    style={[styles.starChild, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                </View>
                <Text style={[styles.text8, styles.janTypo1]}>4.5</Text>
              </View>
              <Text style={[styles.dec, styles.decTypo]}>02 Dec</Text>
              <Text style={[styles.edit, styles.janTypo]}>Edit</Text>
              <Text
                style={[styles.ametMinimMollit, styles.ratingPosition]}
              >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet. `}</Text>
            </View>
            <View style={[styles.comment3, styles.commentLayout1]}>
              <Image
                style={styles.imageIcon3}
                contentFit="cover"
                source={require("../assets/image21.png")}
              />
              <Text style={[styles.donnaBins, styles.ratingPosition]}>
                Saul Armstrong
              </Text>
              <View style={[styles.rating, styles.ratingPosition]}>
                <View style={styles.star}>
                  <Image
                    style={[styles.starChild, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.starChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                </View>
                <Text style={[styles.text8, styles.janTypo1]}>4.5</Text>
              </View>
              <Text style={[styles.jan, styles.janTypo]}>25 Jan</Text>
              <Text style={[styles.edit, styles.janTypo]}>Edit</Text>
              <Text
                style={[styles.ametMinimMollit, styles.ratingPosition]}
              >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet. `}</Text>
            </View>
          </View>
        </View>
      </View>
      <Button
        style={[styles.confirm, styles.acceptSpaceBlock]}
        title="proceed to payment"
        size="medium"
        status="primary"
        appearance="filled"
        color="#5f60b9"
        textStyle={styles.confirmText}
        onPress={() => navigation.navigate("BookingSummary")}
      >
        proceed to payment
      </Button>
      <StatusBar style={styles.framePosition} barStyle="default" />
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={[styles.otherInfo1, styles.bookingPosition]}>
          <View style={styles.aboutHandyman2}>
            <Text style={[styles.aboutHandyman1, styles.textTypo2]}>
              About Handyman
            </Text>
            <View style={[styles.aboutHandyman4, styles.handymanSpaceBlock]}>
              <View style={styles.star}>
                <View style={styles.star}>
                  <Image
                    style={styles.imageIcon1}
                    contentFit="cover"
                    source={require("../assets/image18.png")}
                  />
                  <View style={styles.justineBoyle2}>
                    <Text style={[styles.justineBoyle1, styles.textTypo1]}>
                      Ashutosh Pandey
                    </Text>
                    <View style={styles.serviceNameExpertAndRating1}>
                      <Text style={[styles.cleaningExpert, styles.janTypo1]}>
                        Cleaning Expert
                      </Text>
                      <View style={styles.text1}>
                        <View style={styles.star}>
                          <Image
                            style={[styles.starChild, styles.starChildLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                          <Image
                            style={[styles.starChild, styles.starChildLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                          <Image
                            style={[styles.starChild, styles.starChildLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                          <Image
                            style={[styles.starChild, styles.starChildLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                          <Image
                            style={[styles.starChild, styles.starChildLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                        </View>
                        <Text style={[styles.text2, styles.janTypo1]}>4.5</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.verifiedIcon1, styles.verifiedIconLayout]}
                  contentFit="cover"
                  source={require("../assets/verified.png")}
                />
              </View>
              <View style={styles.btn2}>
                <View style={[styles.call3, styles.chatLayout]}>
                  <Image
                    style={styles.starChildLayout}
                    contentFit="cover"
                    source={require("../assets/iconlylightcalling1.png")}
                  />
                  <Text style={[styles.call4, styles.chat2Typo]}>Call</Text>
                </View>
                <View style={[styles.chat3, styles.chatLayout]}>
                  <Image
                    style={styles.starChildLayout}
                    contentFit="cover"
                    source={require("../assets/iconlylightchat.png")}
                  />
                  <Text style={[styles.chat4, styles.textTypo2]}>Chat</Text>
                </View>
              </View>
              <View style={styles.rateHousemanWrapper}>
                <Text style={[styles.rateHouseman, styles.textTypo2]}>
                  Rate Houseman
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.aboutCustomer}>
            <Text style={[styles.aboutHandyman1, styles.textTypo2]}>
              About Customer
            </Text>
            <View style={[styles.aboutHandyman4, styles.handymanSpaceBlock]}>
              <View style={styles.star}>
                <Image
                  style={[styles.imageIcon6, styles.imageIconLayout]}
                  contentFit="cover"
                  source={require("../assets/image22.png")}
                />
                <View style={styles.text12}>
                  <Text style={[styles.justineBoyle1, styles.textTypo1]}>
                    Customer
                  </Text>
                  <View style={styles.serviceNameExpertAndRating}>
                    <View style={styles.email1}>
                      <Image
                        style={styles.iconlylightmessage}
                        contentFit="cover"
                        source={require("../assets/iconlylightmessage2.png")}
                      />
                      <Text style={[styles.examplegmailcom, styles.janTypo1]}>
                        example@gmail.com
                      </Text>
                    </View>
                    <View style={styles.addressFlexBox}>
                      <Image
                        style={styles.iconlylightmessage}
                        contentFit="cover"
                        source={require("../assets/iconlylightlocation1.png")}
                      />
                      <Text style={[styles.examplegmailcom, styles.janTypo1]}>
                        exampleaddress
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.btn2}>
                <View style={[styles.call3, styles.chatLayout]}>
                  <Image
                    style={styles.starChildLayout}
                    contentFit="cover"
                    source={require("../assets/iconlylightcalling1.png")}
                  />
                  <Text style={[styles.call4, styles.chat2Typo]}>Call</Text>
                </View>
                <View style={[styles.chat5, styles.chatLayout]}>
                  <Image
                    style={styles.starChildLayout}
                    contentFit="cover"
                    source={require("../assets/iconlylightchat.png")}
                  />
                  <Text style={[styles.chat4, styles.textTypo2]}>Chat</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.aboutCustomer}>
            <Text style={[styles.priceDetail1, styles.textTypo2]}>
              Payment Details
            </Text>
            <View style={styles.serviceDetail1}>
              <View style={styles.rate}>
                <Text style={[styles.date1, styles.textTypo2]}>ID</Text>
                <Text style={[styles.text13, styles.textTypo]}>#123</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={styles.quantity}>
                <Text style={[styles.date1, styles.textTypo2]}>Quantity</Text>
                <Text style={[styles.jan2023, styles.janTypo1]}>*2</Text>
              </View>
              <View style={[styles.line6, styles.lineLayout]} />
              <View style={styles.discount}>
                <Text style={[styles.discount5Off, styles.textTypo2]}>
                  Method
                </Text>
                <Text style={[styles.jan2023, styles.janTypo1]}>Cash</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={styles.discount}>
                <Text style={[styles.date1, styles.textTypo2]}>Status</Text>
                <Text style={[styles.text16, styles.textTypo2]}>Pending</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={styles.discount}>
                <Text style={[styles.date1, styles.textTypo2]}>Subtotal</Text>
                <Text style={[styles.text6, styles.janTypo1]}>₹459</Text>
              </View>
              <View style={[styles.line9, styles.lineSpaceBlock]}>
                <View style={[styles.line10, styles.lineLayout]} />
              </View>
              <View style={styles.quantity}>
                <Text style={[styles.totalAmount1, styles.textTypo]}>
                  Total Amount
                </Text>
                <Text style={[styles.text7, styles.textTypo]}>₹1255</Text>
              </View>
            </View>
          </View>
          <View style={styles.aboutCustomer}>
            <Text style={[styles.priceDetail1, styles.textTypo2]}>
              Price Detail
            </Text>
            <View style={styles.serviceDetail1}>
              <View style={styles.rate}>
                <Text style={[styles.date1, styles.textTypo2]}>Rate</Text>
                <Text style={[styles.jan2023, styles.janTypo1]}>₹45.00</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={styles.totalAmount}>
                <Text style={[styles.date1, styles.textTypo2]}>Quantity</Text>
                <Text style={[styles.jan2023, styles.janTypo1]}>*2</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={styles.discount}>
                <Text style={[styles.discount5OffContainer, styles.textTypo2]}>
                  <Text style={styles.discount1}>{`Discount `}</Text>
                  <Text style={styles.off}>(5% off)</Text>
                </Text>
                <Text style={[styles.text5, styles.textTypo2]}>- ₹23.66</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={styles.discount}>
                <Text style={[styles.discount5OffContainer, styles.textTypo2]}>
                  <Text style={styles.coupon}>Coupon</Text>
                  <Text style={styles.ab45789a}> (AB45789A)</Text>
                </Text>
                <Text style={[styles.text16, styles.textTypo2]}>₹459</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={styles.discount}>
                <Text style={[styles.date1, styles.textTypo2]}>Subtotal</Text>
                <Text style={[styles.text6, styles.janTypo1]}>₹459</Text>
              </View>
              <View style={[styles.line3, styles.lineSpaceBlock]}>
                <View style={[styles.line4, styles.lineLayout]} />
              </View>
              <View style={styles.totalAmount}>
                <Text style={[styles.totalAmount1, styles.textTypo]}>
                  Total Amount
                </Text>
                <Text style={[styles.text7, styles.textTypo]}>₹1255</Text>
              </View>
            </View>
          </View>
          <View style={styles.reviews2}>
            <View style={styles.reviews3}>
              <Text style={[styles.priceDetail1, styles.textTypo2]}>
                Reviews
              </Text>
              <Text style={[styles.viewAll, styles.janTypo]}>View All</Text>
            </View>
            <View style={styles.serviceDetail}>
              <View style={styles.commentLayout}>
                <Image
                  style={styles.imageIcon3}
                  contentFit="cover"
                  source={require("../assets/image23.png")}
                />
                <Text style={[styles.donnaBins, styles.ratingPosition]}>
                  User
                </Text>
                <View style={[styles.rating, styles.ratingPosition]}>
                  <View style={styles.star}>
                    <Image
                      style={[styles.starChild, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                  </View>
                  <Text style={[styles.text8, styles.janTypo1]}>4.5</Text>
                </View>
                <Text style={[styles.dec1, styles.janTypo]}>02 Dec</Text>
                <Text style={[styles.ametMinimMollit, styles.ratingPosition]}>
                  Review...
                </Text>
              </View>
              <View style={[styles.comment2, styles.commentLayout]}>
                <Image
                  style={styles.imageIcon3}
                  contentFit="cover"
                  source={require("../assets/image1.png")}
                />
                <Text style={[styles.donnaBins, styles.ratingPosition]}>
                  User
                </Text>
                <View style={[styles.rating, styles.ratingPosition]}>
                  <View style={styles.star}>
                    <Image
                      style={[styles.starChild, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.starChildLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                  </View>
                  <Text style={[styles.text2, styles.janTypo1]}>4.5</Text>
                </View>
                <Text style={[styles.jan1, styles.decTypo]}>25 Jan</Text>
                <Text style={[styles.ametMinimMollit, styles.ratingPosition]}>
                  Review...
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Button
          style={[styles.cancelBookingBtn, styles.titleLayout]}
          title="Cancel Booking"
          size="medium"
          status="primary"
          appearance="outline"
          color="#5f60b9"
          textStyle={styles.cancelBookingBtnText}
          onPress={() => navigation.navigate("AllBookingListWithStatus")}
        >
          Cancel Booking
        </Button>
        <Image
          style={[styles.providerAppIcon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/provider-app2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  cancelBookingBtnText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  bookingPosition: {
    left: 20,
    position: "absolute",
  },
  janTypo1: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  textTypo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  lineLayout: {
    height: 1,
    backgroundColor: Color.border,
  },
  textTypo1: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  textTypo2: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  handymanSpaceBlock: {
    padding: Padding.p_5xl,
    marginTop: 8,
    backgroundColor: Color.background,
    borderRadius: Border.br_xs,
  },
  starChildLayout: {
    height: 16,
    width: 16,
  },
  acceptSpaceBlock: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  callTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    flex: 1,
  },
  imageIconLayout: {
    height: 70,
    borderRadius: Border.br_121xl,
  },
  addressFlexBox: {
    marginTop: 13,
    alignItems: "center",
    flexDirection: "row",
  },
  call1Layout: {
    padding: Padding.p_3xs,
    width: 133,
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  lineSpaceBlock: {
    paddingTop: Padding.p_3xs,
    marginTop: 10,
  },
  titleLayout: {
    width: 335,
    flexDirection: "row",
  },
  janTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  ratingPosition: {
    left: 66,
    position: "absolute",
  },
  decTypo: {
    left: 293,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  commentLayout1: {
    height: 96,
    width: 334,
  },
  framePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  verifiedIconLayout: {
    height: 15,
    width: 16,
  },
  chatLayout: {
    height: 38,
    width: 134,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  chat2Typo: {
    color: Color.white,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  commentLayout: {
    height: 76,
    alignSelf: "stretch",
  },
  bookingId1: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  text: {
    color: Color.main,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  bookingId: {
    top: 105,
    justifyContent: "space-between",
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
    alignSelf: "stretch",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  date1: {
    fontSize: FontSize.size_sm,
    color: Color.heading,
    textAlign: "left",
  },
  jan2023: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  date: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  pm: {
    marginLeft: 10,
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  time: {
    justifyContent: "flex-end",
    marginTop: 10,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  serviceDetail: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  serviceTitle: {
    width: 154,
  },
  detail: {
    top: 167,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  imageIcon: {
    top: 165,
    left: 189,
    borderRadius: Border.br_3xs,
    height: 80,
    width: 80,
    position: "absolute",
  },
  aboutHandyman1: {
    color: Color.heading,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  imageIcon1: {
    borderRadius: Border.br_121xl,
    height: 80,
    width: 80,
  },
  justineBoyle1: {
    textTransform: "capitalize",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  cleaningExpert: {
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  starChild: {
    borderRadius: Border.br_12xs,
    height: 16,
    width: 16,
  },
  star: {
    flexDirection: "row",
  },
  text2: {
    marginLeft: 8,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text1: {
    alignItems: "center",
    marginTop: 8,
    flexDirection: "row",
  },
  serviceNameExpertAndRating: {
    marginTop: 16,
  },
  detail1: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  providerNameAndRating: {
    backgroundColor: Color.background,
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  call: {
    fontSize: FontSize.size_sm,
  },
  accept: {
    justifyContent: "center",
    backgroundColor: Color.main,
    flex: 1,
  },
  decline: {
    marginLeft: 20,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: Color.white,
  },
  btn: {
    marginTop: 24,
    width: 287,
    flexDirection: "row",
  },
  handymanDetail: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  imageIcon2: {
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
  iconlylightmessage: {
    width: 14,
    height: 14,
  },
  examplegmailcom: {
    marginLeft: 10,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  email: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  address: {
    alignSelf: "stretch",
  },
  emailAndAddress: {
    width: 171,
    height: 36,
    marginTop: 16,
  },
  text3: {
    marginLeft: 24,
    flex: 1,
  },
  detail2: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  call1: {
    backgroundColor: Color.white,
  },
  chat1: {
    backgroundColor: Color.main,
  },
  btn1: {
    width: 296,
    height: 35,
    marginTop: 24,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  customerInfo: {
    width: 334,
    marginTop: 8,
    padding: Padding.p_5xl,
    backgroundColor: Color.background,
    borderRadius: Border.br_xs,
  },
  aboutCustomer: {
    marginTop: 32,
  },
  priceDetail1: {
    textTransform: "capitalize",
    color: Color.heading,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  rate: {
    width: 303,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  line1: {
    width: 303,
    marginTop: 10,
  },
  discount1: {
    color: Color.colorGray_100,
  },
  off: {
    color: Color.colorMediumseagreen_200,
  },
  discount5OffContainer: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text5: {
    color: Color.colorMediumseagreen_200,
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  discount: {
    width: 303,
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text6: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  line4: {
    alignSelf: "stretch",
  },
  line3: {
    width: 303,
  },
  totalAmount1: {
    color: Color.heading,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  text7: {
    textAlign: "right",
    color: Color.main,
    fontSize: FontSize.size_base,
  },
  totalAmount: {
    width: 303,
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  serviceDetail1: {
    padding: Padding.p_base,
    marginTop: 8,
    backgroundColor: Color.background,
    borderRadius: Border.br_xs,
  },
  viewAll: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  title: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageIcon3: {
    width: 50,
    height: 50,
    left: 0,
    top: 0,
    position: "absolute",
  },
  donnaBins: {
    top: 0,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  frameItem: {
    marginLeft: 1,
    borderRadius: Border.br_12xs,
    height: 16,
    width: 16,
  },
  text8: {
    marginLeft: 4,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  rating: {
    top: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  dec: {
    top: 1,
  },
  edit: {
    top: 3,
    left: 311,
    textTransform: "capitalize",
    display: "none",
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  ametMinimMollit: {
    top: 56,
    lineHeight: 20,
    width: 268,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  jan: {
    left: 295,
    top: 1,
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  comment3: {
    marginTop: 24,
  },
  otherInfo: {
    top: 293,
    display: "none",
  },
  confirm: {
    top: 1360,
    left: 54,
    height: 45,
    justifyContent: "center",
    width: 287,
    position: "absolute",
  },
  serviceNameExpertAndRating1: {
    marginTop: 12,
  },
  justineBoyle2: {
    marginLeft: 16,
  },
  verifiedIcon1: {
    marginLeft: 57,
    display: "none",
  },
  call4: {
    marginLeft: 10,
  },
  call3: {
    backgroundColor: Color.main,
  },
  chat4: {
    marginLeft: 10,
    fontSize: FontSize.size_sm,
    color: Color.heading,
    textAlign: "left",
  },
  chat3: {
    marginLeft: 20,
    backgroundColor: Color.background,
  },
  btn2: {
    marginTop: 24,
    flexDirection: "row",
  },
  rateHouseman: {
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    color: Color.main,
    textAlign: "left",
  },
  rateHousemanWrapper: {
    width: 288,
    marginTop: 24,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  aboutHandyman4: {
    marginTop: 8,
  },
  aboutHandyman2: {
    display: "none",
  },
  imageIcon6: {
    width: 70,
  },
  email1: {
    alignItems: "center",
    flexDirection: "row",
  },
  text12: {
    marginLeft: 24,
  },
  chat5: {
    marginLeft: 20,
    backgroundColor: Color.white,
  },
  text13: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
    color: Color.main,
  },
  quantity: {
    width: 303,
    alignItems: "center",
    display: "none",
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  line6: {
    width: 303,
    display: "none",
    marginTop: 10,
  },
  discount5Off: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text16: {
    color: Color.colorMediumseagreen_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  line10: {
    width: 303,
  },
  line9: {
    display: "none",
  },
  coupon: {
    color: Color.heading,
  },
  ab45789a: {
    color: Color.main,
  },
  reviews3: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  dec1: {
    left: 294,
    top: 1,
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  jan1: {
    top: 0,
  },
  comment2: {
    marginTop: 24,
  },
  reviews2: {
    marginTop: 32,
    width: 336,
  },
  otherInfo1: {
    top: 0,
  },
  cancelBookingBtn: {
    top: 385,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    left: 20,
    position: "absolute",
  },
  providerAppIcon: {
    top: 473,
    height: 60,
  },
  frame1: {
    top: 279,
    height: 985,
    overflow: "hidden",
  },
  onclickOfBookingServiceS: {
    width: "100%",
    height: 1600,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default OnClickOfBookingServiceS;
