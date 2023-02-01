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
} from "react-native";
//import Main from "../../utils/components/main";
import { Calendar } from "react-native-calendars";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Reminders</Text>
      <Calendar
        style={{ height: "45%" }}
        enableSwipeMonths
        minDate="2022-01-01"
        maxDate="2042-01-01"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
  },
});
