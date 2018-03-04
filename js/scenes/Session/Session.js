import React, { Component } from "react";
import propTypes from "prop-types";
import { createFave, deleteFave } from "../../config/model";
import { styles } from "./styles";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import moment from "moment";
import { goToSpeaker } from "../../navigation/navigationHelpers";

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToFave: true,
      removeFromFave: false
    };

    this.renderAddToFave = this.renderAddToFave.bind(this);
    this.renderRemoveFave = this.renderRemoveFave.bind(this);
  }

  renderAddToFave() {
    createFave(this.props.list.item.session_id);
    this.setState({
      addToFave: !this.state.addToFave,
      removeFromFave: !this.state.addToFave
    });
  }

  renderRemoveFave() {
    deleteFave(this.props.list.item.session_id);
    this.setState({
      removeFromFave: !this.state.removeFromFave
    });
  }

  render() {
    const { list, name, faves } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.location}>{list.item.location}</Text>
        <Text style={styles.eventTitle}>{list.item.title}</Text>
        <Text style={styles.time}>
          {moment.unix(list.item.start_time).format("LT")}
        </Text>
        <Text style={styles.mainBody}>{list.item.description}</Text>
        <TouchableHighlight onPress={() => goToSpeaker(name)}>
          <View>
            <Text style={styles.location}>Presented by:</Text>
            <Image source={{ uri: name.image }} style={styles.image} />
            <Text style={styles.presenter}> {name.name}</Text>
          </View>
        </TouchableHighlight>

        {faves[name.session] === undefined && (
          <TouchableOpacity
            onPress={this.renderAddToFave}
            style={styles.button}
          >
            <Text>Add To Faves</Text>
          </TouchableOpacity>
        )}

        {faves[name.session] && (
          <TouchableOpacity
            onPress={this.renderRemoveFave}
            style={styles.button}
          >
            <Text>Remove From Faves</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default Session;
