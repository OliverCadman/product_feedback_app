import React from 'react';
import CategoryWidget from '../Sidebar/Categories/CategoryWidget';
import {ReactComponent as CaretUpIcon} from "../../assets/shared/icon-arrow-up.svg";
import {ReactComponent as CommentIcon} from "../../assets/shared/icon-comments.svg";

const Suggestion = () => {
  return (
    <article className="suggestion__container row-between">
        <div className="suggestion__content">
            <h2>
                Add tags for solutions
            </h2>
            <p>
                Easier to search for solutions based on a specific stack.
            </p>
             <div className="suggestion__icon-wrapper category">
            <button className="category__widget suggestion" type="button">
                Feature
            </button>
        </div>
        </div>
        <div className="suggestion__icon-wrapper pill">
            <div className="suggestion__icon pill pill-bg flex centered">
                <CaretUpIcon />
                <p>99</p> 
            </div>
        </div>
        <div className="suggestion__icon-wrapper comment">
            <div className="suggestion__icon comment flex centered">
                <CommentIcon />
                <p>
                    2
                </p>
            </div>
        </div>
    </article>
  )
}

export default Suggestion