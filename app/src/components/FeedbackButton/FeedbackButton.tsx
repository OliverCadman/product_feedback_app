import React from 'react';
import { ButtonProps } from '../../types/PropTypes/prop.types';

const FeedbackButton: React.FC<ButtonProps> = ({className, textContent, buttonType}) => {
  return (
       <button type={buttonType} className={`btn ${className}`}> 
            {textContent}
        </button>
  )
}

export default FeedbackButton