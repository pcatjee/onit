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
  FlatList,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import "react-native";
import { IonFs } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useState } from "react";
import HomeScreen from "../../utils/components/slider";
import LocationDetail from "../../utils/components/LocationDetail";
import serviceList from "../../const/serviceList";

const { height, width } = Dimensions.get("window");

const ServiceNeeds = ({ navigation }) => {
  // const Images = [

  // ]
  const [text, onChangeText] = useState("");
  const extraction = serviceList.filter((curElem) => {
    return curElem.name.toLowerCase().includes(text.toLowerCase());
  });
  const Card = ({ services }) => {
    return (
      <TouchableOpacity
        style={
          services.isTrending === true
            ? styles.buttonTrendingService
            : styles.button
        }
        onPress={() => {
          navigation.navigate("Services", services);
        }}
      >
        <Image
          style={{
            height: 45,
            width: 45,
          }}
          source={services.img}
        />
        <Text style={{ marginTop: 5 }}>{services.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#00796A" }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#00796A"
      />

      <View
        style={{
          // flex: 2,
          height: 110,
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
          <LocationDetail color={"#fff"} />

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
            onChangeText={onChangeText}
            placeholder="Search for a service"
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
          flex: 11,
          marginTop: 5,
          backgroundColor: "#fff",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          shadowColor: "#00000014",
          shadowRadius: 20,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            fontSize: 22,
            fontWeight: "700",
            marginLeft: 16,
            marginTop: 15,
          }}
        >
          How can we help you today?
        </Text>

        <Text
          style={{
            justifyContent: "center",
            fontSize: 19,
            fontWeight: "700",
            marginLeft: 16,
            marginTop: 15,
          }}
        >
          Recommended Services:
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#fff",
            width: "93%",
            height: 139.5,
            marginLeft: 16,
            marginTop: 15,
            borderRadius: 5,
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

        {/* For services  */}

        <FlatList
          columnWrapperStyle={{ justifyContent: "center" }}
          numColumns={3}
          data={extraction}
          renderItem={({ item }) => {
            return <Card services={item} />;
          }}
          keyExtractor={(item) => item.id}
        />

        {/* ======================== */}

        {/* <ScrollView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  navigation.navigate("AcService");
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginLeft: 30,
                    height: 45,
                    width: 40,
                  }}
                  source={require("../../assets/logo/ac.png")}
                />
                <Text style={{ marginTop: 5, marginLeft: 15, height: 20 }}>
                  AC Service
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  navigation.navigate("Beauty");
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginLeft: 30,
                    height: 45,
                    width: 40,
                  }}
                  source={require("../../assets/logo/beauty.png")}
                />
                <Text style={{ marginTop: 5, marginLeft: 30, height: 20 }}>
                  Beauty
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  navigation.navigate("HomeCare");
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginLeft: 30,
                    height: 45,
                    width: 40,
                  }}
                  source={require("../../assets/logo/homecare.png")}
                />
                <Text style={{ marginTop: 5, marginLeft: 20, height: 20 }}>
                  Homecare
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.button0}
                onPress={() => navigation.navigate("Plumber")}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginLeft: 30,
                    height: 45,
                    width: 40,
                  }}
                  source={require("../../assets/logo/plmber.png")}
                />
                <Text style={{ marginTop: 5, marginLeft: 23, height: 20 }}>
                  Plumber
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  navigation.navigate("Appliance");
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginLeft: 30,
                    height: 45,
                    width: 40,
                  }}
                  source={require("../../assets/logo/ap.png")}
                />
                <Text style={{ marginTop: 5, marginLeft: 20, height: 20 }}>
                  Appliance
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  navigation.navigate("Electronics");
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginLeft: 30,
                    height: 45,
                    width: 40,
                  }}
                  source={require("../../assets/logo/elc.png")}
                />
                <Text style={{ marginTop: 5, marginLeft: 20, height: 20 }}>
                  Electronics
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  navigation.navigate("Computer");
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginLeft: 30,
                    height: 45,
                    width: 40,
                  }}
                  source={require("../../assets/logo/pc.png")}
                />
                <Text style={{ marginTop: 5, marginLeft: 18, height: 20 }}>
                  Computer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  navigation.navigate("HealthCare");
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginLeft: 30,
                    height: 45,
                    width: 40,
                  }}
                  source={require("../../assets/logo/hc.png")}
                />
                <Text style={{ marginTop: 5, marginLeft: 18, height: 20 }}>
                  Health care
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  navigation.navigate("Vehicles");
                }}
              >
                <Image
                  style={{
                    marginTop: 20,
                    marginLeft: 30,
                    height: 45,
                    width: 40,
                  }}
                  source={require("../../assets/logo/vec.png")}
                />
                <Text style={{ marginTop: 5, marginLeft: 25, height: 20 }}>
                  Vehicles
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView> */}
      </View>
    </View>
  );
};

export default ServiceNeeds;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    //justifyContent: 'center',
    marginLeft: 0,
    marginTop: 10,
    height: 102,
    width: "93%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 0,
    height: 102,
    width: 102,
    margin: 5,
    marginBottom: 3,
    borderWidth: 1.2,
    borderColor: "#ddd",
  },
  buttonTrendingService: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 0,
    height: 102,
    width: 102,
    margin: 5,
    marginBottom: 3,
    borderWidth: 1.2,
    borderColor: "#FFBB00",
  },
});
