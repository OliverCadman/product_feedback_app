import React from "react";
import { ToggledTransitionProps } from "../types/PropTypes/prop.types";
import { Transition } from "@headlessui/react";

const ToggledTransition: React.FC<ToggledTransitionProps> = ({
  children,
  isOpen,
  element,
  elementIndex,
}) => {
  return (
    <Transition
      as={element}
      style={
        isOpen && elementIndex
          ? { transitionDelay: `${40 * elementIndex}ms` }
          : undefined
      }
      enter="transition ease-out duration-300"
      enterFrom="transform opacity-0 translate-y-40"
      leave="no-transition"
      leaveFrom="transform opacity-100 translate-y-0"
      leaveTo="opacity-0"
      show={isOpen}
    >
      {children}
    </Transition>
  );
};

export default ToggledTransition;
