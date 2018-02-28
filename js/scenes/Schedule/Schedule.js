import React from "react";
import { Text, View, SectionList } from "react-native";
import propTypes from "prop-types";
import moment from "moment";

const Schedule = ({ data }) => {
  console.log(data);
  return (
    <View>
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
    </View>
  );
};

export default Schedule;
