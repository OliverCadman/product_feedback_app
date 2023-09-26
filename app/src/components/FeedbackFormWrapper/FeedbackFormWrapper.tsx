import React from "react";
import { ChildProps } from "../../types/shared/Props";

const FeedbackFormWrapper: React.FC<ChildProps> = ({ children }) => {
  return <div className="feedback-form__wrapper">{children}</div>;
};

export default FeedbackFormWrapper;
