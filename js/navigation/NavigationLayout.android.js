import React, { Component } from "react";
import Router from "./routes";
import { Text } from "react-native";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import { colors, typography } from "../config/styles";

class NavigationLayout extends Component {
  render() {
    return (
      <DrawerNavigation
        id="main"
        navigatorUID="main"
        initialItem="about"
        tintColor={"black"}
      >
        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          renderTitle={isSelected => this.renderTitle(isSelected, "Schedule")}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="faves"
          title="Faves"
          renderTitle={isSelected => this.renderTitle(isSelected, "Faves")}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          title="About"
          renderTitle={isSelected => this.renderTitle(isSelected, "About")}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-information-circle")
          }
        >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute("about")}
            navigatorUID="about"
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
  renderTitle(isSelected, title) {
    return (
      <Text
        style={{
          // fontFamily: typography.fontMain,
          fontSize: 10,
          color: isSelected ? "pink" : "black"
        }}
      >
        {console.log("blahblah")}
        {title}
      </Text>
    );
  }
  renderIcon(isSelected, iconName) {
    return (
      <Icon name={iconName} size={24} color={isSelected ? "white" : "gray"} />
    );
  }
}

export default NavigationLayout;
