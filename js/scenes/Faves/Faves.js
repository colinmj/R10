import React from "react";
import moment from "moment";
import propTypes from "prop-types";
import { Text, View } from "react-native";

const Faves = ({ faves, sessionData }) => {
  // console.log(faves);
  // console.log(sessionData);

  const theseFaves = sessionData.filter(
    session => faves[session.session_id] === "true"
  );
  // console.log(theseFaves.map(fave => fave.location));

  return (
    <View>
      {theseFaves.map((fave, index) => {
        return (
          <View key={index}>
            <Text>{moment.unix(fave.start_time).format("LT")}</Text>
            <Text>{fave.title}</Text>
            <Text>{fave.location}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Faves;
