import React, { Component } from "react";
import propTypes from "prop-types";
import { createFave, deleteFave } from "../../config/model";
import { styles } from "./styles";
import GradientButton from "../../components/GradientButton";
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
    this.state = {
      faved: false,
      status: ""
    };

    this.updateFaves = this.updateFaves.bind(this);
  }

  updateFaves() {
    const sessionId = this.props.list.item.session_id;
    this.props.dispatch(letsFetchSomeFaves());
    const faves = this.props.faves;

    if (faves[sessionId] === "true") {
      deleteFave(sessionId);
      this.setState({ status: "Add to ", faved: false });
    } else {
      createFave(sessionId);
      this.setState({ status: "Remove from ", faved: true });
    }
    this.props.dispatch(letsFetchSomeFaves());
  }

  componentDidMount() {
    const sessionId = this.props.list.item.session_id;
    const faves = this.props.faves;
    if (faves[sessionId] && faves[sessionId] === "true") {
      this.setState({ status: "Remove from ", faved: true });
    } else {
      this.setState({ status: "Add to ", faved: false });
    }
  }

  render() {
    const { list, name, faves } = this.props;

    console.log(this.props.faves[this.props.name.session]);
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
        <TouchableOpacity style={styles.button} onPress={this.updateFaves}>
          {/* <Text>{`${this.state.status} Favourites`}</Text> */}
          <GradientButton text={`${this.state.status} Favourites`} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  faves: state.faves.faves
});

export default connect(mapStateToProps)(Session);
