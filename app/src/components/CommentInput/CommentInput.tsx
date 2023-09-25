import React, { useRef } from "react";
import { CommentInputProps } from "../../types/PropTypes/prop.types";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import { UseAppContext } from "../../context/AppDataContext";

const CommentInput: React.FC<CommentInputProps> = ({
  checkFormValidity,
  showError,
  setComment,
}) => {
  return (
    <form className="comment-input__form" onSubmit={checkFormValidity}>
      <label htmlFor="comment-input">Add Comment:</label>
      <div className="comment-input__wrapper">
        <textarea
          id="comment-input"
          onChange={setComment}
          className={showError ? "error" : ""}
        ></textarea>
        {showError ? <p className="error-msg">Can't be empty</p> : ""}
        <div className="submit-btn__container flex justify-end">
          <FeedbackButton
            isReplyButton={false}
            buttonType="submit"
            textContent="Post Comment"
            className="btn-magenta"
          />
        </div>
      </div>
    </form>
  );
};

export default CommentInput;
