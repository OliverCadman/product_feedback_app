import React, { useContext, createContext, useReducer } from "react";
import { AppData } from "../types/AppData/appdata.types";
import { ChildProps } from "../types/shared/Props";
import { reducer } from "../store/reducer";

import data from "../data/data";

const initialState: AppData = {
  data: data,
  isInputValid: true,
  commentInput: "",
  invalidInputFlagRaised: false,
  showCommentInputError: false,
  showReplyInputError: false,
  showReplyInput: false,
  idOfCommentReceivingReply: "",
};

const AppDataContext = createContext<{
  state: AppData;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const AppDataProvider: React.FC<ChildProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppDataContext.Provider value={{ state, dispatch }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const UseAppContext = () => useContext(AppDataContext);
