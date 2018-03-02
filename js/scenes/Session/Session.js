import React from "react";
import propTypes from "prop-types";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from "react-native";
import moment from "moment";
import { goToSpeaker } from "../../navigation/navigationHelpers";

const Session = ({ list, name }) => {
  return (
    <View>
      <Text>{list.item.location}</Text>
      <Text>{list.item.title}</Text>
      <Text>{moment.unix(list.item.start_time).format("LT")}</Text>
      <Text>{list.item.description}</Text>
      <TouchableHighlight onPress={() => goToSpeaker(name)}>
        <View>
          <Text>Presented by:</Text>
          <Image
            source={{ uri: name.image }}
            style={{ height: 50, width: 50 }}
          />
          <Text> {name.name}</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity>
        <Text>Add To Faves</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
