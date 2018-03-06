import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";
import { typography } from "../../config/styles";

const fontMain = typography.fontMain;
const fontMainLight = typography.fontMainLight;

export const styles = StyleSheet.create({
  location: {
    fontFamily: fontMainLight,
    color: colors.mediumGrey,
    paddingBottom: 10
  },
  time: {
    color: "red",
    fontFamily: fontMain,
    paddingBottom: 10
  },
  eventTitle: {
    fontFamily: fontMain,
    fontSize: 25,
    paddingBottom: 10
  },
  mainBody: {
    fontFamily: fontMainLight,
    paddingBottom: 10,
    lineHeight: 20
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50
  },
  presenter: {
    fontFamily: fontMain
  },

  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    height: 40,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20
  }
});
