import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/shared/icon-arrow-left.svg";
import { BacklinkProps } from "../../types/PropTypes/prop.types";

const BackLink: React.FC<BacklinkProps> = ({ urlPath }) => {
  return (
    <Link to={urlPath} className="link detail-link flex centered">
      <span className="arrow-left-icon">
        <ArrowLeft />
      </span>
      Go Back
    </Link>
  );
};

export default BackLink;
