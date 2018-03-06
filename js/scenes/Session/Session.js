import React, { Component } from "react";
import propTypes from "prop-types";
import { createFave, deleteFave } from "../../config/model";
import { toggleFave } from "../../redux/modules/faves";
import { styles } from "./styles";
import GradientButton from "../../components/GradientButton";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import moment from "moment";
import { connect } from "react-redux";
import { goToSpeaker } from "../../navigation/navigationHelpers";
import { letsFetchSomeFaves } from "../../redux/modules/faves";

class Session extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, name, faves, toggleFave } = this.props;

    console.log(this.props.faves[this.props.name.session]);
    return (
      <View style={styles.container}>
        <View style={styles.heartContainer}>
          <Text style={styles.location}>{list.item.location}</Text>
          {!!Object.keys(faves).includes(list.item.session_id) ? (
            <Icon
              name="ios-heart"
              color="red"
              onPress={() =>
                toggleFave(
                  list.item.session_id,
                  !Object.keys(faves).includes(list.item.session_id)
                )
              }
            />
          ) : (
            <Icon
              name="ios-heart"
              color="gray"
              onPress={() =>
                toggleFave(
                  list.item.session_id,
                  !Object.keys(faves).includes(list.item.session_id)
                )
              }
            />
          )}
        </View>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            toggleFave(
              list.item.session_id,
              !Object.keys(faves).includes(list.item.session_id)
            )
          }
        >
          <GradientButton
            text={
              !!Object.keys(faves).includes(list.item.session_id)
                ? "Remove From Favourites"
                : "Add To Favourites "
            }
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleFave: (session_id, onOrOff) => {
    dispatch(toggleFave(session_id, onOrOff));
  }
});

const mapStateToProps = state => ({
  faves: state.faves.faves
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
