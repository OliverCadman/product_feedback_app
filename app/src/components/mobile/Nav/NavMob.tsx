import React from "react";
import { UseAppContext } from "../../../context/AppDataContext";

const NavMob: React.FC = () => {
  const { state, dispatch } = UseAppContext();

  return (
    <nav>
      <div className="nav--mobile flex row-between align-center bar-padding">
        <div className="nav--elements flex row-between">
          <div className="nav--text-content">
            <h1>Frontend Mentor</h1>
            <p>Feedback Board</p>
          </div>
        </div>
        <div className="nav--sidebar-icon">
          <button
            className={`hamburger-icon ${state.mobileNavOpen ? "open" : ""}`}
            type="button"
            onClick={() =>
              dispatch({ type: "TOGGLE_MOBILE_NAV", payload: null })
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavMob;
