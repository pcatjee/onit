import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ImageRequireSource,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
const MyAccount = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ImageBackground
        source={require("../../assets/image/bg.png")}
        style={{ opacity: 50 }}
      >
        <StatusBar backgroundColor="#00796A" />

        <View
          style={{
            flexDirection: "column",
            //  justifyContent: "center",
            height: 170,
            alignItems: "center",
            backgroundColor: "#00796A",
            //opacity: 0.7,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 21,
              fontWeight: "700",
              marginTop: 20,
              color: "#fff",
            }}
          >
            My Account
          </Text>
          <Image
            source={require("../../assets/image/profile.png")}
            style={{
              height: 90,
              width: 90,
              marginTop: 10,
              marginLeft: 2,
              borderRadius: 60,
            }}
          />
        </View>

        {/* for Booking */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "#fff",
              height: 60,
              //marginTop: 15,
              marginLeft: 15,
              //marginRight: 20,
              borderRadius: 3,
              //borderWidth: 1,
              //borderColor: "#fff",
            }}
          >
            <Image
              source={require("../../assets/logo/bonus.png")}
              style={{
                height: 25,
                width: 25,
                alignItems: "center",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                flex: 0.9,
                fontWeight: "700",
                fontSize: 17,
                color: "black",
                marginLeft: 20,
              }}
            >
              My Bookings
            </Text>
          </View>
        </TouchableOpacity>

        {/* for Personal care */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              //backgroundColor: "#fff",
              height: 60,
              //marginTop: 15,
              marginLeft: 15,
              //marginRight: 20,
              // borderRadius: 3,
              // borderWidth: 1,
              // borderColor: "#fff",
            }}
          >
            <Image
              source={require("../../assets/logo/bonus.png")}
              style={{
                height: 25,
                width: 25,
                alignItems: "center",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                flex: 0.9,
                fontWeight: "700",
                fontSize: 17,
                color: "black",
                marginLeft: 20,
              }}
            >
              Personal care
            </Text>
          </View>
        </TouchableOpacity>

        {/* for scheduled booking */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              //backgroundColor: "#fff",
              height: 60,

              marginLeft: 15,
            }}
          >
            <Image
              source={require("../../assets/logo/bonus.png")}
              style={{
                height: 25,
                width: 25,
                alignItems: "center",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                flex: 0.9,
                fontWeight: "700",
                fontSize: 17,
                color: "black",
                marginLeft: 20,
              }}
            >
              scheduled Bookings
            </Text>
          </View>
        </TouchableOpacity>

        {/* for Manage Address */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              height: 60,
              //marginTop: 15,
              marginLeft: 15,
              //marginRight: 20,
            }}
          >
            <Image
              source={require("../../assets/logo/bonus.png")}
              style={{
                height: 25,
                width: 25,
                alignItems: "center",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                flex: 0.9,
                fontWeight: "700",
                fontSize: 17,
                color: "black",
                marginLeft: 20,
              }}
            >
              Manage Address
            </Text>
          </View>
        </TouchableOpacity>

        {/* Refer and earn */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              height: 60,
              //marginTop: 15,
              marginLeft: 15,
              //marginRight: 20,
            }}
          >
            <Image
              source={require("../../assets/logo/bonus.png")}
              style={{
                height: 25,
                width: 25,
                alignItems: "center",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                flex: 0.9,
                fontWeight: "700",
                fontSize: 17,
                color: "black",
                marginLeft: 20,
              }}
            >
              Refer & Earn
            </Text>
          </View>
        </TouchableOpacity>

        {/* about company */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              height: 60,
              //marginTop: 15,
              marginLeft: 15,
              //marginRight: 20,
            }}
          >
            <Image
              source={require("../../assets/logo/bonus.png")}
              style={{
                height: 25,
                width: 25,
                alignItems: "center",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                flex: 0.9,
                fontWeight: "700",
                fontSize: 17,
                color: "black",
                marginLeft: 20,
              }}
            >
              About Us
            </Text>
          </View>
        </TouchableOpacity>

        {/* about privacy policy */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              height: 60,
              //marginTop: 15,
              marginLeft: 15,
              //marginRight: 20,
            }}
          >
            <Image
              source={require("../../assets/logo/bonus.png")}
              style={{
                height: 25,
                width: 25,
                alignItems: "center",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                flex: 0.9,
                fontWeight: "700",
                fontSize: 17,
                color: "black",
                marginLeft: 20,
              }}
            >
              privacy policy
            </Text>
          </View>
        </TouchableOpacity>

        {/* for sign out */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "25%",
              height: 40,
              marginTop: 40,
              marginBottom: 50,
              marginLeft: 10,
              borderRadius: 3,
            }}
            //</View>onPress={() => { console.log("coming soon") }}>
            // onPress={() => {
            //   alert("coming");
            // }}
          >
            <Text
              style={{
                fontWeight: "900",
                fontSize: 19,
                letterSpacing: 1,
                textAlign: "center",
                position: "relative",
                color: "#00796A",
              }}
            >
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MyAccount;

const style = StyleSheet.create({});
