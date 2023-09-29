import React from "react";
import { formatString } from "../../data/utils/formatting";
import { ReactComponent as CaretUpIcon } from "../../assets/shared/icon-arrow-up.svg";
import { ReactComponent as CommentIcon } from "../../assets/shared/icon-comments.svg";
import { SuggestionProps } from "../../types/PropTypes/prop.types";
import { Link } from "react-router-dom";

const Suggestion: React.FC<SuggestionProps> = ({
  id,
  status,
  description,
  comments,
  upvotes,
  title,
  category,
  page,
  color,
}) => {
  const commentsExist = comments && comments.length > 0;

  return (
    <article
      className={`suggestion__container row-between ${
        page === "roadmap" ? "roadmap" : ""
      }`}
    >
      {page === "roadmap" && status ? (
        <div
          className="suggestion__border__roadmap"
          style={{ backgroundColor: color }}
        ></div>
      ) : (
        ""
      )}
      <div className="suggestion__content">
        {page === "roadmap" && status ? (
          <p className="flex centered-vertical">
            <span
              className="colored-circle"
              style={{ backgroundColor: color }}
            ></span>
            {formatString(status)}
          </p>
        ) : (
          ""
        )}
        {page === "product-feedback" ? (
          <h2>
            <Link to={`/${id}`} className="link suggestion__link">
              {title}
            </Link>
          </h2>
        ) : (
          <h2>{title}</h2>
        )}
        <p>{description}</p>
        <div className="suggestion__icon-wrapper category">
          <button className="category__widget suggestion" type="button">
            {category && formatString(category)}
          </button>
        </div>
      </div>
      <div className="suggestion__icon-wrapper pill">
        <div className="suggestion__icon pill pill-bg flex centered">
          <CaretUpIcon />
          <p>{upvotes}</p>
        </div>
      </div>
      <div className="suggestion__icon-wrapper comment">
        <div className="suggestion__icon comment flex centered">
          <CommentIcon />
          <p className={!commentsExist ? "greyed-out" : ""}>
            {commentsExist ? comments?.length : 0}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Suggestion;
