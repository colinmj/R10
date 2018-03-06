import React from "react";
import { Text } from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { colors, typography } from "../config/styles";

const GradientButton = ({ text }) => (
  <LinearGradient
    start={{ x: 0.0, y: 1.0 }}
    end={{ x: 1.0, y: 0.0 }}
    height={50}
    // locations={[0, 0.5, 0.6]}
    colors={[colors.red, colors.purple]}
    // height={1}
    style={{
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 25
    }}
  >
    <Text
      style={{
        color: colors.white,
        fontFamily: typography.fontMain,
        fontSize: 15,
        textAlign: "center"
      }}
    >
      {text}
    </Text>
  </LinearGradient>
);

export default GradientButton;
