import { AppDataAction } from "../types/reducer/reducer.types";
import { IAppData } from "../types/AppData/appdata.types";
import { Reducer } from "react";

export const reducer: Reducer<IAppData, AppDataAction> = (
    state: IAppData, action: AppDataAction | undefined) => {
    switch (action?.type) {
        case "DELETE_FEEDBACK": {
            return state
        }
        case "INVALID_INPUT":
            return state
        default: {
            throw new Error("Unexpected action type.")
        }
    }
}