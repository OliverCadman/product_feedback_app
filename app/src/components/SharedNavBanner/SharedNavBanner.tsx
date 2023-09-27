import React from "react";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import BackLink from "../BackLink/BackLink";
import { SharedNavBannerProps } from "../../types/PropTypes/prop.types";
import { Link } from "react-router-dom";

const SharedNavBanner: React.FC<SharedNavBannerProps> = ({
  hasAccompanyingButton,
  historyPath,
  urlPath,
}) => {
  return (
    <div
      className={`flex row-between ${
        !hasAccompanyingButton ? "fixed-height-44" : ""
      }`}
    >
      <BackLink urlPath={historyPath} />
      {hasAccompanyingButton && urlPath ? (
        <Link to={urlPath} className="btn-blue link-btn flex centered">
          Edit Feedback
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default SharedNavBanner;
