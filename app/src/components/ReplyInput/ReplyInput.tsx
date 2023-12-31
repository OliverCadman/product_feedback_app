import React from "react";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import { ReplyInputProps } from "../../types/PropTypes/prop.types";
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";

const ReplyInput: React.FC<ReplyInputProps> = ({
  showError,
  handleFormSubmit,
  setReply,
  commentHasReplies,
  textAreaValue,
}) => {
  return (
    <form
      className={`comment-input__form ${commentHasReplies ? "reply" : ""}`}
      onSubmit={handleFormSubmit}
    >
      <div className="comment-input__wrapper reply">
        <div className="flex-grow-1">
          <textarea
            id="comment-input input-focusable"
            aria-label="Add Reply"
            onChange={setReply}
            className={showError ? "error" : ""}
            value={textAreaValue}
          ></textarea>
          {showError ? <InputErrorMessage /> : ""}
        </div>
        <div className="submit-btn__container flex justify-end reply">
          <FeedbackButton
            isReplyButton={true}
            buttonType="submit"
            textContent="Post Reply"
            className="btn-magenta"
          />
        </div>
      </div>
    </form>
  );
};

export default ReplyInput;
