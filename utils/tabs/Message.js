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
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { color } from "react-native-reanimated";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
// import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
const { height, width } = Dimensions.get("window");

import All from "../Message/All";
import Friends from "../Message/Friends";
import Technician from "../Message/Technician";

const TabNavigator = createMaterialTopTabNavigator(
  {
    All: {
      screen: All,
      navigationOptions: {
        tabBarLabel: "All",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
      },
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarLabel: "Friends",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
      },
    },
    Technician: {
      screen: Technician,
      navigationOptions: {
        tabBarLabel: "Technician",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
      },
    },
  },
  {
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: "#00796A",
      inactiveTintColor: "#161716",
      indicatorStyle: {
        backgroundColor: "#00796A",
      },
      labelStyle: {
        fontWeight: "600",
        fontSize: 14,
      },

      style: {
        backgroundColor: "#fff",
        borderColor: "#fff",
        shadowColor: "#ddd",
        marginTop: 0,
        height: 40,
      },
    },
  }
);

const Navigator = createAppContainer(TabNavigator);
const Message = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />
      <View
        style={{ flexDirection: "row", backgroundColor: "#fff", height: 60 }}
      >
        <View
          style={{
            flexDirection: "row",
            //justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#fff",
            height: 50,
            marginTop: 10,
            marginLeft: 14,
            width: "85%",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 23,
              fontWeight: "700",
              marginLeft: 10,
            }}
          >
            Chat
          </Text>
          <Image
            source={require("../../assets/logo/notif.png")}
            style={{
              margin: 10,
              height: 25,
              width: 23,
              marginLeft: 270,
            }}
          />
        </View>
      </View>
      <Navigator>
        <Message />
      </Navigator>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
  },

  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 5,
  },
  btnTab: {
    width: "55%",
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#fff",
    padding: 8,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textTab: {
    fontSize: 18,
    color: "#161716",
  },
});
