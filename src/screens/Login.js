import React, { useContext } from "react";
import { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  ImageRequireSource,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Pressable,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-native-phone-number-input";
import "react-native";
import { AuthContext } from "../../utils/components/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const { width, height } = Dimensions.get("window");

export default function Login({ navigation, route }) {
  const mobileNumber = route?.params?.mobileNumber;
  const [visible, setVisible] = useState(false);
  const phoneInput = useRef(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  React.useEffect(() => {
    detectlogin();
  }, []);
  const detectlogin = () => {
    if (mobileNumber == 1) {
      navigation.navigate("Homem");
    } else {
      ToastAndroid.show("wellcome", ToastAndroid.SHORT);
    }
  };

  const onsubmit = async ({ mobile_number }) => {
    setVisible(true);
    let payload = {
      country_code: "+" + phoneInput.current?.getCallingCode(),
      mobile_number,
    };
    console.log(payload);
    try {
      await axios({
        method: "post",
        url: "https://api.onit.services/center/sent-otp",
        data: payload,
        confif: {
          headers: {
            "Content-Type": "application/json",
          },
        },
      }).then(() => {
        setVisible(false);
        ToastAndroid.show("OTP sent", ToastAndroid.SHORT);
        navigation.navigate("Otp", { data: payload });
      });
    } catch (error) {
      setVisible(false);
      ToastAndroid.show(
        error?.response?.data?.message + "!",
        ToastAndroid.SHORT
      );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#fff" />

      <View
        style={{ flex: 2, flexDirection: "column", backgroundColor: "#fff" }}
      >
        <ImageBackground
          source={require("../../assets/image/login.png")}
          style={{
            flex: 1,
            backgroundColor: "#fff",
            resizeMode: "cover",
            marginBottom: 0,
          }}
        />

        {/* <Text style={{ fontSize: 35, fontWeight: 'bold', paddingLeft: 20 }}>Sign Up!</Text> */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Services and More...
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              color: "#636363",
              marginTop: 7,
            }}
          >
            Your complete personal assistant.
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          //borderWidth: 0.5,
          borderColor: "#ddd",
          marginTop: 30,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 44,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            fontSize: 24,
            fontWeight: "900",
            marginLeft: 110,
            marginTop: 20,
          }}
        >
          Everything OniT
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <PhoneInput
                ref={phoneInput}
                value={(value = mobileNumber || value)}
                defaultCode="IN"
                onChangeText={(text) => {
                  onChange(text);
                }}
                withDarkTheme
                withShadow
                containerStyle={{
                  borderWidth: 1,
                  borderColor: "#00796A",
                  color: "#000",
                  borderRadius: 4,
                  // fontFamily: "poppins-semibold",
                  fontSize: 14,
                  width: "90%",
                  height: 60,
                }}
                textInputProps={onBlur}
              />
            )}
            name="mobile_number"
            defaultValue={mobileNumber || ""}
            rules={{
              required: true,
              pattern: {
                value: /^[0-9]*$/,
                message: "Enter valid phone number!",
              },
            }}
          />
          {errors.mobile_number?.type === "pattern" && (
            <Text
              style={{
                color: "red",
                marginTop: 2,
                alignSelf: "flex-start",
                marginLeft: 20,
              }}
            >
              Enter a valid mobile number!
            </Text>
          )}
          {errors.mobile_number?.type === "required" && (
            <Text
              style={{
                color: "red",
                marginTop: 2,
                alignSelf: "flex-start",
                marginLeft: 20,
              }}
            >
              Mobile number is required!
            </Text>
          )}
          <TouchableOpacity
            onPress={handleSubmit(onsubmit)}
            style={{
              width: "90%",
              marginTop: 20,
              backgroundColor: "#00796A",
              justifyContent: "center",
              marginVertical: 8,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
                paddingVertical: 14,
              }}
            >
              LogIn
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//export default Login;

const style = StyleSheet.create({});
