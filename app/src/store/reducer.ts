import { AppDataAction } from "../types/reducer/ReducerTypes"
import { IAppData } from "../types/AppData/AppDataInterfaces";
import { Reducer } from "react";

export const reducer: Reducer<IAppData, AppDataAction> = (state: IAppData, action: AppDataAction | undefined) => {
    switch (action?.type) {
        case "DELETE_FEEDBACK": {
            return state
        }
        default: {
            throw new Error("Unexpected action type.")
        }
    }
}