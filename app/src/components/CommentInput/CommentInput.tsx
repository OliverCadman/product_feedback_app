import React from 'react'
import { CommentInputProps } from '../../types/PropTypes/prop.types';
import FeedbackButton from '../FeedbackButton/FeedbackButton';

const CommentInput: React.FC<CommentInputProps> = ({isReply}) => {
  return (
      <form className="comment-input__form">
        {
          !isReply ? (
            <label htmlFor="comment-input">Add Comment</label>
          ) : ""
        }
        <textarea id="comment-input" aria-label={isReply ? "Add Reply" : "Add Comment"}></textarea>
        <div className="submit-btn__container flex justify-end">
          <FeedbackButton textContent='Post Comment' className="btn-magenta" />
        </div>
      </form>
  )
}

export default CommentInput