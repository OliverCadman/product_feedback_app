import React from 'react';
import { ReactComponent as HamburgerIcon } from "../../../assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../../../assets/shared/mobile/icon-close.svg";

const NavMob: React.FC = () => {
  return (
    <nav>
      <div className="nav--mobile flex row-between align-center"
        >
          <div className="nav--elements flex row-between">
            <div className="nav--text-content">
              <h1>Frontend Mentor</h1>
              <p>Feedback Board</p>
            </div>
          </div>
          <div className="nav--sidebar-icon">
            <HamburgerIcon />
          </div>
        </div>
    </nav>
  )
}

export default NavMob