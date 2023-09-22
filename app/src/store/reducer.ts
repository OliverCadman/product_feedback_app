import { AppDataAction } from "../types/reducer/reducer.types";
import { AppData } from "../types/AppData/appdata.types";
import { Reducer } from "react";

export const reducer: Reducer<AppData, AppDataAction> = (
    state: AppData, action: AppDataAction | undefined) => {

    switch (action?.type) {
        case "DELETE_FEEDBACK": {
            return state
        }
        case "INVALID_INPUT": {
            return {
                ...state,
                isInputValid: false,
                invalidInputFlagRaised: true
            }
        };
        case "SET_COMMENT": {
            if (state.isInputValid) {
                state.invalidInputFlagRaised = false;
            }
            return {
                ...state,
                commentInput: action.payload,
                showError: state.invalidInputFlagRaised ? true : false,
                isInputValid: true
            }
        }
        case "TOGGLE_REPLY": {
            return {
                ...state,
                showReplyInput: action.payload
            }
        }
        case "SET_ID_COMMENT_RECEIVING_REPLY": {
            return {
                ...state,
                idOfCommentReceivingReply: action.payload
            }
        }
        default: {
            throw new Error("Unexpected action type.")
        }
    }
}