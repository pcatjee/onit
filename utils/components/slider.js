import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Swiper from "react-native-web-swiper";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 140, width: "100%", borderRadius: 10 }}>
          <Swiper horizontal loop timeout={2.5}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/logo/Slider.png")}
                style={{
                  height: 140,
                  width: "100%",
                  resizeMode: "stretch",
                  borderRadius: 10,
                }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/logo/Slider.png")}
                style={{
                  height: 140,
                  width: "100%",
                  resizeMode: "stretch",
                  borderRadius: 10,
                }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/logo/Slider.png")}
                style={{
                  height: 140,
                  width: "100%",
                  resizeMode: "stretch",
                  borderRadius: 10,
                }}
              />
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}
