import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import PlusIcon from "../../assets/image/plusIcon.png";
import FolderIcon from "../../assets/image/folder.png";
import DeleteFolder from "../../assets/image/delete.png";
import Close from "../../assets/image/close.png";
import { useNavigation } from "@react-navigation/native";
import TechnicianCategoryList from "../../const/TechnicianCategoryList";

let ContactsTab = function ({ props }) {
  let folderArray = [
    {
      title: "Plumber",
      numberOfContacts: "0",
    },
    {
      title: "Painter",
      numberOfContacts: "0",
    },
    {
      title: "Technician",
      numberOfContacts: "0",
    },
    {
      title: "Carpentar",
      numberOfContacts: "0",
    },
  ];
  const [folder, setFolder] = React.useState(folderArray);
  const [folderName, setFolderName] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const navigation = useNavigation();

  const createFolder = function (title) {
    let clone = [...folder];
    let data = {
      title,
      numberOfContacts: "0",
    };
    clone.push(data);
    setFolderName(data);
    setFolder(clone);
    setModal(modal ? false : true);
  };
  const deleteFolder = function (key) {
    let cloneArray = [...folder];
    cloneArray.splice(key, 1);
    setFolder(cloneArray);
  };

  const openModal = function () {
    setModal(modal ? false : true);
  };
  const moveToContactDetail = function () {
    props.navigation.navigate("ServiceNeeds");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>All Contacts</Text>
      {folder.map((val, key) => {
        return (
          <TouchableOpacity
            key={key}
            // onPress={() => navigation.navigate("TechnicianContacts", val)}
            onPress={() => navigation.navigate("TechnicianComponent", val)}
          >
            <View style={styles.folderBox}>
              <Text style={styles.folderText}>{val.title}</Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    padding: 4,
                    margin: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 4,
                    backgroundColor: "#00796A",
                    fontWeight: "bold",
                  }}
                >
                  <Text style={{ color: "white" }}>{val.numberOfContacts}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    padding: 6,
                    margin: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 4,
                    backgroundColor: "#00796A",
                  }}
                  onPress={() => deleteFolder(key)}
                >
                  <Image
                    style={{ width: 15, height: 20 }}
                    source={DeleteFolder}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}

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
            <View style={styles.modalHeaderSection}>
              <View style={styles.modalHeaderSectionTop}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                height: 40,
                marginTop: 20,
              }}
            >
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFolderName(text)}
                value={folderName}
                placeholder="Folder Name"
              />
            </View>

            <TouchableOpacity
              onPress={() => createFolder(folderName)}
              style={styles.button}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenHeader: {
    fontSize: 23,
    fontWeight: "bold",
    padding: 4,
    margin: 10,
  },
  folderText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 4,
    margin: 10,
  },
  folderBox: {
    backgroundColor: "white",
    padding: 4,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: "#f4f4f4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showConnectBox: {},

  icon: {
    marginHorizontal: 10,
    width: 25,
    height: 25,
  },

  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  writeTaskWrapper: {
    right: 25,
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    alignItems: "center",
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
  modalContainer: {
    height: "30%",
    width: "100%",
    // backgroundColor: "white",
    alignItems: "center",
    position: "absolute",
    // marginHorizontal: 20,
    bottom: 0,
  },
  modalUpperSection: {
    backgroundColor: "green",
  },

  modalHeaderSection: {
    padding: 2,
    marginTop: 20,
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  modalHeaderSectionTop: {
    flexDirection: "row",
    width: "95%",
    // marginRight: 50,
    // alignItems: "center",
    justifyContent: "space-between",
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
  input: {
    width: "100%",
    padding: 4,
    // backgroundColor: "#ebf4f3",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    width: "90%",
    padding: 6,
    borderRadius: 4,
    // marginHorizontal: 20,
    backgroundColor: "#00796A",
  },
});

export default ContactsTab;
