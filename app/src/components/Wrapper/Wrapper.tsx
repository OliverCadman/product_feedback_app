import React from "react";
import { ChildProps } from "../../types/shared/Props";

const Wrapper: React.FC<ChildProps> = ({ children }) => {
  return <main className="wrapper-generic">{children}</main>;
};

export default Wrapper;
