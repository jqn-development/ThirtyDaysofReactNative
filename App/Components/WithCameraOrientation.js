import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import BottomCameraPanel from "./BottomCameraPanel";
import TopCameraPanel from "./TopCameraPanel";
import RightCameraPanel from "./RightCameraPanel";
import LeftCameraPanel from "./LeftCameraPanel";

const WithCameraOrientation = Comp => ({
  isLoading,
  isPortrait,
  isLandscape,
  children,
  ...props
}) => {
  console.log("portrait", isPortrait);
  if (isLoading) {
    return (
      <View style={[styles.container, styles.centeredContent]}>
        <ActivityIndicator size="small" color="#000" />
      </View>
    );
  } else if (isPortrait) {
    return (
      <Comp {...props}>
        <View style={styles.container}>
          <TopCameraPanel />
          {children}
          <BottomCameraPanel />
        </View>
      </Comp>
    );
  } else if (isLandscape) {
    return (
      <Comp {...props}>
        <View style={styles.container}>
          <RightCameraPanel />
          {children}
          <LeftCameraPanel />
        </View>
      </Comp>
    );
  }
};

const styles = StyleSheet.create({
  centeredContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
});

export default WithCameraOrientation;
