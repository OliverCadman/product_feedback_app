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
            if (action.payload === "comment") {
                return {
                    ...state,
                    isInputValid: false,
                    invalidInputFlagRaised: true,
                    showCommentInputError: true
            }
            } else {
                return {
                    ...state,
                    isInputValid: false,
                    invalidInputFlagRaised: true,
                    showReplyInputError: true
                }
            }

        };
        case "SET_COMMENT": {
            state.isInputValid = true;
            state.invalidInputFlagRaised = false;

            if (action.payload.inputType === "comment") {
                return {
                    ...state,
                    commentInput: action.payload.input,
                    showCommentInputError: state.invalidInputFlagRaised ? true : false,
                }
            } else {
                return {
                    ...state,
                    commentInput: action.payload.input,
                    showReplyInputError: state.invalidInputFlagRaised ? true : false,
                }
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
        case "SHOW_MAIN_COMMENT_ERROR": {
            return {
                ...state,
                showMainCommentError: true
            }
        }
        case "HIDE_MAIN_COMMENT_ERROR": {
            return {
                ...state,
                showMainCommentError: false
            }
        }
        case "SHOW_REPLY_COMMENT_ERROR": {
            return {
                ...state,
                showReplyCommentError: true
            }
        }
        case "HIDE_REPLY_COMMENT_ERROR": {
            return {
                ...state,
                showReplyCommentError: false
            }
        }
        default: {
            throw new Error("Unexpected action type.")
        }
    }
}