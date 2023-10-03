import { ReactComponent as IconSuggestions } from "../../assets/suggestions/icon-suggestions.svg";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { UseAppContext } from "../../context/AppDataContext";

const Toolbar = () => {
  const { state, dispatch } = UseAppContext();

  const toggleDropdown = () => {
    dispatch({ type: "TOGGLE_SORT_DROPDOWN", payload: null });
  };

  return (
    <div className="toolbar__wrapper">
      <div className="toolbar__suggestion-count flex">
        <IconSuggestions />
        <p>
          <span className="suggestion-count">6</span>Suggestions
        </p>
      </div>
      <menu className="w-100 flex row-between align-center toolbar__menu">
        <li className="flex centered">
          <label htmlFor="suggestion__sort-select">Sort by : </label>
          <Dropdown
            listItems={state.sortOptions}
            isListOpen={state.dropdownState.sortDropdown.isDropdownOpen}
            listType="li"
            selectedItem={state.sortOptions[1]}
            headerTitle={state.selectedSortOption}
            toggleList={toggleDropdown}
            dropdownType="sort"
          />
        </li>
        <li>
          <Link to="/add-feedback" className="btn btn-magenta link-btn">
            + Add Feedback
          </Link>
        </li>
      </menu>
    </div>
  );
};

export default Toolbar;
