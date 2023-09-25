import { IAppData } from "../AppData/appdata.types"

export type AppDataState = {
   appData : IAppData
}

 enum AppDataActionType  {
  DELETE_FEEDBACK = "DELETE_FEEDBACK",
  INVALID_INPUT = "INVALID_INPUT",
  SET_COMMENT = "SET_COMMENT",
  TOGGLE_REPLY = "TOGGLE_REPLY",
  SET_ID_COMMENT_RECEIVING_REPLY = "SET_ID_COMMENT_RECEIVING_REPLY",
  SHOW_MAIN_COMMENT_ERROR = "SHOW_MAIN_COMMENT_ERROR",
  HIDE_MAIN_COMMENT_ERROR = "HIDE_MAIN_COMMENT_ERROR",
  SHOW_REPLY_COMMENT_ERROR = "SHOW_REPLY_COMMENT_ERROR",
  HIDE_REPLY_COMMENT_ERROR = "HIDE_REPLY_COMMENT_ERROR"
}

export interface AppDataAction {
  type: AppDataActionType,
  payload: any
}

export type Dispatch = (action: AppDataAction) => void