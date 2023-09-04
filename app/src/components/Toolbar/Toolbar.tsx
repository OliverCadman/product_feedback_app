import React from 'react';
import {ReactComponent as IconSuggestions} from "../../assets/suggestions/icon-suggestions.svg";
import {ReactComponent as IconPlus} from "../../assets/shared/icon-plus.svg";

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
                        <option value="" selected>Most Upvotes</option>
                    </select>
                </li>
                <li>
                    <button type="button" className="toolbar-btn"> 
                        + Add Feedback
                    </button>
                </li>
            </menu>
        </div>
  )
}

export default Toolbar