import React from "react";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import BackLink from "../BackLink/BackLink";
import { SharedNavBannerProps } from "../../types/PropTypes/prop.types";

const SharedNavBanner: React.FC<SharedNavBannerProps> = ({
  hasAccompanyingButton,
}) => {
  return (
    <div
      className={`flex row-between ${
        !hasAccompanyingButton ? "fixed-height-44" : ""
      }`}
    >
      <BackLink />
      {hasAccompanyingButton ? (
        <FeedbackButton className="btn-blue" textContent="Edit Feedback" />
      ) : (
        ""
      )}
    </div>
  );
};

export default SharedNavBanner;
