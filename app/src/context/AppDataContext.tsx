import React, { useContext, createContext, useReducer } from "react";
import { AppData } from "../types/AppData/appdata.types";
import { ChildProps } from "../types/shared/Props";
import { reducer } from "../store/reducer";

import data from "../data/data";

const initialState: AppData = {
  data: data,
  dropdownState: {
    isDropdownOpen: false,
    selectedItem: "Feature",
  },
  categories: [
    { id: 1, title: "Feature", selected: true, key: "categories" },
    { id: 2, title: "UI", selected: false, key: "categories" },
    { id: 3, title: "UX", selected: false, key: "categories" },
    { id: 4, title: "Enhancement", selected: false, key: "categories" },
    { id: 5, title: "Bug", selected: false, key: "categories" },
  ],
  isInputValid: true,
  commentInput: "",
  replyInput: "",
  invalidInputFlagRaised: false,
  showCommentInputError: false,
  showReplyInputError: false,
  replyToggler: {
    showReply: false,
    replyingTo: "",
  },
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
