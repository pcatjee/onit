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
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homemain from "../src/screens/Homemain";
//import { StyleSheet, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Wallet from "../utils/tabs/Wallet";
import Newtask from "../utils/tabs/Newtask";
import Message from "../utils/tabs/Message";
import MyAccount from "../utils/tabs/MyAccount";
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const TabNavigator = (navigation) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#00796A" }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        //translucent
        //backgroundColor="transparent"
        backgroundColor="#00796A"
      />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarInactiveTintColor: "grey",
          tabBarActiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Homemain}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-sharp" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="wallet-outline" color={color} size={size} />
            ),
          }}
        />

        {/* <Tab.Screen
          name="Newtask"
          component={Newtask}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="plus-circle" color={color} size={size} />
            ),
          }}
        /> */}

        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({ color, size }) => (
              <Feather name="message-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MyAccount"
          component={MyAccount}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
