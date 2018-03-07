import { StyleSheet } from "react-native";

import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#e6e6e6"
  },
  title: {
    fontSize: 25,
    fontFamily: "Montserrat-Light",
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    fontFamily: typography.fontMainLight,
    margin: 10
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 270
  }
});
