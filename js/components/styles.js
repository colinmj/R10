import { StyleSheet } from "react-native";
import { colors } from "../config/styles";
import { typography } from "../config/styles";

const fontMain = typography.fontMain;
const fontMainLight = typography.fontMainLight;

export const styles = StyleSheet.create({
  time: {
    backgroundColor: colors.lightGrey,
    fontFamily: fontMain,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4
  },
  event: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4
  },
  location: {
    color: colors.mediumGrey,
    fontFamily: fontMainLight,
    paddingTop: 5
  }
});
