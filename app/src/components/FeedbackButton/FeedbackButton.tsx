import React from 'react';
import { ButtonProps } from '../../types/PropTypes/prop.types';

const FeedbackButton: React.FC<ButtonProps> = ({className, textContent, buttonType, isReplyButton}) => {
  return (
       <button type={buttonType} className={`btn ${className} ${isReplyButton ? "submit-reply" : ""}`}> 
            {textContent}
        </button>
  )
}

export default FeedbackButton