import React, { Component } from "react";
import propTypes from "prop-types";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import moment from "moment";
import { goToSession } from "../navigation/navigationHelpers";
import { styles } from "./styles";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { letsFetchSomeFaves } from "../redux/modules/faves";

class ScheduleList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(letsFetchSomeFaves());
  }

  render() {
    console.log(this.props.faves);
    return (
      <SectionList
        sections={this.props.data}
        renderItem={({ item }) => (
          // <View>
          <TouchableHighlight onPress={() => goToSession("schedule", { item })}>
            <View style={styles.event}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <View style={styles.heartAndLocationView}>
                <Text style={styles.location}>{item.location}</Text>
                {this.props.faves[item.session_id] === "true" ? (
                  <Icon
                    name="ios-heart"
                    color="red"
                    style={{ marginRight: 10 }}
                  />
                ) : null}
              </View>
            </View>
          </TouchableHighlight>
          // </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.time}>
            {moment.unix(section.title).format("LT")}
          </Text>
        )}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const mapStateToProps = state => ({
  faves: state.faves.faves
});

export default connect(mapStateToProps)(ScheduleList);
