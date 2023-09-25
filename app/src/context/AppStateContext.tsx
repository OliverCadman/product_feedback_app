import React, { createContext, useContext, useState } from "react";
import { ChildProps } from "../types/shared/Props";

type AppContextType = {
  isTabletDevice: boolean;
  setIsTabletDevice: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppStateContext = createContext<AppContextType | null>(null);

export const AppStateProvider: React.FC<ChildProps> = ({ children }) => {
  const [isTabletDevice, setIsTabletDevice] = useState<boolean>(false);
  return (
    <AppStateContext.Provider value={{ isTabletDevice, setIsTabletDevice }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const UseAppContext = () =>
  useContext(AppStateContext) as AppContextType;
