import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LeftCameraPanel = props => {
  return (
    <View style={[styles.container, styles.group]}>
      <Icon
        name="arrow-left"
        color="#FFF"
        onPress={this.loginWithFacebook}
        size={36}
      />
      <Icon
        name="flash"
        color="#FFF"
        onPress={this.loginWithFacebook}
        size={36}
      />
      <Icon
        name="white-balance-auto"
        color="#FFF"
        onPress={this.loginWithFacebook}
        size={36}
      />
      <Icon
        name="grid-large"
        color="#FFF"
        onPress={this.loginWithFacebook}
        size={36}
      />
      <Icon
        name="image"
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

export default LeftCameraPanel;
