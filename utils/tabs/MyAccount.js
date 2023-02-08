import React, { useState } from "react";
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
  PermissionsAndroid,
} from "react-native";
import { BottomSheet } from "react-native-btr";
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import CloseIcon from "react-native-vector-icons/AntDesign";
import LocationIcon from "react-native-vector-icons/MaterialIcons";
import HomeIcon from "react-native-vector-icons/SimpleLineIcons";
import PlusIcon from "react-native-vector-icons/Entypo";
import RecentIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SearchIcon from "react-native-vector-icons/AntDesign";
import MicIcon from "react-native-vector-icons/Feather";
import CameraIcon from "react-native-vector-icons/Entypo";
import GalleryIcon from "react-native-vector-icons/Entypo";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ImagePicker from "react-native-image-picker";

const MyAccount = ({ navigation }) => {
  const [avatarSource, setAvatarSource] = useState(null);
  const [imageUri, setImageUri] = useState("../../assets/image/profile.png");
  const [galleryPhoto, setGalleryPhoto] = useState();
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  const toggleProfileImage = () => {
    setVisible1(!visible1);
  };

  // const openCamera = () => {
  //   const options = {
  //     storageOptions: {
  //       path: "images",
  //       mediaType: "photo",
  //     },
  //     includeBase64: true,
  //   };
  //   launchCamera(options, (response) => {
  //     console.log("Response=", response);
  //     if (response.didCancel) {
  //       console.log("User cancelled image picker");
  //     } else if (response.error) {
  //       console.log("ImagePicker Error", response.error);
  //     } else if (response.customBottom) {
  //       console.log("User tapped custom button:" + response.customButton);
  //     } else {
  //       const source = { uri: "data:image/jpeg;base64," + response.base64 };
  //       setImageUri(source);
  //     }
  //   });
  // };
  let options = {
    saveToPhotos: true,
    mediaType: "photo",
  };
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // const result = await launchCamera(options);
      // setImageUri(result.assets[0].uri);
      try {
        const result = await launchCamera(options);
        setImageUri(result.assets[0].uri);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
  };
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
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              alignItems: "flex-end",
              // marginTop: 5,
              marginLeft: 120,
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

            <Icon1
              style={{
                marginLeft: 100,
              }}
              name="pencil-outline"
              size={20}
              color={"white"}
            />
          </View>

          <TouchableOpacity onPress={toggleProfileImage}>
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
            <Image
              style={{
                width: 30,
                height: 30,
                marginLeft: 60,
                marginTop: -30,
                color: "white",
              }}
              source={require("../../assets/image/camera1.png")}
            />
            {/* <Icon
              style={{
                marginLeft: 50,
                marginTop: -30,
                borderColor: "white",
                borderWidth: 6,

                borderRadius: 30,
              }}
              name="camera"
              size={25}
              color={"#00796A"} */}
          </TouchableOpacity>
        </View>

        {/* for Booking */}
        <TouchableOpacity onPress={() => navigation.navigate("MyBookings")}>
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

        {/* for Manage Address */}
        <TouchableOpacity onPress={toggleBottomNavigationView}>
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
              marginTop: 120,
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

      {/* BottomSheet  */}
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 550,
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginLeft: 16,
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "600" }}>
              Search Location
            </Text>
            <TouchableOpacity onPress={toggleBottomNavigationView}>
              <CloseIcon
                name="close"
                size={30}
                color={"black"}
                style={{ marginHorizontal: "45%" }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 16,
            }}
          >
            <SearchIcon name="search1" size={25} color={"black"} />

            <TextInput
              style={{
                fontWeight: "500",
                fontSize: 18,
                marginLeft: 5,
                width: "80%",
                padding: 11,
                letterSpacing: 0,
                borderColor: "#ddd",
                borderWidth: 1,
                borderRadius: 5,
              }}
              placeholder="Search Your Location"
            />
            <MicIcon name="mic" size={25} color={"black"} />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginLeft: 16,
            }}
          >
            <LocationIcon name="my-location" size={20} color={"black"} />
            <Text style={{ fontSize: 18, color: "#0066FF", marginLeft: 6 }}>
              Use Current Location
            </Text>
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 19, fontWeight: "600" }}>
              Saved Location
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginLeft: 16,
              marginTop: 15,
            }}
          >
            <HomeIcon name="home" size={30} color={"black"} />
            <View>
              <Text style={{ fontSize: 18, marginLeft: 6 }}>Home</Text>
              <Text style={{ fontSize: 18, marginLeft: 6, color: "#ddd" }}>
                Delivery to Home (E-36) Block 32, Noida 90
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-start",
              marginLeft: 16,
              marginTop: 17,
            }}
          >
            <PlusIcon name="plus" size={25} color={"#0066FF"} />
            <Text style={{ fontSize: 18, color: "#0066FF", marginLeft: 6 }}>
              Add Address
            </Text>
          </View>

          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 19, fontWeight: "600" }}>
              Recent Location
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginLeft: 16,
              marginTop: 14,
            }}
          >
            <RecentIcon
              name="clock-time-four-outline"
              size={25}
              color={"black"}
            />
            <Text style={{ fontSize: 19, marginLeft: 6 }}>
              Delivery to Home (E-36A) Block 32-22 Ambdekar Camp
            </Text>
          </View>
        </View>
      </BottomSheet>

      {/* BottomSheet for profile picture  */}
      <BottomSheet
        visible={visible1}
        onBackButtonPress={toggleProfileImage}
        onBackdropPress={toggleProfileImage}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 150,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              marginLeft: 30,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 8 }}>
              Profile photo
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
              }}
            >
              <TouchableOpacity onPress={() => openCamera()}>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <CameraIcon name="camera" size={30} color={"#00796A"} />
                  <Text style={{ fontSize: 16 }}>Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={openGallery}>
                <View
                  style={{
                    alignItems: "center",
                    marginLeft: 40,
                  }}
                >
                  <GalleryIcon name="image" size={30} color={"#00796A"} />
                  <Text style={{ fontSize: 16 }}>Gallery</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default MyAccount;

const style = StyleSheet.create({});
