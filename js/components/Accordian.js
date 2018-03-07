import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Platform,
  UIManager
} from "react-native";
import { styles } from "./styles";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this._onPress = this._onPress.bind(this);
  }
  _onPress() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    console.log(this.props);
    const { title, description } = this.props;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <Animated.Text style={styles.codeConductTitle}>
          {this.state.opened ? "- " : "+ "}
          {title}
        </Animated.Text>
        {this.state.opened && <Text>{description}</Text>}
      </TouchableOpacity>
    );
  }
}

export default Accordian;
