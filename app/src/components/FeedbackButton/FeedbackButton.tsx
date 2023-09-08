import React from 'react';
import { ButtonProps } from '../../types/PropTypes/prop.types';

const FeedbackButton: React.FC<ButtonProps> = ({className, textContent}) => {
  return (
       <button type="button" className={`btn ${className}`}> 
            {textContent}
        </button>
  )
}

export default FeedbackButton