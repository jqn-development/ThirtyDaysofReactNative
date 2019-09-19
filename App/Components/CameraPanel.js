import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import styles from "./Styles/CameraPanelStyles";

import { RNCamera } from "react-native-camera";

import WithCameraOrientation from "../Components/WithCameraOrientation";

const ViewWithOrientation = WithCameraOrientation(View);

export default class CameraPanel extends Component {
  constructor() {
    super();
    this.state = {
      panelOrientation: "PORTRAIT",
      width: "100%",
      height: 281.25,
    };
  }

  _onLayout = e => {
    console.log("e", e.nativeEvent);
    if (e.nativeEvent.layout.width > e.nativeEvent.layout.height) {
      this.setState({
        panelOrientation: "LANDSCAPE",
        width: 500.25,
        height: "100%",
      });
    } else {
      this.setState({
        panelOrientation: "PORTRAIT",
        width: "100%",
        height: 281.25,
      });
    }
  };

  render() {
    return (
      <ViewWithOrientation
        style={styles.container}
        isLoading={false}
        isPortrait={this.state.panelOrientation === "PORTRAIT" ? true : false}
        isLandscape={this.state.panelOrientation === "LANDSCAPE" ? true : false}
        onLayout={e => this._onLayout(e)}
      >
        <View style={styles.centeredContent}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{ width: this.state.width, height: this.state.height }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: "Permission to use camera",
              message: "We need your permission to use your camera",
              buttonPositive: "Ok",
              buttonNegative: "Cancel",
            }}
            androidRecordAudioPermissionOptions={{
              title: "Permission to use audio recording",
              message: "We need your permission to use your audio",
              buttonPositive: "Ok",
              buttonNegative: "Cancel",
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
        </View>
      </ViewWithOrientation>
    );
  }
}
