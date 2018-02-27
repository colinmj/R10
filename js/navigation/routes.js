import {
  createRouter,
  NavigationProvider,
  StackNavigation
} from "@expo/ex-navigation";
import About from "../scenes/About";
import NavigationLayout from "./NavigationLayout";

const Router = createRouter(() => ({
  about: () => About,
  layout: () => NavigationLayout
}));

export default Router;
