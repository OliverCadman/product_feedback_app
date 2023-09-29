import React from "react";
import BackLink from "../BackLink/BackLink";
import { SharedNavBannerProps } from "../../types/PropTypes/prop.types";
import { Link } from "react-router-dom";

const SharedNavBanner: React.FC<SharedNavBannerProps> = ({
  hasAccompanyingButton,
  historyPath,
  urlPath,
  isRoadmapPage,
}) => {
  return (
    <div
      className={`flex row-between centered ${
        !hasAccompanyingButton ? "fixed-height-44" : ""
      }
         ${isRoadmapPage ? "roadmap-nav__banner" : ""}`}
    >
      <div>
        <BackLink urlPath={historyPath} />
        {isRoadmapPage ? <h1>Roadmap</h1> : ""}
      </div>
      {hasAccompanyingButton && urlPath ? (
        <Link
          to={urlPath}
          className={`link-btn flex centered ${
            isRoadmapPage ? "btn-magenta" : "btn-blue"
          }`}
        >
          {isRoadmapPage ? "+ Add Feedback" : "Edit Feedback"}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default SharedNavBanner;
