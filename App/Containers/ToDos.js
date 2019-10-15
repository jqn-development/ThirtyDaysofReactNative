import React, { PureComponent } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

import styles from "./Styles/TodosContainerStyles";
import { Colors } from "../Themes";

import PropTypes from "prop-types";
import moment from "moment";
import { ListItem, Button, Icon, Header } from "react-native-elements";

class Todos extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      currentDate: new Date(),
      markedDate: moment(new Date()).format("YYYY-MM-DD"),
      currentMonth: moment().format("MMMM"),
    };
  }

  componentDidMount = () => {
    console.log("Todos mounted");
  };

  // static getDerivedStateFromError(error) {
  //   // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  // getDerivedStateFromProps = (nextProps, prevState) => {
  //   console.log("Todos getDerivedStateFromProps", nextProps, prevState);
  // };

  // getSnapshotBeforeUpdate = (prevProps, prevState) => {
  //   console.log("Todos getSnapshotBeforeUpdate", prevProps, prevState);
  // };

  componentDidUpdate = () => {
    console.log("Todos did update");
  };

  componentWillUnmount = () => {
    console.log("Todos will unmount");
  };

  renderItem = ({ item }) => (
    <ListItem
      leftIcon={{ name: "dot-single", type: "entypo" }}
      title={item.value}
    />
  );

  render() {
    const today = this.state.currentDate;
    const day = moment(today).format("dddd");
    const date = moment(today).format("MMMM D, YYYY");
    if (this.state.hasError) {
      return (
        <View style={styles.TodosWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{
            text: this.state.currentMonth,
            style: {
              color: Colors.charcoal,
              fontSize: 34,
              // fontWeight: "bold",
              fontFamily: "System",
            },
          }}
          backgroundColor="#FFF"
          centerComponent={{
            text: "TO DOS",
            style: { color: Colors.panther, fontSize: 16 },
          }}
          placement="right"
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
            // renderItem={({ item }) => (
            //   <Text style={styles.listText}>{item.value}</Text>
            // )}
            renderItem={this.renderItem}
          />
        </View>
        {/* <Text style={styles.title}>Portfolio</Text>
        <View style={styles.content}>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.small}>{date}</Text>
        </View> */}
        {/* <TouchableOpacity
          style={styles.circle}
          onPress={() => this.props.navigation.navigate("News")}
        >
          <Icon raised name="send" color="#000" size={60} />
        </TouchableOpacity> */}
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
