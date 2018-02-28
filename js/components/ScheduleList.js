import React from "react";
import propTypes from "prop-types";
import { Text, View, SectionList } from "react-native";
import moment from "moment";

const ScheduleList = ({ data }) => {
  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text>{moment.unix(section.title).format("LT")}</Text>
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ScheduleList;
