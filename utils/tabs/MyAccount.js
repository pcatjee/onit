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
  Alert,
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
import DeleteIcon1 from "react-native-vector-icons/MaterialIcons";

import LinkedInIcon from "react-native-vector-icons/Foundation";
import TwitterIcon from "react-native-vector-icons/AntDesign";
import FacebookIcon from "react-native-vector-icons/AntDesign";

import * as ImagePicker from "expo-image-picker";

const MyAccount = ({ navigation }) => {
  const [avatarSource, setAvatarSource] = useState(null);
  const [imageUri, setImageUri] = useState("../../assets/image/profile.png");
  const [galleryPhoto, setGalleryPhoto] = useState();
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [image, setImage] = useState(null);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  const toggleProfileImage = () => {
    setVisible1(!visible1);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    toggleProfileImage();
  };
  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    toggleProfileImage();
  };
  const confirmDeletion = () => {
    setImage(null);
    toggleProfileImage();
  };
  // code show alert
  const showAlert = () => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to remove profile photo?",
      [
        {
          text: "Cancel",
          onPress: () => toggleProfileImage(),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => confirmDeletion() },
      ],
      { cancelable: false }
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
      }}
    >
      <StatusBar backgroundColor="#00796A" />
      {/* Image Header   */}
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
          {image === null ? (
            <Image
              source={require("../../assets/image/profile.png")}
              // source={require("../../assets/image/profile.png") || { uri: image }}
              style={{
                height: 90,
                width: 90,
                marginTop: 10,
                marginLeft: 2,
                borderRadius: 60,
              }}
            />
          ) : (
            <Image
              source={{ uri: image }}
              style={{
                height: 90,
                width: 90,
                marginTop: 10,
                marginLeft: 2,
                borderRadius: 60,
              }}
            />
          )}

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
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
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
      </View>
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
            // marginTop: 120,
            marginBottom: 50,
            marginLeft: 10,
            borderRadius: 3,
          }}
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
      {/* for Social Icons  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 100,
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View style={style.circularProfileBox}>
          <LinkedInIcon name="social-linkedin" size={25} color={"#00796A"} />
        </View>
        <View style={style.circularProfileBox}>
          <TwitterIcon name="twitter" size={25} color={"#00796A"} />
        </View>
        <View style={style.circularProfileBox}>
          <FacebookIcon name="facebook-square" size={25} color={"#00796A"} />
        </View>
      </View>

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
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
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
                  // style={{ marginHorizontal: "45%" }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <SearchIcon name="search1" size={25} color={"black"} />

              <TextInput
                style={{
                  flex: 1,
                  fontWeight: "500",
                  fontSize: 18,
                  width: "100%",
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
            {/* location selector  */}
            <View
              style={{
                // flex: 1,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <LocationIcon name="my-location" size={20} color={"black"} />
              <Text style={{ fontSize: 18, color: "#0066FF", marginLeft: 10 }}>
                Use Current Location
              </Text>
            </View>

            {/* Saved location  */}
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Text style={{ fontSize: 19, fontWeight: "600" }}>
                Saved Location
              </Text>
            </View>

            {/* Home icon and address  */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <HomeIcon name="home" size={30} color={"black"} />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 18 }}>Home</Text>
                <Text
                  numberOfLines={3}
                  style={{
                    fontSize: 18,
                    color: "grey",
                    marginRight: 20,
                  }}
                >
                  Delivery to Home (E-36) Block 32, Noida 90
                </Text>
              </View>
            </View>
            {/* add address  */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <PlusIcon name="plus" size={25} color={"#0066FF"} />
              <Text style={{ fontSize: 18, color: "#0066FF", marginLeft: 6 }}>
                Add Address
              </Text>
            </View>

            <Text style={{ fontSize: 19, fontWeight: "600", marginTop: 20 }}>
              Recent Location
            </Text>
            {/* recent locations  */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
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
            flexDirection: "row",
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
              {/* camera option to upload  */}
              <TouchableOpacity onPress={takePicture}>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <CameraIcon name="camera" size={30} color={"#00796A"} />
                  <Text style={{ fontSize: 16 }}>Camera</Text>
                </View>
              </TouchableOpacity>
              {/* open gallery option to upload  */}
              <TouchableOpacity onPress={pickImage}>
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
          {image && (
            <TouchableOpacity onPress={showAlert}>
              <DeleteIcon1
                name="delete"
                size={30}
                color={"#00796A"}
                style={{
                  marginRight: 10,
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </BottomSheet>
    </View>
  );
};

export default MyAccount;

const style = StyleSheet.create({
  circularProfileBox: {
    backgroundColor: "#CCE4E1",
    width: 50,
    height: 50,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
