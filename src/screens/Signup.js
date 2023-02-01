import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  ImageRequireSource,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PhoneInput from "react-native-phone-number-input";
import "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);

  const usernameHandler = (text) => {
    setUsername(text);
  };

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const phoneInput = React.useRef(null);

  // const OnPress = () => {

  //     console.log("Cancel Pressed");

  // }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.grey,
      }}
    >
      <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#fff" />

      <View
        style={{
          flex: 2,
          flexDirection: "column",
          backgroundColor: "#fff",
        }}
      >
        <ImageBackground
          source={require("../../assets/image/signup.png")}
          style={{
            flex: 1,
            backgroundColor: "#fff",
            resizeMode: "cover",
          }}
        />
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            paddingLeft: 20,
          }}
        >
          Sign Up!
        </Text>
      </View>

      <View
        style={{
          flex: 2.7,
          backgroundColor: "#fff",
        }}
      >
        {/* // Enter full name- */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            width: "95%",
            height: 60,
            marginTop: 40,
            marginLeft: 10,
            borderWidth: 1.5,
            borderColor: "#ddd",
            borderRadius: 3,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontWeight: "700",
              fontSize: 19,
              color: "black",
              marginLeft: 14,
            }}
            placeholder="Enter Full Name"
            underlineColorAndroid="transparent"
            onChangeText={usernameHandler}
          />
        </View>

        {/* // Enter Email */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            width: "95%",
            height: 60,
            marginTop: 10,
            marginLeft: 10,
            borderWidth: 1.5,
            borderColor: "#ddd",
            borderRadius: 3,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontWeight: "700",
              fontSize: 19,
              color: "black",
              marginLeft: 14,
            }}
            placeholder="Enter Email ID"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        {/* // Phone Number-                */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            containerStyle={{
              width: "95%",
              height: 60,
              marginTop: 10,
              borderWidth: 1.5,
              borderColor: "#ddd",
              borderRadius: 3,
            }}
            textContainerStyle={{
              paddingVertical: 0,
              backgroundColor: "#fff",
            }}
            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
            }}
            defaultCode="IN"
            layout="first"
            withShadow
            autoFocus
          />
        </View>
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
          //</View>onPress={() => { console.log("coming soon") }}>
          onPress={() => setIsSubmit(true)}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 18,
              letterSpacing: 1.5,
              textAlign: "center",
              position: "relative",
              color: "#fff",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            width: "98%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "black",
              alignSelf: "center",
              marginTop: 30,
            }}
          >
            Already have an account?
          </Text>
          <View>
            <Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    color: "#00796A",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginTop: 30,
                    marginLeft: 5,
                    textDecorationLine: "underline",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const style = StyleSheet.create({
  input: {
    position: "relative",
    height: "100%",
    width: "100",
    paddingLeft: 20,
  },
});
