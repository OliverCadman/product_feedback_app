import React from 'react';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import { ReplyInputProps } from '../../types/PropTypes/prop.types';

const ReplyInput: React.FC<ReplyInputProps> = ({
    showError,
    checkFormValidity,
    setReply,
    commentHasReplies,
    isCommentReceivingReply
}) => {
  return (
    <form 
      className={`comment-input__form ${commentHasReplies ? "reply" : ""}`}
      onSubmit={checkFormValidity} >
        <div className="comment-input__wrapper reply">
          <textarea 
            id="comment-input" 
            aria-label="Add Reply"
            onChange={setReply}></textarea>
          <div className="submit-btn__container flex justify-end reply">
            <FeedbackButton 
              isReplyButton={true} 
              buttonType="submit"
              textContent="Post Reply"
              className="btn-magenta" 
            />
          </div>
        </div>
        {
          showError ? (
            <p>Input is NOT valid!</p>
          ) : ""
        }
      </form>
  )
}

export default ReplyInput