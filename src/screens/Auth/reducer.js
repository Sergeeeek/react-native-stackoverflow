import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from "./actions";

export const LOGIN_STATE_NOT_LOGGED_IN = 0;
export const LOGIN_STATE_LOGGED_IN = 1;

const initialState = {
    loginState: LOGIN_STATE_NOT_LOGGED_IN,
};

export default reduce = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                loginState: LOGIN_STATE_LOGGED_IN,
                username: action.payload,
            };
        case LOGOUT_SUCCESS:
            return initialState;
        default:
            return state;
    }
}