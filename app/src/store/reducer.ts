import { AppDataAction } from "../types/reducer/reducer.types";
import { AppData, IProductRequest } from "../types/AppData/appdata.types";
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
      };
    }
    case "SET_ID_COMMENT_RECEIVING_REPLY": {
      return {
        ...state,
        idOfCommentReceivingReply: action.payload,
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
    default: {
      throw new Error("Unexpected action type.");
    }
  }
};
