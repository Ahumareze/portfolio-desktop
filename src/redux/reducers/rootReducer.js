import { combineReducers } from "redux";

//reducers
import desktopReducer from "./desktopReducer";

const rootReducer = combineReducers({
    desktopReducer: desktopReducer
});

export default rootReducer;