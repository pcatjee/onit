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
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { color } from "react-native-reanimated";
const { height, width } = Dimensions.get("window");
import TelephoneIcon from "react-native-vector-icons/Foundation";
import samplePlumberList from "../../const/samplePlumberList";
import PlusIcon from "../../assets/image/plusIcon.png";
import EditIcon from "react-native-vector-icons/Entypo";
import FolderIcon from "../../assets/image/folder.png";
import Close from "../../assets/image/close.png";
import DeleteIcon from "react-native-vector-icons/MaterialCommunityIcons";

const TechnicianTab = () => {
  // const [text, onChangeText] = useState("");

  // const extraction = samplePlumberList.filter((curElem) => {
  //   return curElem.name.toLowerCase().includes(text.toLowerCase());
  // });
  const [folderName, setFolderName] = React.useState("");
  const [modal, setModal] = React.useState(false);

  const Card = ({ technicianListing }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          height: 80,
          marginTop: 1,
          borderWidth: 0.55,
          borderBottomColor: "#F3F4F9",
          borderTopColor: "#fff",
          borderLeftColor: "#fff",
          borderRightColor: "#fff",
        }}
      >
        <Image
          source={technicianListing.img}
          style={{
            height: 50,
            width: 50,
            alignItems: "center",
            marginLeft: 5,
            borderRadius: 50,
            borderWidth: 1,
            // borderColor: "green",
          }}
        />
        <Text
          style={{
            flex: 0.9,
            fontWeight: "700",
            fontSize: 16,
            color: "black",
            marginLeft: 15,
            //marginTop: -6,
          }}
        >
          {technicianListing.name}
          {"\n"}
          <Text
            style={{
              flex: 0.9,
              fontWeight: "700",
              fontSize: 13,
              color: "#1B2D1B",
              marginLeft: 15,
            }}
          >
            {technicianListing.contactNumber}
          </Text>
        </Text>
        {/* Edit button  */}
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#CCE4E1",
              height: 30,
              width: 30,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <TelephoneIcon name="telephone" size={20} color={"#00796A"} /> */}
            <EditIcon name="edit" size={20} color={"#00796A"} />
          </View>
        </TouchableOpacity>
        {/* Delete button  */}
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#CCE4E1",
              height: 30,
              width: 30,
              borderRadius: 7,
              marginLeft: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DeleteIcon name="delete-forever" size={25} color={"#DD2C2B"} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 30,
          marginLeft: 20,
          marginBottom: 15,
          alignContent: "center",
        }}
      >
        Plumber
      </Text>

      {/* <ScrollView>
        
      </ScrollView> */}
      <FlatList
        data={samplePlumberList}
        renderItem={({ item }) => {
          return <Card technicianListing={item} />;
        }}
        keyExtractor={(item) => item.id}
      />

      {/* Modal and plus icon  */}

      {!modal ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TouchableOpacity onPress={() => setModal(modal ? false : true)}>
            <View style={styles.addWrapper}>
              <Image style={styles.icon} source={PlusIcon} />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      ) : (
        <Modal animationType="slide" transparent={true} visible={modal}>
          <View style={styles.modalContainer}>
            <View>
              <View style={styles.modalHeaderSection}>
                <View style={styles.modalHeaderSectionTop}>
                  <Image style={styles.icon} source={FolderIcon} />
                  <Text style={styles.modalHeaderText}>
                    Create New Phonebook
                  </Text>
                </View>

                <TouchableOpacity onPress={() => setModal(false)}>
                  <Image style={styles.icon} source={Close} />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFolderName(text)}
                value={folderName}
                placeholder="Folder Name"
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => createFolder(folderName)}
                style={styles.button}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* <TouchableOpacity>
        <View style={styles.addWrapper}>
          <Image style={styles.icon} source={PlusIcon} />
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default TechnicianTab;

const styles = StyleSheet.create({
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
  modalContainer: {
    height: "30%",
    width: "100%",
    backgroundColor: "white",
    // alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  modalUpperSection: {
    display: "flex",
    backgroundColor: "green",
  },

  modalHeaderSection: {
    padding: 2,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalHeaderSectionTop: {
    display: "flex",
    flexDirection: "row",
    marginRight: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  modalHeaderText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  writeTaskWrapper: {
    right: 25,
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
    width: 25,
    height: 25,
  },
});
