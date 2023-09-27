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
  listType,
}) => {
  return (
    <div className={`dd-wrapper ${isListOpen ? "focus" : ""}`}>
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
          const { id, title, selected, key } = item;
          return (
            <Transition
              as="li"
              key={id}
              style={
                isListOpen ? { transitionDelay: `${40 * index}ms` } : undefined
              }
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 translate-y-40"
              leave="no-transition"
              leaveFrom="transform opacity-100 translate-y-0"
              leaveTo="opacity-0"
              show={isListOpen}
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
            </Transition>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
