import React from "react";
import propTypes from "prop-types";
import { Text, View, TouchableHighlight } from "react-native";
import moment from "moment";
import { goToSpeaker } from "../../navigation/navigationHelpers";

const Session = ({ list, name }) => {
  return (
    <View>
      <Text>{list.item.location}</Text>
      <Text>{list.item.title}</Text>
      <Text>{moment.unix(list.item.start_time).format("LT")}</Text>
      <Text>{list.item.description}</Text>
      <TouchableHighlight onPress={() => goToSpeaker("speaker", { name })}>
        <View>
          <Text> {name}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Session;
