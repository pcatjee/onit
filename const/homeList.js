//This can be replaced by service list coming from API later
const homeList = [
  {
    id: 1,
    name: "Home Needs",
    img: require("../assets/logo/Service.png"),
    isDefault: true,
    screen: "ServiceNeeds",
  },
  {
    id: 2,
    name: "Money Manager",
    img: require("../assets/logo/Money.png"),
    isDefault: false,
    screen: "MoneyManager",
  },
  {
    id: 3,
    name: "Task Manager",
    img: require("../assets/logo/Task.png"),
    isDefault: false,
    screen: "TaskManager",
  },
  {
    id: 4,
    name: "Contacts & Documents",
    img: require("../assets/logo/Contact.png"),
    isDefault: false,
    screen: "Contacts",
  },
  {
    id: 5,
    name: "Personal Care",
    img: require("../assets/logo/Pesonal.png"),
    isDefault: false,
    screen: "PersonalCare",
  },
  {
    id: 6,
    name: "Reminders",
    img: require("../assets/logo/Reminder.png"),
    isDefault: false,
    screen: "Reminders",
  },
];

export default homeList;
