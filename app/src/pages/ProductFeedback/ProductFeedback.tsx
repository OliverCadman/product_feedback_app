import React from 'react';
import NavMob from '../../components/mobile/Nav/NavMob';
import FeedbackBoard from '../../components/FeedbackBoard/FeedbackBoard';
import CategoryWidget from '../../components/Sidebar/Categories/CategoryWidget';
import LogoBrandBackgroundDesktop from "../../assets/suggestions/desktop/background-header.png";
import LogoBrandBackgroundTablet from "../../assets/suggestions/tablet/background-header.png";

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
`

const ProductFeedback: React.FC = () => {
  return (
    <>
    <style scoped>{backgroundCSS}</style>
    <NavMob />
    <div className="product-feedback__container flex">
      <aside className="product-feedback__panels">
        <div 
        className="product-feedback__panel logo-brand">
          <div className="logo-brand__content-wrapper h-100 flex flex-end">
            <div className="logo-brand__content">
              <h1>Frontend Mentor</h1>
            <p>Feedback Board</p>
            </div>
          </div>
        </div>
        <div 
        className="product-feedback__panel widget-container"
        >
          
        </div>
        <div className="product-feedback__panel widget-container categories">
          <div className="categories__widget-wrapper flex">
            {Array.from(new Array(5)).map(x => {
              return <CategoryWidget>UX</CategoryWidget>
            })}
          </div>
        </div>
      </aside>
      <section className="product-feedback__board">
        <FeedbackBoard />
      </section>
    </div>
    </>
  )
}

export default ProductFeedback