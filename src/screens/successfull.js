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
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import "react-native";
import React, { useEffect } from "react";
import { useState } from "react";

const { height, width } = Dimensions.get("window");

const SuccessFull = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8F8F8",
        height: height,
        width: width,
      }}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          height: 270,
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#DBEAE8",
        }}
      >
        <Text
          style={{
            marginLeft: 60,
            marginRight: 20,
            fontWeight: "600",
            fontSize: 17,
            marginTop: 30,
          }}
        >
          Your booking request is in progress.{"\n"}A verfied technician will be
          assigned {"\n"}to you seen.
        </Text>
      </View>
      <Text
        style={{
          padding: 20,
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        Booking Request:
      </Text>

      {/* For booked ticket */}
      <View
        style={{
          height: 150,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            height: 35,
            marginTop: 10,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/ac.png")}
            style={{
              height: 25,
              width: 25,
              alignItems: "center",
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              flex: 0.9,
              fontWeight: "500",
              fontSize: 17,
              color: "black",
              marginLeft: 20,
            }}
          >
            Plumber Service
          </Text>
        </View>
        <Text
          style={{ marginLeft: 15, color: "#00000029", fontWeight: "bold" }}
        >
          Booking Id: AA1585
        </Text>

        <View>
          <View
            style={{
              //justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
              marginLeft: 30,
              marginTop: 10,
              marginRight: 20,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  height: 30,
                  width: 80,
                  backgroundColor: "#00796A",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "600",
                  }}
                >
                  View Details
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: 30,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#0066FF",
                  marginTop: 10,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "600",
                  }}
                >
                  Re-Schedule
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* for Another service */}
      <TouchableOpacity onPress={() => navigation.navigate("ServiceNeeds")}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            height: 50,
            marginTop: 16,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/plus.png")}
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
              fontWeight: "400",
              fontSize: 16,
              color: "black",
              marginLeft: 20,
            }}
          >
            Add Another Service
          </Text>
          <Image
            source={require("../../assets/logo/nxt.png")}
            style={{
              height: 25,
              width: 25,
              alignItems: "center",
              marginLeft: 5,
            }}
          />
        </View>
      </TouchableOpacity>

      {/* for Need Help */}
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            height: 50,
            marginTop: 16,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/qes.png")}
            style={{
              height: 35,
              width: 35,
              alignItems: "center",
              marginLeft: 2,
            }}
          />
          <Text
            style={{
              flex: 0.9,
              fontWeight: "400",
              fontSize: 16,
              color: "black",
              marginLeft: 16,
            }}
          >
            I Need Help
          </Text>
          <Image
            source={require("../../assets/logo/nxt.png")}
            style={{
              height: 25,
              width: 25,
              alignItems: "center",
              marginLeft: 5,
            }}
          />
        </View>
      </TouchableOpacity>

      {/* for Refer Earning */}
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            height: 50,
            marginTop: 15,
            //marginLeft: 20,
            //marginRight: 20,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/refer.png")}
            style={{
              height: 22,
              width: 22,
              alignItems: "center",
              marginLeft: 5,
            }}
          />
          <Text
            style={{
              flex: 0.9,
              fontWeight: "400",
              fontSize: 16,
              color: "black",
              marginLeft: 20,
            }}
          >
            Refer Earning
          </Text>
          <Image
            source={require("../../assets/logo/nxt.png")}
            style={{
              height: 25,
              width: 25,
              alignItems: "center",
              marginLeft: 5,
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          width: "95%",
          backgroundColor: "#00796A",
          height: 50,
          marginTop: 30,
          marginLeft: 10,
          borderRadius: 3,
        }}
        onPress={() => navigation.navigate("Homem")}
      >
        <Text
          style={{
            fontWeight: "400",
            fontSize: 18,
            letterSpacing: 1,
            textAlign: "center",
            position: "relative",
            color: "#fff",
          }}
        >
          Go to HomePage
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessFull;

const styles = StyleSheet.create({});
