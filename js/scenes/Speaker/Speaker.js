import React from "react";

// import propTypes from "prop-types";
import { Text, View, TouchableOpacity, Image, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { removeSpeaker } from "../../navigation/navigationHelpers";

const Speaker = ({ speakerData }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => removeSpeaker()}>
        <Icon active name="ios-close" color="black" size={40} />
      </TouchableOpacity>
      <View>
        <Image
          source={{ uri: speakerData.image }}
          style={{ height: 80, width: 80 }}
        />
        <Text> {speakerData.name} </Text>
        <Text> {speakerData.bio} </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL(speakerData.url)}
        >
          Read More on Wikipedia
        </Text>
      </View>
    </View>
  );
};

export default Speaker;
