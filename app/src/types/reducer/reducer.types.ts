import { IAppData } from "../AppData/appdata.types";

export type AppDataState = {
  appData: IAppData;
};

enum AppDataActionType {
  DELETE_FEEDBACK = "DELETE_FEEDBACK",
  INVALID_INPUT = "INVALID_INPUT",
  SET_COMMENT = "SET_COMMENT",
  SET_REPLY = "SET_REPLY",
  TOGGLE_REPLY = "TOGGLE_REPLY",
  SET_ID_COMMENT_RECEIVING_REPLY = "SET_ID_COMMENT_RECEIVING_REPLY",
  ADD_COMMENT = "ADD_COMMENT",
  ADD_REPLY = "ADD_REPLY",
  INITIALIZE_INPUT = "INITIALIZE_INPUT",
  TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN",
  SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY",
}

export interface AppDataAction {
  type: AppDataActionType;
  payload: any;
}

export type Dispatch = (action: AppDataAction) => any;
