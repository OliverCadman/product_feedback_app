import React, {createContext, useContext, createRef} from "react";
import { ChildProps } from "../types/shared/Props";

const RefContext = createContext<React.RefObject<HTMLImageElement> | null>(null);
const imageRef = createRef();

export const RefContextProvider: React.FC<ChildProps> = ({children}) => {
    return (
        <RefContext.Provider value={imageRef as React.RefObject<HTMLImageElement>}>
            {children}
        </RefContext.Provider>
    )
}

export const UseRefContext = () => useContext(RefContext);