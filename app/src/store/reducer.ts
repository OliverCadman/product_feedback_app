import { AppDataAction } from "../types/reducer/reducer.types";
import {
  AppData,
  ICategoryListItem,
  IProductRequest,
} from "../types/AppData/appdata.types";
import { Reducer } from "react";
import { IComment } from "../types/AppData/appdata.types";

export const reducer: Reducer<AppData, AppDataAction> = (
  state: AppData,
  action: AppDataAction | undefined,
) => {
  switch (action?.type) {
    case "DELETE_FEEDBACK": {
      return state;
    }
    case "INVALID_INPUT": {
      if (action.payload === "comment") {
        return {
          ...state,
          isInputValid: false,
          invalidInputFlagRaised: true,
          showCommentInputError: true,
        };
      } else {
        return {
          ...state,
          isInputValid: false,
          invalidInputFlagRaised: true,
          showReplyInputError: true,
        };
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
          console.log(mappedComment);
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
    default: {
      throw new Error("Unexpected action type.");
    }
  }
};
