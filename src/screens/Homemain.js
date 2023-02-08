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
  Platform,
  FlatList,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { BottomSheet } from "react-native-btr";
import * as Location from "expo-location";
import HomeScreen from "../../utils/components/slider";
import displayCurrentAddress from "../../location";
import LocationDetail from "../../utils/components/LocationDetail";
import { useSelector } from "react-redux";
import homeList from "../../const/homeList";

const { height, width } = Dimensions.get("window");

const Homemain = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [text, onChangeText] = useState("");

  const extraction = homeList.filter((curElem) => {
    return curElem.name.toLowerCase().includes(text.toLowerCase());
  });

  const Card = ({ homeListing }) => {
    return (
      <TouchableOpacity
        // style={
        //   homeListing.isDefault === true ? styles.buttonDefault : styles.button
        // }
        onPress={() => {
          navigation.navigate(homeListing.screen);
        }}
      >
        <View
          style={{
            backgroundColor: "#F8F8F8",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            width: 150,
            marginTop: 5,
            marginLeft: 20,
            marginRight: 10,
            marginBottom: 5,
            borderRadius: 20,
            borderWidth: 1.2,
            borderColor: homeListing.isDefault ? "#FFBB00" : "#ddd",
          }}
        >
          <Image
            style={{
              marginTop: 1,
              marginLeft: 0,
              height: 40,
              width: 40,
            }}
            source={homeListing.img}
          />
          <Text style={{ marginTop: 10, marginLeft: 0, height: 18 }}>
            {homeListing.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Wait,we are fetching you."
  );
  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Service not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        console.log(item);
        let address = `${item.name}, ${item.city}, ${item.postalCode}`;

        setDisplayCurrentAddress(address);

        // if (address.length > 0) {
        //   setTimeout(() => {
        //     navigation.navigate("Home", { item: address });
        //   }, 2000);
        // }
      }
    }
  };

  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: "#00796A",
        height: height,
        width: width,
      }}
    >
      {/* <ScrollView> */}
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#00796A"
      />

      <View
        style={{
          //flex: 2,
          height: 110,
          width: width,
          flexDirection: "column",
          backgroundColor: "#00796A",
        }}
      >
        {/* for location box   */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#00796A",
            height: 45,
            marginTop: 2,
            marginLeft: 14,
            width: "93%",
            borderRadius: 4,
          }}
        >
          {/* {displayCurrentAddress} */}
          <LocationDetail color={"#fff"} />
          {/* Sector XXX, Noida */}

          <Image
            source={require("../../assets/logo/alert.png")}
            style={{
              padding: 10,
              margin: 5,
              height: 25,
              width: 25,
              resizeMode: "stretch",
              alignItems: "center",
            }}
          />
        </View>

        {/* for search box        */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            height: 45,
            marginTop: 10,
            marginLeft: 14,
            width: "93%",
            borderRadius: 4,
          }}
        >
          <Image
            source={require("../../assets/logo/search.png")}
            style={{
              margin: 10,
              height: 20,
              width: 20,
              resizeMode: "stretch",
              alignItems: "center",
            }}
          />
          <TextInput
            onChangeText={onChangeText}
            style={{
              flex: 1,
              fontWeight: "500",
              fontSize: 15,
              // color: "white",
              marginLeft: 5,
              letterSpacing: 0,
            }}
            placeholder="Search ..."
            underlineColorAndroid="transparent"
          />
          <Image
            source={require("../../assets/logo/mic.png")}
            style={{
              padding: 10,
              height: 16,
              width: 16,
              marginRight: 10,
              resizeMode: "stretch",
              alignItems: "center",
            }}
          />
        </View>
      </View>

      <View
        style={{
          // flex: 11,

          marginTop: 5,
          backgroundColor: "#fff",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          shadowColor: "#00000014",
          shadowRadius: 20,
          height: height,
          width: width,
        }}
      >
        {/* for recommended services */}
        <Text
          style={{
            justifyContent: "center",
            fontSize: 17,
            fontWeight: "700",
            marginLeft: 16,
            marginTop: 12,
          }}
        >
          Recommended Services:
        </Text>

        {/* for img swiper  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#fff",
            width: "93%",
            height: 130.5,
            marginLeft: 16,
            marginTop: 15,
            borderRadius: 5,
            position: "relative",
          }}
        >
          <HomeScreen />
        </View>

        <Text
          style={{
            justifyContent: "center",
            fontSize: 19,
            fontWeight: "600",
            marginLeft: 16,
            marginTop: 20,
            marginBottom: 0,
            color: "#3A3A3A",
          }}
        >
          Services:
        </Text>
        {/* services Below*/}

        <FlatList
          columnWrapperStyle={{ justifyContent: "center" }}
          numColumns={2}
          data={extraction}
          renderItem={({ item }) => {
            return <Card homeListing={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Homemain;

const styles = StyleSheet.create({});
