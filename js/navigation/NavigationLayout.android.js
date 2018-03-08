import React, { Component } from "react";
import Router from "./routes";
import { Text, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import { colors, typography } from "../config/styles";

const { windowWidth } = Dimensions.get("window");

const fancyLinearGradient = () => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 1]}
      colors={["purple", "red"]}
      width={windowWidth}
      height={63}
    />
  );
};

const defaultRouteConfig = {
  navigationBar: {
    tintColor: "white", // colour of scene title and hamburger menu
    titleStyle: { fontFamily: typography.fontMain },
    renderBackground: () => fancyLinearGradient() // https://github.com/expo/ex-navigation
  }
};

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
          renderIcon={isSelected => this.renderIcon(isSelected, "md-calendar")}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="faves"
          title="Faves"
          renderTitle={isSelected => this.renderTitle(isSelected, "Faves")}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-heart")}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          title="About"
          renderTitle={isSelected => this.renderTitle(isSelected, "About")}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "md-information-circle")
          }
        >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute("about")}
            defaultRouteConfig={defaultRouteConfig}
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
          fontSize: 15,
          color: isSelected ? "purple" : "black",
          marginLeft: 10
        }}
      >
        {title}
      </Text>
    );
  }
  renderIcon(isSelected, iconName) {
    return (
      <Icon
        name={iconName}
        size={24}
        color={isSelected ? colors.purple : "gray"}
      />
    );
  }
}

export default NavigationLayout;
