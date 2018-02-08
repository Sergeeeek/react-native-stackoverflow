import { combineReducers } from "redux";
import authReducer from "../screens/Auth/reducer";
import questionsReducer from "../screens/StackOverflowPage/reducer";

export default combineReducers({
    login: authReducer,
    questions: questionsReducer,
});