import { LOADING_STATE_LOADING, LOADING_STATE_ERROR } from "./reducer";
import StackOverflowAPI from "../../services/StackOverflowAPI";

export const QUESTIONS_FETCH_REQUESTED = "QUESTIONS_FETCH_REQUESTED";
export const QUESTIONS_FETCH_SUCCESS = "QUESTIONS_FETCH_SUCCESS";
export const QUESTIONS_FETCH_FAILURE = "QUESTION_FETCH_FAILURE";

export function fetchQuestions(page) {
    return (dispatch, getState) => {
        const q = getState().questions;

        if (q.loadingState === LOADING_STATE_LOADING || q.page === page) {
            return;
        }

        dispatch(questionsFetchRequested(page));

        return StackOverflowAPI.getQuestions("react-native", page)
            .then(questions => {
                dispatch(questionsFetchSuccess(page, questions));
            }).catch(status => {
                dispatch(questionFetchFailure(page, status));
            });
    };
};

export function questionsFetchRequested(page) {
    return {
        type: QUESTIONS_FETCH_REQUESTED,
        payload: page,
    };
}

export function questionsFetchSuccess(page, questions) {
    return {
        type: QUESTIONS_FETCH_SUCCESS,
        payload: {
            page,
            questions,
        },
    };
}

export function questionFetchFailure(page, status) {
    return {
        type: QUESTIONS_FETCH_FAILURE,
        payload: {
            page,
            status,
        },
    }
}