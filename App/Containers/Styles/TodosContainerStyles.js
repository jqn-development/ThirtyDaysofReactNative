import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.ricePaper,
  },
  title: {
    fontSize: 70,
    color: Colors.snow,
    letterSpacing: 2,
    top: 180,
    left: 20,
  },
  day: {
    fontSize: 12,
    color: Colors.snow,
    textAlign: "right",
  },
  small: {
    fontSize: 16,
    color: Colors.snow,
  },
  list: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  listText: {
    fontSize: 16,
    color: Colors.charcoal,
  },
});
