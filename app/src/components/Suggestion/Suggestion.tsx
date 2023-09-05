import React from 'react';
import { capitalize } from '../../data/utils/formatting';
import {ReactComponent as CaretUpIcon} from "../../assets/shared/icon-arrow-up.svg";
import {ReactComponent as CommentIcon} from "../../assets/shared/icon-comments.svg";
import { ISuggestion } from '../../types/PropTypes/Suggestion';

const Suggestion: React.FC<ISuggestion> = (
    {id, status, description, comments, upvotes, title, category}
) => {


    const commentsExist = comments && comments.length > 0

  return (
    <article className="suggestion__container row-between">
        <div className="suggestion__content">
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
             <div className="suggestion__icon-wrapper category">
            <button className="category__widget suggestion" type="button">
                {capitalize(category)}
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
                <p className={!commentsExist ? 'greyed-out': ''}>
                    {commentsExist ? comments?.length : 0}
                </p>
            </div>
        </div>
    </article>
  )
}

export default Suggestion