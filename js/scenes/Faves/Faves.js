import React from "react";
import moment from "moment";
import propTypes from "prop-types";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Faves = ({ faves, sessionData }) => {
  const theseFaves = sessionData.filter(
    session => faves[session.session_id] === "true"
  );

  return (
    <View>
      {theseFaves.map((fave, index) => {
        return (
          <View key={index} style={styles.event}>
            <Text style={styles.time}>
              {moment.unix(fave.start_time).format("LT")}
            </Text>
            <View>
              <Text style={styles.eventTitle}>{fave.title}</Text>
              <Text style={styles.location}>{fave.location}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Faves;
