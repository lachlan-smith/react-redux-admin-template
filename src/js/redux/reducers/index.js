import { combineReducers } from "redux";
import theme from "./theme";
import menu from "./menu";
import sidebar from "./sidebar";

export default combineReducers({
  theme,
  menu,
  sidebar
});