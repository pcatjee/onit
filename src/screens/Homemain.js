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

const { height, width } = Dimensions.get("window");

const Homemain = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
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
      <ScrollView>
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
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00796A",
              height: 45,
              marginTop: 2,
              marginLeft: 14,
              width: "93%",
              borderRadius: 4,
            }}
          >
            {/* <TouchableOpacity onPress={toggleBottomNavigationView}> */}
            <TouchableOpacity>
              <Image
                source={require("../../assets/logo/111.png")}
                style={{
                  padding: 10,
                  margin: 5,
                  height: 25,
                  width: 25,
                  resizeMode: "stretch",
                  alignItems: "center",
                }}
              />
            </TouchableOpacity>
            <BottomSheet
              visible={visible}
              onBackButtonPress={toggleBottomNavigationView}
              onBackdropPress={toggleBottomNavigationView}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  width: "100%",
                  height: 250,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    padding: 20,
                    fontSize: 20,
                  }}
                >
                  Share Using
                </Text>
              </View>
            </BottomSheet>

            <Text
              style={{
                flex: 1,
                fontWeight: "700",
                fontSize: 18,
                color: "#fff",
                marginLeft: 5,
                margin: 6,
              }}
            >
              {displayCurrentAddress}
              {/* Sector XXX, Noida */}
            </Text>

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
              style={{
                flex: 1,
                fontWeight: "500",
                fontSize: 15,
                color: "white",
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
          {/* services */}
          <View
            style={{
              marginTop: 10,
              // backgroundColor: "#ddd",
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                // height: 110,
                backgroundColor: "#fff",
                marginTop: 10,
              }}
            >
              {/* Service Needs */}
              <TouchableOpacity
                onPress={() => navigation.navigate("ServiceNeeds")}
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
                    borderColor: "#FFBB00",
                  }}
                >
                  <Image
                    style={{
                      marginTop: 1,
                      marginLeft: 0,
                      height: 40,
                      width: 40,
                    }}
                    source={require("../../assets/logo/Service.png")}
                  />
                  <Text style={{ marginTop: 10, marginLeft: 0, height: 18 }}>
                    Service Needs
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Money Manager */}
              <TouchableOpacity
                onPress={() => navigation.navigate("MoneyManager")}
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
                    marginLeft: 10,
                    marginRight: 20,
                    marginBottom: 5,
                    borderRadius: 20,
                    borderWidth: 1.2,
                    borderColor: "#ddd",
                  }}
                >
                  <Image
                    style={{
                      marginTop: 1,
                      marginLeft: 0,
                      height: 40,
                      width: 40,
                    }}
                    source={require("../../assets/logo/Money.png")}
                  />
                  <Text style={{ marginTop: 12, marginLeft: 0, height: 18 }}>
                    Money Manager
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                height: 110,
                backgroundColor: "#fff",
                marginTop: 10,
              }}
            >
              {/* task Manager */}
              <TouchableOpacity
                onPress={() => navigation.navigate("TaskManager")}
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
                    borderColor: "#ddd",
                  }}
                >
                  <Image
                    style={{
                      marginTop: 0,
                      marginLeft: 0,
                      height: 40,
                      width: 40,
                    }}
                    source={require("../../assets/logo/Task.png")}
                  />
                  <Text style={{ marginTop: 12, marginLeft: 0, height: 18 }}>
                    Task Manager
                  </Text>
                </View>
              </TouchableOpacity>
              {/* contacts */}

              <TouchableOpacity onPress={() => navigation.navigate("Contacts")}>
                <View
                  style={{
                    backgroundColor: "#F8F8F8",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 100,
                    width: 150,
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 20,
                    marginBottom: 5,
                    borderRadius: 20,
                    borderWidth: 1.2,
                    borderColor: "#ddd",
                  }}
                >
                  <Image
                    style={{
                      marginTop: 1,
                      marginLeft: 0,
                      height: 40,
                      width: 40,
                    }}
                    source={require("../../assets/logo/Contact.png")}
                  />
                  <Text
                    style={{
                      marginTop: 1,
                      fontSize: 11,
                      marginLeft: 2,
                      justifyContent: "center",
                    }}
                  >
                    Contacts &{"\n"}Documents
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-around",
                height: 110,
                backgroundColor: "#fff",
              }}
            >
              {/* personal care */}
              <TouchableOpacity
                onPress={() => navigation.navigate("PersonalCare")}
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
                    borderColor: "#ddd",
                  }}
                >
                  <Image
                    style={{
                      marginTop: 1,
                      marginLeft: 0,
                      height: 40,
                      width: 40,
                    }}
                    source={require("../../assets/logo/Pesonal.png")}
                  />
                  <Text style={{ marginTop: 12, marginLeft: 0, height: 18 }}>
                    Personal Care
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Reminders */}
              <TouchableOpacity
                onPress={() => navigation.navigate("Reminders")}
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
                    marginLeft: 10,
                    marginRight: 20,
                    marginBottom: 5,
                    borderRadius: 20,
                    borderWidth: 1.2,
                    borderColor: "#ddd",
                  }}
                >
                  <Image
                    style={{
                      marginTop: 1,
                      marginLeft: 0,
                      height: 40,
                      width: 40,
                    }}
                    source={require("../../assets/logo/Reminder.png")}
                  />
                  <Text style={{ marginTop: 12, marginLeft: 0, height: 18 }}>
                    Reminders
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Homemain;

const styles = StyleSheet.create({});
