import { ReactComponent as IconSuggestions } from "../../assets/suggestions/icon-suggestions.svg";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { UseAppContext } from "../../context/AppDataContext";
import { ISortListItem } from "../../types/AppData/appdata.types";

const Toolbar = () => {
  const { state, dispatch } = UseAppContext();

  const toggleDropdown = () => {
    dispatch({ type: "TOGGLE_SORT_DROPDOWN", payload: null });
  };

  const selectItem = (item: ISortListItem) => {
    dispatch({
      type: "SET_SELECTED_SORT_OPTION",
      payload: { sortOption: item.title }
    });
  };

  const findSelectedSortOption = (
    sortOptions: ISortListItem[],
    sortOption: string
  ) => {
    const foundOption = sortOptions.find(
      (option: ISortListItem) => option.title === sortOption
    );

    if (foundOption) {
      return foundOption;
    } else {
      return sortOptions[0];
    }
  };

  return (
    <div className="toolbar__wrapper">
      <div className="toolbar__suggestion-count flex">
        <IconSuggestions />
        <p>
          <span className="suggestion-count">
            {state.data.productRequests.length}
          </span>
          Suggestions
        </p>
      </div>
      <menu className="w-100 flex row-between align-center toolbar__menu">
        <li className="flex centered">
          <label htmlFor="suggestion__sort-select">Sort by : </label>
          <Dropdown
            listItems={state.sortOptions}
            isListOpen={state.dropdownState.sortDropdown.isDropdownOpen}
            listType="li"
            selectedItem={findSelectedSortOption(
              state.sortOptions,
              state.selectedSortOption
            )}
            headerTitle={state.selectedSortOption}
            toggleList={toggleDropdown}
            dropdownType="sort"
            selectItem={selectItem}
          />
        </li>
        <li>
          <Link
            to="/product_feedback_app/add-feedback"
            className="btn btn-magenta link-btn"
          >
            + Add Feedback
          </Link>
        </li>
      </menu>
    </div>
  );
};

export default Toolbar;
