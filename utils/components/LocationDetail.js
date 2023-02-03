import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/EvilIcons";

import { useDispatch, useSelector } from "react-redux";
import { setCity, updateLatitude, updateLongitude } from "../../backend/slice";
import { BottomSheet } from "react-native-btr";
import MapView, { Marker } from "react-native-maps";

const LocationDetail = ({ color }) => {
  const [visible, setVisible] = useState(false);
  const setLatitude = useSelector((state) => state.auth.lat);
  const setLongitude = useSelector((state) => state.auth.long);
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const dispatch = useDispatch();

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
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

      dispatch(updateLatitude(latitude));
      dispatch(updateLongitude(longitude));

      for (let item of response) {
        console.log(item);
        let address = `${item.name}, ${item.city}, ${item.postalCode}`;
        setDisplayCurrentAddress(address);
        dispatch(setCity(item.city));

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
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{ marginTop: 5 }}
        onPress={toggleBottomNavigationView}
      >
        <Icon1 name="location" size={30} color={color} />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          fontWeight: "700",
          fontSize: 18,
          color,
          marginLeft: 5,
          margin: 6,
        }}
      >
        {/* Sector XXX, Noida */}
        {displayCurrentAddress}
        <Icon name="pencil-outline" size={20} color={color} />
      </Text>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: 450,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Text
                  style={{
                    textAlign: "center",
                    padding: 20,
                    fontSize: 20,
                  }}
                >
                  Share Using
                </Text> */}
          {setLatitude && (
            <MapView
              initialRegion={{
                latitude: setLatitude,
                longitude: setLongitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              style={{ flex: 1, width: "100%" }}
              mapType="mutedStandard"
            >
              <Marker
                coordinate={{
                  latitude: setLatitude,
                  longitude: setLongitude,
                }}
                title="Your location"
                description="short description"
                identifier="origin"
                pinColor="#C92A2A"
              />
            </MapView>
          )}
        </View>
      </BottomSheet>
    </View>
  );
};

export default LocationDetail;
