import React, { FormEventHandler, useEffect } from "react";
import SharedNavBanner from "../../components/SharedNavBanner/SharedNavBanner";
import Suggestion from "../../components/Suggestion/Suggestion";
import { useParams } from "react-router-dom";
import { UseAppContext } from "../../context/AppDataContext";
import CommentList from "../../components/CommentList/CommentList";
import CommentInput from "../../components/CommentInput/CommentInput";
import { RefContextProvider } from "../../context/RefContext";
import Wrapper from "../../components/Wrapper/Wrapper";
import { checkFormValidity } from "../../data/utils/validation";

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

    const handleFormSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();

      if (
        !checkFormValidity(state.commentInput, dispatch, {
          type: "INVALID_INPUT",
          payload: "comment",
        })
      )
        return;

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
      <Wrapper>
        <SharedNavBanner
          urlPath={`/edit-feedback/${id}`}
          historyPath="/"
          hasAccompanyingButton={true}
          feedbackId={id}
        />
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
      </Wrapper>
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
