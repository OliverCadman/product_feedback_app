import React, { useEffect } from "react";
import {
  ICategoryListItem,
  IStatusListItem,
} from "../../types/AppData/appdata.types";
import Dropdown from "../Dropdown/Dropdown";
import { UseAppContext } from "../../context/AppDataContext";
import { Link } from "react-router-dom";
import { checkFormValidity } from "../../data/utils/validation";
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";
import { nanoid } from "nanoid";

import { useNavigate } from "react-router-dom";
import { FeedbackFormProps } from "../../types/PropTypes/prop.types";

const AddFeedbackForm: React.FC<FeedbackFormProps> = ({
  isEditing,
  feedbackTitle,
  feedbackDescription,
  feedbackCategory,
  feedbackStatus,
  feedbackId,
}) => {
  const { state, dispatch } = UseAppContext();
  const navigate = useNavigate();

  const selectItem = (item: ICategoryListItem | IStatusListItem) => {
    const { id, key, title } = item;

    if (key.toLowerCase() === "categories") {
      dispatch({
        type: "SET_SELECTED_CATEGORY",
        payload: { id, title },
      });
    } else {
      dispatch({
        type: "SET_SELECTED_STATUS",
        payload: { id },
      });
    }
  };

  useEffect(() => {
    if (isEditing) {
      dispatch({
        type: "SET_DEFAULT_FORM_VALUES",
        payload: {
          title: feedbackTitle,
          description: feedbackDescription,
          category: feedbackCategory,
          status: feedbackStatus,
        },
      });
    }
  }, []);

  const setInput = (input: string, inputType: string) => {
    dispatch({
      type: "SET_FEEDBACK_FORM_INPUT",
      payload: {
        inputType,
        input,
      },
    });
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
    const foundItem = items.find(
      (item: ICategoryListItem | IStatusListItem) => item.selected === true,
    );

    if (foundItem) {
      if (foundItem.title !== "All") {
        return foundItem;
      }
      return items[1];
    }

    return items[0];
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const titleInput = state.feedbackFormInputs.titleInput.inputValue;
    const descriptionInput =
      state.feedbackFormInputs.descriptionInput.inputValue;

    const invalidTitlePayload = {
      type: "INVALID_INPUT",
      payload: "feedbackTitle",
    };

    const invalidDescriptionPayload = {
      type: "INVALID_INPUT",
      payload: "feedbackDescription",
    };

    const titleValid = checkFormValidity(
      state.feedbackFormInputs.titleInput.inputValue,
      dispatch,
      invalidTitlePayload,
    );

    const descriptionValid = checkFormValidity(
      state.feedbackFormInputs.descriptionInput.inputValue,
      dispatch,
      invalidDescriptionPayload,
    );

    if (!titleValid || !descriptionValid) return false;

    const feedbackPayload = {
      title: titleInput,
      description: descriptionInput,
      category: findSelectedItem(state.categories).title,
      status: findSelectedItem(state.statuses).title,
      id: feedbackId,
    };

    if (isEditing) {
      dispatch({ type: "EDIT_FEEDBACK", payload: feedbackPayload });
    } else {
      feedbackPayload.id = nanoid();
      dispatch({ type: "ADD_FEEDBACK", payload: feedbackPayload });
    }

    navigate("/");
  };

  return (
    <form className="feedback__form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="feedback-title">Feedback Title</label>
        <p>Add a short, descriptive headline</p>
        <div className="form-control">
          <input
            type="text"
            id="feedback-title"
            className={`input-focusable ${
              state.feedbackFormInputs.titleInput.showError ? "error" : ""
            }`}
            value={state.feedbackFormInputs.titleInput.inputValue}
            onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
              setInput((e.target as HTMLInputElement).value, "title")
            }
          />
          {state.feedbackFormInputs.titleInput.showError ? (
            <InputErrorMessage />
          ) : (
            ""
          )}
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
          <label htmlFor="feedback-categories">
            {isEditing ? "Update Status" : "Status"}
          </label>
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
          <textarea
            id="feedback-detail"
            className={`input-focusable ${
              state.feedbackFormInputs.descriptionInput.showError ? "error" : ""
            }`}
            value={state.feedbackFormInputs.descriptionInput.inputValue}
            onChange={(e: React.SyntheticEvent<HTMLTextAreaElement>) =>
              setInput((e.target as HTMLTextAreaElement).value, "description")
            }
          ></textarea>
          {state.feedbackFormInputs.descriptionInput.showError ? (
            <InputErrorMessage />
          ) : (
            ""
          )}
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
            <Link to="/" className="btn btn-dark-blue">
              Cancel
            </Link>
          </li>
        </menu>
      </div>
    </form>
  );
};

export default AddFeedbackForm;
