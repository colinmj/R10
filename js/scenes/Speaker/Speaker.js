import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { removeSpeaker } from "../../navigation/navigationHelpers";

const Speaker = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => removeSpeaker()}>
        <Icon active name="ios-close" color="black" size={40} />
      </TouchableOpacity>
      <Text> Speakers </Text>
    </View>
  );
};

export default Speaker;
