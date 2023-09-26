import React, { useEffect, useRef } from "react";
import { DropdownProps } from "../../types/PropTypes/prop.types";
import { ReactComponent as IconCheck } from "../../assets/shared/icon-check.svg";
import { ReactComponent as IconArrowDown } from "../../assets/shared/icon-arrow-down.svg";
import { Transition } from "@headlessui/react";

const Dropdown: React.FC<DropdownProps> = ({
  isListOpen,
  listItems,
  headerTitle,
  selectItem,
  toggleList,
  selectedItem,
}) => {
  return (
    <div className="dd-wrapper">
      <button type="button" className="dd-header" onClick={toggleList}>
        <div className="dd-header-title flex row-between">
          {headerTitle}
          <span className={`arrow-up-icon ${isListOpen ? "open" : ""} `}>
            <IconArrowDown />
          </span>
        </div>
      </button>
      {isListOpen ? (
        <ul className="dd-list" role="list">
          {listItems.map((item, index) => {
            const { id, title, selected, key } = item;
            return (
              <Transition
                as="li"
                className="dd-list-item"
                key={id}
                style={{ transitionDelay: `${100 * index}ms` }}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                show={isListOpen}
              >
                <button
                  type="button"
                  className="flex row-between centered"
                  onClick={() => selectItem(item)}
                >
                  {title}
                  {selectedItem?.title === title ? <IconCheck /> : ""}
                </button>
              </Transition>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
