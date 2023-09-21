import React from 'react';
import {ReactComponent as IconSuggestions} from "../../assets/suggestions/icon-suggestions.svg";
import FeedbackButton from '../FeedbackButton/FeedbackButton';

const Toolbar = () => {
  return (
    <div className="toolbar__wrapper">
            <div className="toolbar__suggestion-count flex">
                <IconSuggestions />
                <p><span className="suggestion-count">6</span>Suggestions</p>
            </div>
            <menu className="w-100 flex row-between align-center toolbar__menu">
                <li>
                    <label htmlFor="suggestion__sort-select">Sort by : </label>
                    <select id="suggestion__sort-select">
                        <option value="" defaultValue={"Most Upvotes"}>Most Upvotes</option>
                    </select>
                </li>
                <li>
                 <FeedbackButton isReplyButton={false} buttonType="button" className='btn-magenta' textContent="+ Add Feedback"/>
                </li>
            </menu>
        </div>
  )
}

export default Toolbar