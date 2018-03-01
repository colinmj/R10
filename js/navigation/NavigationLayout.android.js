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
        initialItem="schedule"
        tabBarColor={"black"}
      >
        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            // id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-information-circle")
          }
        >
          <StackNavigation
            // id="about"
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
          color: isSelected ? "white" : "gray"
        }}
      >
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
