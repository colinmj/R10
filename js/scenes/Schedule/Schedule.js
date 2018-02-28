import React from "react";
import { Text, View, SectionList } from "react-native";
import propTypes from "prop-types";
import ScheduleList from "../../components/ScheduleList";

const Schedule = ({ data }) => {
  console.log(data);
  return (
    <View>
      <ScheduleList data={data} />
    </View>
  );
};

export default Schedule;
