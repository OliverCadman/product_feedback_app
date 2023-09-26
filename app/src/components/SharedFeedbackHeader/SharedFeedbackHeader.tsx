import React from "react";
import { SharedFeedbackHeaderProps } from "../../types/PropTypes/prop.types";

const SharedFeedbackHeader: React.FC<SharedFeedbackHeaderProps> = ({
  textContent,
}) => {
  return <h1 className="shared-feedback__header">{textContent}</h1>;
};

export default SharedFeedbackHeader;
