import {
  createRouter,
  NavigationProvider,
  StackNavigation
} from "@expo/ex-navigation";
import About from "../scenes/About";
import NavigationLayout from "./NavigationLayout";
import Schedule from "../scenes/Schedule";
import Session from "../scenes/Session";
import Speaker from "../scenes/Speaker";

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
  session: () => Session,
  speaker: () => Speaker
}));

export default Router;
