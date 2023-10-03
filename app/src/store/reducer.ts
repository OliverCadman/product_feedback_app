import { AppDataAction } from "../types/reducer/reducer.types";
import {
  AppData,
  ICategoryListItem,
  IProductRequest,
  IStatusListItem,
} from "../types/AppData/appdata.types";
import { Reducer } from "react";
import { IComment } from "../types/AppData/appdata.types";
import { arraySwap } from "@dnd-kit/sortable";

export const reducer: Reducer<AppData, AppDataAction> = (
  state: AppData,
  action: AppDataAction | undefined,
) => {
  switch (action?.type) {
    case "TOGGLE_MOBILE_NAV": {
      return {
        ...state,
        mobileNavOpen:
          action.payload === null ? !state.mobileNavOpen : action.payload,
      };
    }
    case "INVALID_INPUT": {
      switch (action.payload) {
        case "comment": {
          return {
            ...state,
            isInputValid: false,
            invalidInputFlagRaised: true,
            showCommentInputError: true,
          };
        }
        case "reply": {
          return {
            ...state,
            isInputValid: false,
            invalidInputFlagRaised: true,
            showReplyInputError: true,
          };
        }
        case "feedbackTitle": {
          return {
            ...state,
            feedbackFormInputs: {
              ...state.feedbackFormInputs,
              titleInput: {
                ...state.feedbackFormInputs.titleInput,
                isInputValid: false,
                invalidInputFlagRaised: true,
                showError: true,
              },
            },
          };
        }
        case "feedbackDescription": {
          return {
            ...state,
            feedbackFormInputs: {
              ...state.feedbackFormInputs,
              descriptionInput: {
                ...state.feedbackFormInputs.descriptionInput,
                isInputValid: false,
                invalidInputFlagRaised: true,
                showError: true,
              },
            },
          };
        }
      }
    }
    case "SET_COMMENT": {
      state.isInputValid = true;
      state.invalidInputFlagRaised = false;

      return {
        ...state,
        commentInput: action.payload.input,
        showCommentInputError: state.invalidInputFlagRaised ? true : false,
      };
    }
    case "SET_REPLY": {
      state.isInputValid = true;
      state.invalidInputFlagRaised = false;

      return {
        ...state,
        replyInput: action.payload.input,
        showReplyInputError: state.invalidInputFlagRaised ? true : false,
      };
    }

    case "TOGGLE_REPLY": {
      return {
        ...state,
        replyToggler: {
          showReply: action.payload.showReply,
          replyingTo: action.payload.replyingTo,
        },
        showReplyInputError: false,
        replyInput: "",
      };
    }
    case "SET_ID_COMMENT_RECEIVING_REPLY": {
      return {
        ...state,
        idOfCommentReceivingReply: action.payload,
      };
    }

    case "INITIALIZE_INPUT": {
      return {
        ...state,
        showReplyInputError: false,
        replyInput: "",
      };
    }

    case "ADD_COMMENT": {
      const productRequestCopy = JSON.parse(
        JSON.stringify(state.data.productRequests),
      );

      const {
        feedbackId,
        commentId,
        user: { image, username, name },
        content,
      } = action.payload;

      const feedback = productRequestCopy.find(
        (item: IProductRequest) => item.id === feedbackId,
      );

      if (!feedback)
        throw new Error(`Could not find feedback with ID ${feedbackId}`);

      const newComment = {
        id: commentId,
        content,
        user: {
          image,
          username,
          name,
        },
        replies: [],
      };

      const newCommentArray = [...(feedback.comments as IComment[])];
      newCommentArray.push(newComment);

      feedback.comments = newCommentArray;

      const updatedProductRequests = productRequestCopy.map(
        (product: IProductRequest) => {
          return product.id === feedbackId ? feedback : product;
        },
      );

      return {
        ...state,
        commentInput: "",
        data: {
          ...state.data,
          productRequests: updatedProductRequests,
        },
      };
    }
    case "ADD_REPLY": {
      const productRequestCopy = JSON.parse(
        JSON.stringify(state.data.productRequests),
      );

      const {
        replyId,
        commentId,
        replyingTo,
        user: { image, username, name },
        content,
        productId,
      } = action.payload;

      const productFeedback = productRequestCopy.find(
        (product: IProductRequest) => {
          return product.comments?.find(
            (comment: IComment) => comment.id === commentId,
          );
        },
      );

      if (!productFeedback)
        throw new Error(`Could not find product feedback with ID ${commentId}`);

      const comment = productFeedback.comments?.find(
        (comment: IComment) => comment.id === commentId,
      );

      const newReplyArray = [...comment.replies];

      const newReply = {
        id: replyId,
        content: content,
        replyingTo: replyingTo,
        user: {
          image: image,
          name: name,
          username: username,
        },
      };

      newReplyArray.push(newReply);
      comment.replies = newReplyArray;

      const updatedProductComments = productFeedback.comments.map(
        (mappedComment: IComment) => {
          return mappedComment.id === commentId ? comment : mappedComment;
        },
      );

      productFeedback.comments = updatedProductComments;

      const updatedProductRequests = productRequestCopy.map(
        (product: IProductRequest) => {
          return product.id === productId ? productFeedback : product;
        },
      );

      return {
        ...state,
        replyInput: "",
        data: {
          ...state.data,
          productRequests: updatedProductRequests,
        },
        replyToggler: {
          showReply: false,
          replyingTo: "",
        },
      };
    }
    case "TOGGLE_CATEGORY_DROPDOWN": {
      return {
        ...state,
        dropdownState: {
          ...state.dropdownState,
          categoryDropdown: {
            ...state.dropdownState.categoryDropdown,
            isDropdownOpen:
              !state.dropdownState.categoryDropdown.isDropdownOpen,
          },
        },
      };
    }
    case "TOGGLE_STATUS_DROPDOWN": {
      return {
        ...state,
        dropdownState: {
          ...state.dropdownState,
          statusDropdown: {
            ...state.dropdownState.statusDropdown,
            isDropdownOpen: !state.dropdownState.statusDropdown.isDropdownOpen,
          },
        },
      };
    }
    case "SET_SELECTED_CATEGORY": {
      const updatedCategories = state.categories.map(
        (item: ICategoryListItem) => {
          if (item.id === action.payload.id) {
            item.selected = true;
          } else {
            item.selected = false;
          }
          return item;
        },
      );
      return {
        ...state,
        selectedFilterOption: action.payload.title,
        categories: updatedCategories,
        dropdownState: {
          ...state.dropdownState,
          categoryDropdown: {
            ...state.dropdownState.categoryDropdown,
            isDropdownOpen: false,
          },
          statusDropdown: {
            ...state.dropdownState.statusDropdown,
            isDropdownOpen: false,
          },
        },
      };
    }
    case "SET_SELECTED_STATUS": {
      const updatedStatuses = state.statuses.map((item: ICategoryListItem) => {
        if (item.id === action.payload.id) {
          item.selected = true;
        } else {
          item.selected = false;
        }
        return item;
      });
      return {
        ...state,
        statuses: updatedStatuses,
        dropdownState: {
          ...state.dropdownState,
          categoryDropdown: {
            ...state.dropdownState.categoryDropdown,
            isDropdownOpen: false,
          },
          statusDropdown: {
            ...state.dropdownState.statusDropdown,
            isDropdownOpen: false,
          },
        },
      };
    }
    case "SET_FEEDBACK_FORM_INPUT": {
      state.feedbackFormInputs.titleInput.isInputValid = true;
      state.feedbackFormInputs.titleInput.invalidInputFlagRaised = false;

      state.feedbackFormInputs.descriptionInput.isInputValid = true;
      state.feedbackFormInputs.descriptionInput.invalidInputFlagRaised = false;

      state.invalidInputFlagRaised = false;
      if (action.payload.inputType === "title") {
        return {
          ...state,
          feedbackFormInputs: {
            ...state.feedbackFormInputs,
            titleInput: {
              ...state.feedbackFormInputs.titleInput,
              inputValue: action.payload.input,
              isInputValid: !!action.payload.input,
              showError: state.feedbackFormInputs.titleInput
                .invalidInputFlagRaised
                ? true
                : false,
            },
          },
        };
      } else {
        return {
          ...state,
          feedbackFormInputs: {
            ...state.feedbackFormInputs,
            descriptionInput: {
              ...state.feedbackFormInputs.descriptionInput,
              inputValue: action.payload.input,
              isInputValid: !!action.payload.input,
              showError: state.feedbackFormInputs.descriptionInput
                .invalidInputFlagRaised
                ? true
                : false,
            },
          },
        };
      }
    }
    case "ADD_FEEDBACK": {
      const { id, title, description, status, category } = action.payload;

      const productRequestCopy: IProductRequest[] = JSON.parse(
        JSON.stringify(state.data.productRequests),
      );

      const newFeedback: IProductRequest = {
        id,
        title,
        description,
        status: status.toLowerCase(),
        category: category.toLowerCase(),
        upvotes: 0,
        comments: [],
      };

      const newProductRequestArray = [...productRequestCopy];

      newProductRequestArray.unshift(newFeedback);
      return {
        ...state,
        data: {
          ...state.data,
          productRequests: newProductRequestArray,
        },
        feedbackFormInputs: {
          ...state.feedbackFormInputs,
          titleInput: {
            inputValue: "",
            isInputValid: true,
            invalidInputFlagRaised: false,
            showError: false,
          },
          descriptionInput: {
            inputValue: "",
            isInputValid: true,
            invalidInputFlagRaised: false,
            showError: false,
          },
        },
      };
    }
    case "EDIT_FEEDBACK": {
      const productRequestCopy: IProductRequest[] = JSON.parse(
        JSON.stringify(state.data.productRequests),
      );

      const { id, title, description, category, status } = action.payload;
      const feedbackToChange = productRequestCopy.find(
        (item: IProductRequest) => {
          return item.id === id;
        },
      );

      if (feedbackToChange) {
        feedbackToChange.title = title;
        feedbackToChange.description = description;
        feedbackToChange.category = category;
        feedbackToChange.status = status;

        return {
          ...state,
          data: {
            ...state.data,
            productRequests: productRequestCopy,
          },
        };
      }
    }
    case "SET_DEFAULT_FORM_VALUES": {
      const { title, description, category, status } = action.payload;

      const updateItems = (
        list: ICategoryListItem[] | IStatusListItem[],
        title: string,
      ) => {
        return list.map((item: ICategoryListItem | IStatusListItem) => {
          if (item.title.toLowerCase() === title.toLowerCase()) {
            item.selected = true;
          } else {
            item.selected = false;
          }
          return item;
        });
      };

      const updatedCategories = updateItems(state.categories, category);
      const updatedStatuses = updateItems(state.statuses, status);

      return {
        ...state,
        categories: updatedCategories,
        statuses: updatedStatuses,
        feedbackFormInputs: {
          ...state.feedbackFormInputs,
          titleInput: {
            ...state.feedbackFormInputs.titleInput,
            inputValue: title,
          },
          descriptionInput: {
            ...state.feedbackFormInputs.descriptionInput,
            inputValue: description,
          },
        },
      };
    }
    case "SET_ACTIVE_TAB_INDEX": {
      return {
        ...state,
        activeTabIndex: action.payload,
      };
    }
    case "ACTIVATE_DRAG": {
      const { id, title, status, category, description, comments } =
        action.payload;

      return {
        ...state,
        draggedItem: {
          ...state.draggedItem,
          data: {
            ...state.draggedItem?.data,
            id,
            title,
            status,
            category,
            description,
            comments,
          },
        },
      };
    }
    case "SET_REQUEST_STATUS": {
      const { updatedStatus, requestId } = action.payload;
      const productRequestCopy = JSON.parse(
        JSON.stringify(state.data.productRequests),
      );

      const requestToUpdate = productRequestCopy.find(
        (request: IProductRequest) => {
          return request.id === requestId;
        },
      );

      if (!requestToUpdate)
        return {
          ...state,
        };

      requestToUpdate.status = updatedStatus;

      return {
        ...state,
        data: {
          ...state.data,
          productRequests: productRequestCopy,
        },
      };
    }
    case "SET_REQUEST_INDEX": {
      return {
        ...state,
      };
    }
    default: {
      throw new Error("Unexpected action type.");
    }
  }
};
