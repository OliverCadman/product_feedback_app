import React, { useContext, createContext, useReducer } from "react";
import { AppData } from "../types/AppData/appdata.types";
import { ChildProps } from "../types/shared/Props";
import { reducer } from "../store/reducer";

import data from "../data/data";

const initialState: AppData = {
  data: data,
  dropdownState: {
    categoryDropdown: {
      isDropdownOpen: false,
      selectedItem: "Feature",
    },
    statusDropdown: {
      isDropdownOpen: false,
      selectedItem: "",
    },
  },
  feedbackFormInputs: {
    titleInput: {
      isInputValid: true,
      invalidInputFlagRaised: false,
      showError: false,
      inputValue: "",
    },
    descriptionInput: {
      isInputValid: true,
      invalidInputFlagRaised: false,
      showError: false,
      inputValue: "",
    },
  },
  selectedFilterOption: "All",
  categories: [
    { id: 1, title: "All", selected: true, key: "categories" },
    { id: 2, title: "UI", selected: false, key: "categories" },
    { id: 3, title: "UX", selected: false, key: "categories" },
    { id: 4, title: "Enhancement", selected: false, key: "categories" },
    { id: 5, title: "Bug", selected: false, key: "categories" },
    { id: 6, title: "Feature", selected: false, key: "categories" },
  ],
  statuses: [
    {
      id: 1,
      title: "Planned",
      description: "Ideas prioritized for research",
      selected: true,
      key: "statuses",
      color: "#f49f85",
    },
    {
      id: 2,
      title: "In-Progress",
      description: "Currently being developed",
      selected: false,
      key: "statuses",
      color: "#ad1fea",
    },
    {
      id: 3,
      title: "Live",
      description: "Released features",
      selected: false,
      key: "statuses",
      color: "#62bcfa",
    },
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
  activeTabIndex: 0,
  mobileNavOpen: false,
  draggedItem: undefined,
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
