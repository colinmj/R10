import React from "react";
import propTypes from "prop-types";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import moment from "moment";
import { goToSession } from "../navigation/navigationHelpers";
import { styles } from "./styles";

const ScheduleList = ({ data }) => {
  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        // <View>
        <TouchableHighlight onPress={() => goToSession("schedule", { item })}>
          <View style={styles.event}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
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
};

export default ScheduleList;
