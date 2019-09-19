import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../Themes/";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.coal,
  },
  contentContainer: {
    marginVertical: Metrics.section,
    backgroundColor: Colors.silver,
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
