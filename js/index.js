import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import About from "./scenes/About";
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from "@expo/ex-navigation";
import Router from "./navigation/routes";
import { Provider } from "react-redux";
import Store from "./redux/store";
import NavigationLayout from "./navigation/NavigationLayout";

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation
            initialRoute={Router.getRoute("layout")}
            navigatorUID="root"
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
