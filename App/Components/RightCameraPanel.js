import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const RightCameraPanel = props => {
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
    top: 0,
    right: 0,
    height: "100%",
    // backgroundColor: "#161616",
    zIndex: 100,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  group: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default RightCameraPanel;
