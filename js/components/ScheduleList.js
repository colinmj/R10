import React from "react";
import propTypes from "prop-types";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import moment from "moment";
import { goToSession } from "../navigation/navigationHelpers";

const ScheduleList = ({ data }) => {
  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        // <View>
        <TouchableHighlight onPress={() => goToSession("schedule", { item })}>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
        </TouchableHighlight>
        // </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text>{moment.unix(section.title).format("LT")}</Text>
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ScheduleList;
