import { combineReducers } from "redux";
import LoginReducer from "./common/reducer/loginReducer";


const RootReducer = combineReducers({
loginReducer: LoginReducer
});

export default RootReducer;