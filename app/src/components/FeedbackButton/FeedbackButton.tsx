import React from 'react';
import { IButton } from '../../types/PropTypes/prop.types';

const FeedbackButton: React.FC<IButton> = ({className, textContent}) => {
  return (
       <button type="button" className={`btn ${className}`}> 
            {textContent}
        </button>
  )
}

export default FeedbackButton