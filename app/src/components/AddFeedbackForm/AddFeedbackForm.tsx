import React from "react";
import { ICategoryListItem } from "../../types/AppData/appdata.types";
import Dropdown from "../Dropdown/Dropdown";
import { UseAppContext } from "../../context/AppDataContext";

const AddFeedbackForm = () => {
  const { state, dispatch } = UseAppContext();

  const selectItem = (item: ICategoryListItem) => {
    const { title, id, key } = item;

    dispatch({
      type: "SET_SELECTED_CATEGORY",
      payload: { id },
    });
  };

  const toggleList = () => {
    dispatch({ type: "TOGGLE_DROPDOWN", payload: null });
  };

  const findSelectedItem = () => {
    return state.categories.find(
      (item: ICategoryListItem) => item.selected === true,
    );
  };

  return (
    <form className="feedback__form">
      <div className="form-group">
        <label htmlFor="feedback-title">Feedback Title</label>
        <p>Add a short, descriptive headline</p>
        <div className="form-control">
          <input type="text" id="feedback-title" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="feedback-categories">Category</label>
        <p>Choose a category for your feedback</p>
        <div className="form-control">
          <Dropdown
            headerTitle={findSelectedItem()?.title}
            isListOpen={state.dropdownState.isDropdownOpen}
            listItems={state.categories}
            selectItem={selectItem}
            toggleList={toggleList}
            selectedItem={findSelectedItem()}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="feedback-detail">Feedback Detail</label>
        <p>
          Include any specific comments on what should be improved, added etc
        </p>
        <div className="form-control">
          <textarea id="feedback-detail"></textarea>
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
