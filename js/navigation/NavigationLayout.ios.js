import React, { Component } from "react";
import Router from "./routes";
import { Text, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
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
    titleStyle: { fontFamily: typography.fontRegular },
    renderBackground: () => fancyLinearGradient() // https://github.com/expo/ex-navigation
  }
};

class NavigationLayout extends Component {
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="schedule"
        tabBarColor={"black"}
      >
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-calendar")}
        >
          <StackNavigation
            // id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
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
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-heart")}
        >
          <StackNavigation
            // id="about"
            initialRoute={Router.getRoute("faves")}
            navigatorUID="faves"
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation>
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
