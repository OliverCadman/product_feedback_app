import React from "react";
import NavMob from "../../components/mobile/Nav/NavMob";
import FeedbackBoard from "../../components/FeedbackBoard/FeedbackBoard";
import CategoryWidget from "../../components/Sidebar/Categories/CategoryWidget";
import Roadmap from "../../components/Sidebar/Roadmap/Roadmap";
import LogoBrandBackgroundDesktop from "../../assets/suggestions/desktop/background-header.png";
import LogoBrandBackgroundTablet from "../../assets/suggestions/tablet/background-header.png";
import SidebarMob from "../../components/mobile/Sidebar/SidebarMob";
import Toolbar from "../../components/Toolbar/Toolbar";
import { UseAppContext } from "../../context/AppDataContext";

const backgroundCSS = `
  @media screen and (min-width: 768px) {
    .logo-brand {
      background-image: url(${LogoBrandBackgroundTablet})
    }
  }

  @media screen and (min-width: 1200px) {
    .logo-brand {
      background-image: url(${LogoBrandBackgroundDesktop})

    }
  }
`;

const ProductFeedback: React.FC = () => {
  const { state } = UseAppContext();

  return (
    <>
      <style scoped>{backgroundCSS}</style>
      <NavMob />
      <SidebarMob />
      <main>
        <div className="toolbar-sm__container toolbar-bg">
          <Toolbar />
        </div>
        <div
          className={`opaque-overlay ${state.mobileNavOpen ? "show" : ""}`}
        ></div>
        <div className="product-feedback__container flex">
          <aside className="product-feedback__panels">
            <div className="product-feedback__panel logo-brand">
              <div className="logo-brand__content-wrapper h-100 flex flex-end">
                <div className="logo-brand__content">
                  <h1>Frontend Mentor</h1>
                  <p>Feedback Board</p>
                </div>
              </div>
            </div>
            <CategoryWidget />
            <Roadmap />
          </aside>
          <section className="product-feedback__board">
            <div className="toolbar-lg__container toolbar-bg">
              <Toolbar />
            </div>
            <FeedbackBoard />
            {/* <NoFeedbackAlert /> */}
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductFeedback;
