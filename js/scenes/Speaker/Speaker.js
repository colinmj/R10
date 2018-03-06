import React from "react";

// import propTypes from "prop-types";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { removeSpeaker } from "../../navigation/navigationHelpers";
import { styles } from "./styles";
import GradientButton from "../../components/GradientButton";

const Speaker = ({ speakerData }) => {
  return (
    <ScrollView>
      <View style={styles.blackContainer}>
        <View style={styles.speaker}>
          <View>
            <TouchableOpacity onPress={() => removeSpeaker()}>
              <Icon active name="ios-close" color="white" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.aboutSpeakerContainer}>
            <Text style={styles.aboutSpeakerText}>About The Speaker</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: speakerData.image }} style={styles.image} />
            <Text style={styles.name}> {speakerData.name} </Text>
          </View>
          <Text style={styles.mainBody}> {speakerData.bio} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(speakerData.url)}
          >
            <GradientButton text={"Read More On Wikipedia"} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Speaker;
