import React from "react";
import CategoryWidget from "../../Sidebar/Categories/CategoryWidget";
import Roadmap from "../../Sidebar/Roadmap/Roadmap";
import { UseAppContext } from "../../../context/AppDataContext";
import ToggledTransition from "../../../animations/ToggledTransition";

const SidebarMob: React.FC = () => {
  const { state } = UseAppContext();
  return (
    <aside className={`sidebar-mob ${state.mobileNavOpen ? "open" : ""}`}>
      <div className="product-feedback__panels mob">
        <div className="product-feedback__panel">
          <CategoryWidget />
        </div>
        <div className="product-feedback__panel">
          <Roadmap />
        </div>
      </div>
    </aside>
  );
};

export default SidebarMob;
