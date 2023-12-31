import React from "react";
import { DropdownProps } from "../../types/PropTypes/prop.types";
import { ReactComponent as IconCheck } from "../../assets/shared/icon-check.svg";
import { ReactComponent as IconArrowDown } from "../../assets/shared/icon-arrow-down.svg";
import ToggledTransition from "../../animations/ToggledTransition";

const Dropdown: React.FC<DropdownProps> = ({
  isListOpen,
  listItems,
  headerTitle,
  selectItem,
  toggleList,
  selectedItem,
  listType,
  dropdownType,
}) => {
  return (
    <div
      className={`dd-wrapper ${isListOpen ? "focus" : ""} ${
        dropdownType && dropdownType === "sort" ? "sort" : ""
      }`}
    >
      <button
        type="button"
        className="dd-header"
        onClick={() => toggleList(listType)}
      >
        <div className="dd-header-title flex row-between">
          {headerTitle}
          <span className={`arrow-up-icon ${isListOpen ? "open" : ""} `}>
            <IconArrowDown />
          </span>
        </div>
      </button>
      <ul className="dd-list" role="list">
        {listItems.map((item, index) => {
          const { id, title } = item;

          if (title !== "All") {
            return (
              <ToggledTransition
                element="li"
                isOpen={isListOpen}
                elementIndex={index}
                key={index}
              >
                <button
                  type="button"
                  className={`flex row-between centered ${
                    selectedItem?.title === title ? "active" : ""
                  }`}
                  onClick={() => selectItem(item)}
                >
                  {title}
                  {selectedItem?.title === title ? <IconCheck /> : ""}
                </button>
              </ToggledTransition>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
