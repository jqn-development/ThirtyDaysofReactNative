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
    color: "#fff",
    letterSpacing: 2,
    top: 180,
    left: 20,
  },
  day: {
    fontSize: 12,
    color: "#fff",
    textAlign: "right",
  },
  small: {
    fontSize: 16,
    color: "#fff",
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
