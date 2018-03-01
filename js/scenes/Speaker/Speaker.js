import React from "react";
// import propTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { removeSpeaker } from "../../navigation/navigationHelpers";

const Speaker = ({ speakerData }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => removeSpeaker()}>
        <Icon active name="ios-close" color="black" size={40} />
      </TouchableOpacity>
      <View>
        <Text> {speakerData.name} </Text>
        <Text> {speakerData.bio} </Text>
      </View>
    </View>
  );
};

export default Speaker;
