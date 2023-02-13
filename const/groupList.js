import WorkIcon from "react-native-vector-icons/MaterialIcons";
import BuildingIcon from "react-native-vector-icons/FontAwesome5";
import FriendsIcon from "react-native-vector-icons/FontAwesome5";

const groupList = [
  {
    id: 1,
    name: "Colleagues",
    icon: <WorkIcon name="work" size={25} color={"#00796A"} />,
  },
  {
    id: 2,
    name: "Room mates",
    icon: <BuildingIcon name="building" size={25} color={"#00796A"} />,
  },
  {
    id: 3,
    name: "Friends",
    icon: <FriendsIcon name="user-friends" size={25} color={"#00796A"} />,
  },
];

export default groupList;
