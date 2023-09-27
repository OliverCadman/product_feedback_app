import React from "react";
import {
  ICategoryListItem,
  IStatusListItem,
} from "../../types/AppData/appdata.types";
import Dropdown from "../Dropdown/Dropdown";
import { UseAppContext } from "../../context/AppDataContext";

const AddFeedbackForm = () => {
  const { state, dispatch } = UseAppContext();

  const selectItem = (item: ICategoryListItem | IStatusListItem) => {
    const { id, key } = item;

    if (key.toLowerCase() === "categories") {
      dispatch({
        type: "SET_SELECTED_CATEGORY",
        payload: { id },
      });
    } else {
      dispatch({
        type: "SET_SELECTED_STATUS",
        payload: { id },
      });
    }
  };

  const toggleList = (listType: string) => {
    if (listType.toLowerCase() === "category") {
      dispatch({ type: "TOGGLE_CATEGORY_DROPDOWN", payload: null });

      if (state.dropdownState.statusDropdown.isDropdownOpen) {
        dispatch({ type: "TOGGLE_STATUS_DROPDOWN", payload: null });
      }
    } else {
      dispatch({ type: "TOGGLE_STATUS_DROPDOWN", payload: null });
    }
  };

  const findSelectedItem = (items: ICategoryListItem[] | IStatusListItem[]) => {
    return items.find(
      (item: ICategoryListItem | IStatusListItem) => item.selected === true,
    );
  };

  return (
    <form className="feedback__form">
      <div className="form-group">
        <label htmlFor="feedback-title">Feedback Title</label>
        <p>Add a short, descriptive headline</p>
        <div className="form-control">
          <input type="text" id="feedback-title" className="input-focusable" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="feedback-categories">Category</label>
        <p>Choose a category for your feedback</p>
        <div className="form-control">
          <Dropdown
            headerTitle={findSelectedItem(state.categories)?.title}
            isListOpen={state.dropdownState.categoryDropdown.isDropdownOpen}
            listItems={state.categories}
            selectItem={selectItem}
            toggleList={toggleList}
            selectedItem={findSelectedItem(state.categories)}
            listType="category"
          />
        </div>
      </div>
      {findSelectedItem(state.categories)?.title.toLowerCase() === "feature" ? (
        <div className="form-group">
          <label htmlFor="feedback-categories">Status</label>
          <p>Change feature state</p>
          <div className="form-control">
            <Dropdown
              headerTitle={findSelectedItem(state.statuses)?.title}
              isListOpen={state.dropdownState.statusDropdown.isDropdownOpen}
              listItems={state.statuses}
              selectItem={selectItem}
              toggleList={toggleList}
              selectedItem={findSelectedItem(state.statuses)}
              listType="feature"
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="form-group">
        <label htmlFor="feedback-detail">Feedback Detail</label>
        <p>
          Include any specific comments on what should be improved, added etc
        </p>
        <div className="form-control">
          <textarea id="feedback-detail" className="input-focusable"></textarea>
        </div>
      </div>
      <div className="submit-btn__container">
        <menu className="flex">
          <li>
            <button type="submit" className="btn btn-magenta">
              Add Feedback
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark-blue">
              Cancel
            </button>
          </li>
        </menu>
      </div>
    </form>
  );
};

export default AddFeedbackForm;
