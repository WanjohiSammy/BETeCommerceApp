import { CLEAR_ERRORS, GET_ERRORS } from "../store/types";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;

        case CLEAR_ERRORS:
            return "";

        default:
            return state;
    }
}