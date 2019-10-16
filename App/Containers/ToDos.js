import React, { Component } from "react";
import { FlatList, View, Text, StatusBar } from "react-native";

import styles from "./Styles/TodosContainerStyles";
import { Colors } from "../Themes";

import PropTypes from "prop-types";
import moment from "moment";
import { ListItem, Icon, Header, ButtonGroup } from "react-native-elements";
import { material } from "react-native-typography";

const component1 = () => (
  <Icon
    name="clock"
    type="material-community"
    color={Colors.charcoal}
    size={35}
    onPress={() => console.log("hello")}
  />
);

const component2 = () => (
  <Icon
    name="chart-areaspline"
    type="material-community"
    color={Colors.charcoal}
    size={35}
    onPress={() => console.log("hello")}
  />
);

const component3 = () => (
  <Icon
    name="ios-add"
    type="ionicon"
    color={Colors.charcoal}
    size={35}
    onPress={() => console.log("hello")}
  />
);

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      currentDate: new Date(),
      markedDate: moment(new Date()).format("YYYY-MM-DD"),
      currentMonth: moment().format("MMMM"),
      selectedIndex: 2,
    };
  }

  _renderItem = ({ item }) => (
    <ListItem
      leftIcon={{ name: "dot-single", type: "entypo" }}
      title={item.value}
      titleStyle={material.subheading}
    />
  );

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    const buttons = [
      { element: component1 },
      { element: component2 },
      { element: component3 },
    ];
    if (this.state.hasError) {
      return (
        <View style={styles.TodosWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="default" />
        <Header
          leftComponent={{
            text: this.state.currentMonth,
            style: material.display1,
          }}
          backgroundColor="#FFF"
          centerComponent={{
            text: "TO DOS",
            style: material.title,
          }}
          placement="right"
          containerStyle={{ marginTop: 8, marginBottom: 0 }}
        />
        <ButtonGroup
          onPress={index => this.updateIndex(index)}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          selectedButtonStyle={{ backgroundColor: Colors.steel }}
          containerBorderRadius={0}
          containerStyle={{
            marginRight: 1,
            marginLeft: 1,
            marginTop: 0,
            marginBottom: 8,
            borderTopColor: Colors.cloud,
            borderBottomColor: Colors.cloud,
            borderRightColor: Colors.cloud,
            borderLeftColor: Colors.cloud,
          }}
          innerBorderStyle={{ color: Colors.cloud }}
        />
        <View style={styles.list}>
          <FlatList
            data={[
              { key: "a", value: "Journal" },
              { key: "b", value: "Shower" },
              { key: "c", value: "Super Brain" },
              { key: "d", value: "Have breakfast" },
              { key: "e", value: "HITT workout" },
              { key: "f", value: "Brush Teeth" },
            ]}
            renderItem={({ item }) => this._renderItem({ item })}
          />
        </View>
      </View>
    );
  }
}

Todos.propTypes = {
  // bla: PropTypes.string,
};

Todos.defaultProps = {
  // bla: 'test',
};

export default Todos;
