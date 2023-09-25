import React, { FormEventHandler, useEffect } from "react";
import DetailNavBanner from "../../components/DetailNavBanner/DetailNavBanner";
import Suggestion from "../../components/Suggestion/Suggestion";
import { useParams } from "react-router-dom";
import { UseAppContext } from "../../context/AppDataContext";
import CommentList from "../../components/CommentList/CommentList";
import CommentInput from "../../components/CommentInput/CommentInput";
import { RefContextProvider } from "../../context/RefContext";

import { nanoid } from "nanoid";

const FeedbackDetail: React.FC = () => {
  const { id } = useParams();
  const { state, dispatch } = UseAppContext();
  const foundSuggestion = state.data.productRequests.find(
    (request) => request.id === id,
  );

  if (foundSuggestion) {
    const { title, comments, status, upvotes, category, description } =
      foundSuggestion;

    const checkFormValidity = (input: string) => {
      if (!input) {
        dispatch({ type: "INVALID_INPUT", payload: "comment" });
        return false;
      }
      return true;
    };

    const handleFormSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();

      if (!checkFormValidity(state.commentInput)) return;

      dispatch({
        type: "ADD_COMMENT",
        payload: {
          feedbackId: id,
          commentId: nanoid(),
          content: state.commentInput,
          user: {
            image: state.data.currentUser.image,
            name: state.data.currentUser.name,
            username: state.data.currentUser.username,
          },
          replies: [],
        },
      });
    };

    const setComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch({
        type: "SET_COMMENT",
        payload: { input: e.target.value, inputType: "comment" },
      });
    };

    return (
      <main className="feedback-detail__container">
        <DetailNavBanner />
        <div className="feedback-detail__wrapper">
          <Suggestion
            title={title}
            comments={comments}
            status={status}
            upvotes={upvotes}
            category={category}
            description={description}
            page="feedback-detail"
          />
        </div>
        <div className="comments__container white-bg border-10">
          <div className="comments__header">
            <h2>{comments ? `${comments.length} comments` : "No Comments"}</h2>
          </div>
          <RefContextProvider>
            <CommentList comments={comments} productId={id} />
          </RefContextProvider>
        </div>
        <div className="comment-input__container white-bg border-10">
          <CommentInput
            handleFormSubmit={handleFormSubmit}
            showError={state.showCommentInputError}
            setComment={setComment}
            textAreaValue={state.commentInput}
          />
        </div>
      </main>
    );
  } else {
    return (
      <div className="feedback-detail__container">
        <h1>Loading.</h1>
      </div>
    );
  }
};

export default FeedbackDetail;
