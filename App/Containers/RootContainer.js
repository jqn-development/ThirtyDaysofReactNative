import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import ReduxNavigation from "../Navigation/ReduxNavigation";
import { connect } from "react-redux";
import StartupActions from "../Redux/StartupRedux";
import ReduxPersist from "../Config/ReduxPersist";
import { getStorybookUI, configure } from "@storybook/react-native";

// Styles
import styles from "./Styles/RootContainerStyles";

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
});

// export default connect(
//   null,
//   mapDispatchToProps,
// )(RootContainer);

/**
 * Setup Storybook. It would probably be a fantastic idea to not do this when not in dev.
 * That is an exercise for the consumer though
 */
configure(() => {
  require("../Components/Stories");
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

export default console.tron.storybookSwitcher(StorybookUIHMRRoot)(
  console.tron.overlay(
    connect(
      null,
      mapDispatchToProps,
    )(RootContainer),
  ),
);
