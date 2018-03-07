import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import Accordian from "../../components/Accordian";

const About = ({ data, loading }) => {
  console.log(data);
  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator size={"large"} color={"#9963ea"} />
    </View>
  ) : (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Image
            style={{ marginBottom: 10 }}
            source={require("../../assets/images/r10_logo.png")}
          />
        </View>
        <Text
          style={{
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
            marginBottom: 10
          }}
        >
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
        <Text style={styles.title}>Date & Time</Text>
        <Text
          style={{
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
            marginBottom: 10
          }}
        >
          The R10 conference will take place on June 27, 2017, in Vancouver B.C.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>
        {data.map((item, i) => {
          return (
            <Accordian
              title={item.title}
              description={item.description}
              key={i}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default About;
