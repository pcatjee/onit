import React from "react";
import { View, Text } from "react-native";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signup, Login, Home, Message } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createRef } from "react";
import "react-native-gesture-handler";
import MyAccount from "./utils/tabs/MyAccount";
import Newtask from "./utils/tabs/Newtask";
import Wallet from "./utils/tabs/Wallet";
import Homemain from "./src/screens/Homemain";
import Homem from "./src/screens/Homem";
import TaskManager from "./src/screens/TaskManager";
import MoneyManager from "./src/screens/MoneyManager";
import ServiceNeeds from "./src/screens/ServiceNeeds";
import Contacts from "./src/screens/Contacts";
import PersonalCare from "./src/screens/PersonalCare";
import Reminders from "./src/screens/Reminders";
import Plumber from "./src/screens/Plumber";
import Reminder from "./src/TabsScreen/Reminder";
import Task from "./src/TabsScreen/Task";
import ContactsTab from "./src/TabsScreen/ContactsTab";
import Documents from "./src/TabsScreen/Documents";
import Appointments from "./src/TabsScreen/Appointments";
import Payments from "./src/TabsScreen/Payments";
import Subscriptions from "./src/TabsScreen/Subscription";
import Payment from "./src/screens/Payment";
import AcService from "./src/Services Screen/AcService";
import Appliance from "./src/Services Screen/Appliance";
import Beauty from "./src/Services Screen/Beauty";
import Computer from "./src/Services Screen/Computer";
import Electronics from "./src/Services Screen/Electronics";
import HealthCare from "./src/Services Screen/HealthCare";
import HomeCare from "./src/Services Screen/HomeCare";
import Vehicles from "./src/Services Screen/Vehicles";
import All from "./utils/Message/All";
import Friends from "./utils/Message/Friends";
import Technician from "./utils/Message/Technician";
import Otp from "./backend/otp";
import SuccessFull from "./src/screens/successfull";
import Locations from "./location";
import Services from "./src/Services Screen/Services";
import MyBookings from "./src/screens/MyBookings";
import TechnicianContacts from "./src/TabsScreen/TechnicianContacts";
import Daily from "./src/TabsScreen/Daily";
import Weekly from "./src/TabsScreen/Weekly";
import Monthly from "./src/TabsScreen/Monthly";
import TechnicianComponent from "./src/TabsScreen/TechnicianComponent";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer ref={createRef()}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Otp" component={Otp} /> */}
        {/* <Stack.Screen name="Signup" component={Signup} /> */}

        <Stack.Screen name="Homem" component={Homem} />
        <Stack.Screen name="MyBookings" component={MyBookings} />

        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Newtask" component={Newtask} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Homemain" component={Homemain} />
        <Stack.Screen name="TaskManager" component={TaskManager} />
        <Stack.Screen name="MoneyManager" component={MoneyManager} />
        <Stack.Screen name="ServiceNeeds" component={ServiceNeeds} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="PersonalCare" component={PersonalCare} />
        <Stack.Screen name="Reminders" component={Reminders} />
        <Stack.Screen name="Plumber" component={Plumber} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Reminder" component={Reminder} />
        <Stack.Screen name="ContactsTab" component={ContactsTab} />
        <Stack.Screen name="Documents" component={Documents} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="Subscriptions" component={Subscriptions} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="AcService" component={AcService} />
        <Stack.Screen name="Appliance" component={Appliance} />
        <Stack.Screen name="Beauty" component={Beauty} />
        <Stack.Screen name="Computer" component={Computer} />
        <Stack.Screen name="Electronics" component={Electronics} />
        <Stack.Screen name="HealthCare" component={HealthCare} />
        <Stack.Screen name="HomeCare" component={HomeCare} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="All" component={All} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Technician" component={Technician} />
        <Stack.Screen name="SuccessFull" component={SuccessFull} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen
          name="TechnicianComponent"
          component={TechnicianComponent}
        />

        <Stack.Screen
          name="TechnicianContacts"
          component={TechnicianContacts}
        />

        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="Monthly" component={Monthly} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
