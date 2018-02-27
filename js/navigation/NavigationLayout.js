import React, { Component } from "react";
import Router from "./routes";
import { Image } from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

class NavigationLayout extends Component {
  render() {
    return (
      <TabNavigation id="main" navigatorUID="main" initialTab="about">
        <TabItem
          id="about"
          title="about"
          // renderIcon={isSelected => (
          //   <Image source={require("../assets/images/r10_logo.png")} />
          // )}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>

        {/* <TabItem
          id="profile"
          title="Profile"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => (
            <Image source={require("./assets/images/profile.png")} />
          )}
        >
          <StackNavigation
            id="profile"
            initialRoute={Router.getRoute("profile")}
          />
        </TabItem> */}
      </TabNavigation>
    );
  }
}

export default NavigationLayout;
