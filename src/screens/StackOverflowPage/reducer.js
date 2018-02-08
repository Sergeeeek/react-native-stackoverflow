import {
    QUESTIONS_FETCH_REQUESTED,
    QUESTIONS_FETCH_SUCCESS,
    QUESTIONS_FETCH_FAILURE,
} from "./actions";

export const LOADING_STATE_IDLE = "IDLE";
export const LOADING_STATE_LOADING = "LOADING";
export const LOADING_STATE_LOADED = "LOADED";
export const LOADING_STATE_ERROR = "ERROR";

const initialState = {
    loadingState: LOADING_STATE_IDLE,
    page: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case QUESTIONS_FETCH_REQUESTED:
            return {
                questions: state.questions,
                loadingState: LOADING_STATE_LOADING,
                page: action.payload,
            };
        case QUESTIONS_FETCH_SUCCESS:
            const p = action.payload.page;
            return {
                loadingState: LOADING_STATE_LOADED,
                page: p,
                questions: p > 1 ? (state.questions || []).concat(action.payload.questions) : action.payload.questions,
            };
        case QUESTIONS_FETCH_FAILURE:
            return {
                loadingState: LOADING_STATE_ERROR,
                page: action.payload.page,
                error: action.payload.status,
                questions: state.questions,
            };
        default:
            return state;
    }
};