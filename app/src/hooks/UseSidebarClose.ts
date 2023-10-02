import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UseAppContext } from "../context/AppDataContext";

export const UseSidebarClose = () => {
  const { dispatch } = UseAppContext();
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "TOGGLE_MOBILE_NAV", payload: false });
  }, [location]);
};
