import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";
import aboutReducer from "./modules/about";

export default combineReducers({
  navigation: NavigationReducer,
  about: aboutReducer
});
