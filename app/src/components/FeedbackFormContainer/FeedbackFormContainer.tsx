import React from "react";
import { ChildProps } from "../../types/shared/Props";
import { FeedbackFormContainerProps } from "../../types/PropTypes/prop.types";

const FeedbackFormContainer: React.FC<FeedbackFormContainerProps> = ({
  children,
  icon,
}) => {
  return (
    <div className="feedback-form__container white-bg">
      <div className="feedback-form__icon">{icon}</div>
      {children}
    </div>
  );
};

export default FeedbackFormContainer;
