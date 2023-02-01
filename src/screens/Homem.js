import "react-native";
import { StyleSheet, StatusBar, View, Dimensions } from "react-native";
import TabNavigator from "../../utils/TabNavigator";
import React from "react";
const { height, width } = Dimensions.get("window");

const Homem = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#00796A",
        height: height,
        width: width,
        // marginTop: 10,
      }}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#00796A"
      />
      <TabNavigator></TabNavigator>
    </View>
  );
};

export default Homem;
const styles = StyleSheet.create({});
