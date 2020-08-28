import page from "./pageReducer";
import settings from "./settingsReducer";
import {combineReducers} from "redux";

export default combineReducers({
    page,
    settings
})