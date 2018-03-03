import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";
import aboutReducer from "./modules/about";
import scheduleReducer from "./modules/schedule";
import favesReducer from "./modules/faves";

export default combineReducers({
  navigation: NavigationReducer,
  about: aboutReducer,
  schedule: scheduleReducer,
  faves: favesReducer
});
