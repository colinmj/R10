import React from "react";
import propTypes from "prop-types";
import { Text, View } from "react-native";
import moment from "moment";

const Session = ({ list, name }) => {
  return (
    <View>
      <Text>{list.item.location}</Text>
      <Text>{list.item.title}</Text>
      <Text>{moment.unix(list.item.start_time).format("LT")}</Text>
      <Text>{list.item.description}</Text>
      <Text> {name}</Text>
    </View>
  );
};

export default Session;
