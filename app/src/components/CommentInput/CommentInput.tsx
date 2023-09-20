import React, {useRef} from 'react'
import { CommentInputProps } from '../../types/PropTypes/prop.types';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import { UseAppContext } from '../../context/AppDataContext';

const CommentInput: React.FC<CommentInputProps> = (
  {isReply, checkFormValidity, isInputValid, setComment}) => {

  return (
      <form 
      className="comment-input__form" 
      onSubmit={checkFormValidity} >
        {
          !isReply ? (
            <label htmlFor="comment-input">Add Comment</label>
          ) : ""
        }
        <textarea 
        id="comment-input" 
        aria-label={isReply ? "Add Reply" : "Add Comment"} 
        onChange={setComment}></textarea>
        <div className="submit-btn__container flex justify-end">
          <FeedbackButton buttonType="submit" textContent='Post Comment' className="btn-magenta" />
        </div>
        { !isInputValid ? <div>
          <p>Input is NOT valid!</p>
        </div> : ""}
      </form>
  )
}

export default CommentInput