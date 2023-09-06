import { IAppData } from "../AppData/appdata.types"

export type AppDataState = {
   appData : IAppData
}

 enum AppDataActionType  {
  DELETE_FEEDBACK = "DELETE_FEEDBACK"
}

export interface AppDataAction {
  type: AppDataActionType,
  payload: void
}

export type Dispatch = (action: AppDataAction) => void