import React, { useState } from "react";
import {
  SafeAreaView,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Color,
  Image,
  TextInput,
  ImageRequireSource,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Wallet = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          height: 60,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Homem");
          }}
        >
          <Image
            source={require("../../assets/logo/back.png")}
            style={{
              height: 26,
              width: 27,
              alignItems: "center",
              marginLeft: 10,
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 120,
            fontSize: 19,
            fontWeight: "600",
          }}
        >
          Wallet
        </Text>
      </View>

      {/* for refer your friend */}
      <View
        style={{
          flexDirection: "row",
          height: 105,
          backgroundColor: "#00796A",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "#fff",
            marginTop: 14,
            marginLeft: 14,
          }}
        >
          Refer Your Friends{"\n"}
          and Earn{"\n"}
          <Text
            style={{
              fontSize: 15,
              Color: "#fff",
              fontWeight: "400",
              marginTop: 10,
            }}
          >
            They get ₹100,You get ₹100
          </Text>
        </Text>
        <Image
          source={require("../../assets/logo/wallet.png")}
          style={{
            height: 55,
            width: 57,
            alignItems: "center",
            marginLeft: 4,
            marginTop: 25,
            marginLeft: 100,
            marginRight: 20,
          }}
        />
      </View>

      {/* for wallet dashboard */}
      <View
        style={{
          flexDirection: "row",
          height: 140,
          backgroundColor: "#F8F8F8",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            marginTop: 15,
          }}
        >
          <Image
            source={require("../../assets/logo/twallet.png")}
            style={{
              height: 55,
              width: 57,
              //alignItems: "center",
              marginLeft: 20,
              marginTop: 30,
              marginLeft: 10,
              marginRight: 20,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: "black",
              marginLeft: -5,
              marginTop: 40,
            }}
          >
            Wallet Balance{"\n"}
            ₹1000
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginLeft: 30,
            marginTop: 27,
            marginRight: 10,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                height: 40,
                width: 110,
                backgroundColor: "#00796A",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Recharge
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 40,
                width: 110,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0066FF",
                marginTop: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Wallet
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* for Bonus Section */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          height: 60,
          //marginTop: 15,
          //marginLeft: 20,
          //marginRight: 20,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: "#fff",
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
            fontWeight: "500",
            fontSize: 16,
            color: "black",
            marginLeft: 20,
          }}
        >
          Bonus Amount
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            marginRight: 5,
          }}
        >
          ₹5000
        </Text>
      </View>

      {/* for Refund Amount */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          height: 60,
          //marginTop: 15,
          //marginLeft: 20,
          //marginRight: 20,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: "#fff",
        }}
      >
        <Image
          source={require("../../assets/logo/refund.png")}
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
            fontWeight: "500",
            fontSize: 16,
            color: "black",
            marginLeft: 20,
          }}
        >
          Refund Amount
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            marginRight: 5,
          }}
        >
          ₹5000
        </Text>
      </View>

      {/* for Refer Earning */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          height: 60,
          //marginTop: 15,
          //marginLeft: 20,
          //marginRight: 20,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: "#fff",
        }}
      >
        <Image
          source={require("../../assets/logo/refer.png")}
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
            fontWeight: "500",
            fontSize: 16,
            color: "black",
            marginLeft: 20,
          }}
        >
          Refer Earning
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            marginRight: 5,
          }}
        >
          ₹5000
        </Text>
      </View>

      {/* for Transaction */}
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          //flex: 1,
          marginTop: 15,
          height: 60,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          borderRadius: 2,
          borderColor: "#00000029",
        }}
      >
        <Image
          source={require("../../assets/logo/trans.png")}
          style={{
            height: 28,
            width: 25,
            alignItems: "center",
            marginLeft: 20,
            marginTop: 20,
          }}
        />
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          Transactions
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            height: 35,
            marginTop: 0,
            //marginLeft: 20,
            //marginRight: 20,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/upi.png")}
            style={{
              height: 24,
              width: 30,
              alignItems: "center",
              marginLeft: 18,
              marginTop: 3,
            }}
          />
          <Text
            style={{
              flex: 0.9,
              fontWeight: "500",
              fontSize: 16,
              color: "black",
              marginLeft: 19,
              marginTop: 3,
            }}
          >
            recieved from roushan
          </Text>
          <Text
            style={{
              color: "green",
              fontSize: 16,
              marginRight: 5,
            }}
          >
            + ₹5000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            height: 35,
            marginTop: 0,
            //marginLeft: 20,
            //marginRight: 20,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/upi.png")}
            style={{
              height: 24,
              width: 30,
              alignItems: "center",
              marginLeft: 18,
              marginTop: 3,
            }}
          />
          <Text
            style={{
              flex: 0.9,
              fontWeight: "500",
              fontSize: 16,
              color: "black",
              marginLeft: 19,
              marginTop: 3,
            }}
          >
            recieved from roushan
          </Text>
          <Text
            style={{
              color: "green",
              fontSize: 16,
              marginRight: 5,
            }}
          >
            + ₹5000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            height: 35,
            marginTop: 0,
            //marginLeft: 20,
            //marginRight: 20,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/upi.png")}
            style={{
              height: 24,
              width: 30,
              alignItems: "center",
              marginLeft: 18,
              marginTop: 3,
            }}
          />
          <Text
            style={{
              flex: 0.9,
              fontWeight: "500",
              fontSize: 16,
              color: "black",
              marginLeft: 19,
              marginTop: 3,
            }}
          >
            recieved from roushan
          </Text>
          <Text
            style={{
              color: "green",
              fontSize: 16,
              marginRight: 5,
            }}
          >
            + ₹5000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            height: 35,
            marginTop: 0,
            //marginLeft: 20,
            //marginRight: 20,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/upi.png")}
            style={{
              height: 24,
              width: 30,
              alignItems: "center",
              marginLeft: 18,
              marginTop: 3,
            }}
          />
          <Text
            style={{
              flex: 0.9,
              fontWeight: "500",
              fontSize: 16,
              color: "black",
              marginLeft: 19,
              marginTop: 3,
            }}
          >
            recieved from roushan
          </Text>
          <Text
            style={{
              color: "green",
              fontSize: 16,
              marginRight: 5,
            }}
          >
            + ₹5000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            height: 35,
            marginTop: 0,
            //marginLeft: 20,
            //marginRight: 20,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/upi.png")}
            style={{
              height: 24,
              width: 30,
              alignItems: "center",
              marginLeft: 18,
              marginTop: 3,
            }}
          />
          <Text
            style={{
              flex: 0.9,
              fontWeight: "500",
              fontSize: 16,
              color: "black",
              marginLeft: 19,
              marginTop: 3,
            }}
          >
            recieved from roushan
          </Text>
          <Text
            style={{
              color: "green",
              fontSize: 16,
              marginRight: 5,
            }}
          >
            + ₹5000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            height: 35,
            marginTop: 0,
            //marginLeft: 20,
            //marginRight: 20,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/logo/upi.png")}
            style={{
              height: 24,
              width: 30,
              alignItems: "center",
              marginLeft: 18,
              marginTop: 3,
            }}
          />
          <Text
            style={{
              flex: 0.9,
              fontWeight: "500",
              fontSize: 16,
              color: "black",
              marginLeft: 19,
              marginTop: 3,
            }}
          >
            recieved from roushan
          </Text>
          <Text
            style={{
              color: "green",
              fontSize: 16,
              marginRight: 5,
            }}
          >
            + ₹5000
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Wallet;

const style = StyleSheet.create({});
