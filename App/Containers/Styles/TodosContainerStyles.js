import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";

export default StyleSheet.create({
  buttonContainer: {
    borderBottomColor: Colors.cloud,
    borderLeftColor: Colors.cloud,
    borderRightColor: Colors.cloud,
    borderTopColor: Colors.cloud,
    marginBottom: 8,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 0,
  },
  container: {
    backgroundColor: Colors.ricePaper,
    flex: 1,
    position: "relative",
  },
  headerContainer: { marginBottom: 0, marginTop: 8 },
  list: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
});
