import React, { useContext, createContext, useReducer } from "react";
import { IAppData } from "../types/AppData/AppDataInterfaces";
import { ChildProps } from "../types/shared/Props";
import { reducer } from "../store/reducer";
import { Dispatch } from "../types/reducer/ReducerTypes";

import data from "../data/data";

const AppDataContext = createContext<{state: IAppData, dispatch: Dispatch} | null>(null);

export const AppDataProvider: React.FC<ChildProps> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, data)

    return <AppDataContext.Provider value={{state, dispatch}}>
        {children}
    </AppDataContext.Provider>
}

export const UseAppState = () => useContext(AppDataContext);