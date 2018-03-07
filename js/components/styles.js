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
  },
  eventTitle: {
    fontFamily: fontMain
  },
  codeConductTitle: {
    color: "#9963ea",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 15
  },
  heartAndLocationView: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
