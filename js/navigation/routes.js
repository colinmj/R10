import {
  createRouter,
  NavigationProvider,
  StackNavigation
} from "@expo/ex-navigation";
import About from "../scenes/About";
import NavigationLayout from "./NavigationLayout";
import Schedule from "../scenes/Schedule";

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule
}));

export default Router;
