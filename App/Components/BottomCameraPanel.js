import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { height, width } = Dimensions.get("window");
const BottomCameraPanel = props => {
  return (
    <View style={[styles.container, styles.group]}>
      <Icon
        name="magnify"
        color="#FFF"
        onPress={this.loginWithFacebook}
        size={36}
      />
      <Icon
        name="camera-iris"
        color="#FFF"
        onPress={this.loginWithFacebook}
        size={48}
      />
      <Icon
        name="arrow-right"
        color="#FFF"
        onPress={this.loginWithFacebook}
        size={36}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    // backgroundColor: "#161616",
    zIndex: 100,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BottomCameraPanel;
