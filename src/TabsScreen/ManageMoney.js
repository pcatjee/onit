import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import PlusIcon from "react-native-vector-icons/AntDesign";
import RightIcon from "react-native-vector-icons/MaterialIcons";
import WorkIcon from "react-native-vector-icons/MaterialIcons";
import BuildingIcon from "react-native-vector-icons/FontAwesome5";
import FriendsIcon from "react-native-vector-icons/FontAwesome5";
import AddIcon from "react-native-vector-icons/AntDesign";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Money Manager */}
        <View style={styles.moneyManagerWrapper}>
          <Text style={styles.sectionTitle}>Manage Money</Text>
          <View style={styles.items}>
            <View style={styles.itemBox}>
              <Text
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                }}
              >
                You Owe
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  color: "#00796A",
                  fontWeight: "600",
                }}
              >
                ₹680
              </Text>
            </View>
            <View style={styles.itemBox}>
              <Text
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                }}
              >
                You are Owed
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  color: "#DD3131",
                  fontWeight: "600",
                }}
              >
                ₹200
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#F2BB13",
                width: "32%",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                  color: "white",
                }}
              >
                Balance
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                ₹480
              </Text>
            </View>
          </View>
          {/* Group  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Group
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#DFEBEA",
                borderRadius: 5,
                height: 30,
                width: 110,
                paddingHorizontal: 5,
              }}
            >
              <PlusIcon name="pluscircleo" size={20} color={"#00796A"} />
              <Text style={{ marginLeft: 5, color: "#00796A" }}>
                Create New
              </Text>
            </View>
          </View>

          {/* Group Items  */}
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginTop: 20,
                marginBottom: 1,
                backgroundColor: "white",
                height: 60,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <WorkIcon name="work" size={25} color={"#00796A"} />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                  }}
                >
                  Colleagues
                </Text>
              </View>
              <RightIcon
                name="keyboard-arrow-right"
                size={25}
                color={"black"}
              />
            </View>
          </TouchableOpacity>
          {/* Room mates  */}
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginBottom: 1,
                backgroundColor: "white",
                height: 60,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <BuildingIcon name="building" size={25} color={"#00796A"} />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                  }}
                >
                  Roommates
                </Text>
              </View>
              <RightIcon
                name="keyboard-arrow-right"
                size={25}
                color={"black"}
              />
            </View>
          </TouchableOpacity>
          {/* Friends  */}
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                backgroundColor: "white",
                height: 60,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FriendsIcon name="user-friends" size={25} color={"#00796A"} />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                  }}
                >
                  Friends
                </Text>
              </View>
              <RightIcon
                name="keyboard-arrow-right"
                size={25}
                color={"black"}
              />
            </View>
          </TouchableOpacity>

          {/* Friends  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Friends
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#DFEBEA",
                borderRadius: 5,
                height: 30,
                width: 125,
                paddingHorizontal: 5,
              }}
            >
              {/* <PlusIcon name="pluscircleo" size={20} color={"#00796A"} /> */}
              <AddIcon name="adduser" size={20} color={"#00796A"} />
              <Text
                style={{
                  marginLeft: 5,
                  color: "#00796A",
                }}
              >
                Invite a Friend
              </Text>
            </View>
          </View>

          {/* Friend list  */}
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  marginBottom: 1,
                  backgroundColor: "white",
                  height: 60,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {/* <BuildingIcon name="building" size={25} color={"#00796A"} /> */}
                  <Image
                    source={require("../../assets/image/naruto.png")}
                    style={{
                      resizeMode: "cover",
                      width: 30,
                      height: 30,
                      borderRadius: 4,
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                    }}
                  >
                    Nitin Maurya
                  </Text>
                </View>
                <RightIcon
                  name="keyboard-arrow-right"
                  size={25}
                  color={"black"}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  moneyManagerWrapper: {
    paddingTop: 20,
    paddingHorizontal: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    height: 70,
    marginHorizontal: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#00796A",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    color: "#fff",
    fontSize: 30,
  },
  itemBox: {
    backgroundColor: "white",
    width: "32%",
    borderRadius: 10,
  },
});
