import React from 'react';
import NavMob from '../../components/mobile/Nav/NavMob';
import FeedbackBoard from '../../components/FeedbackBoard/FeedbackBoard';

const ProductFeedback: React.FC = () => {
  return (
    <>
    <NavMob />
    <div className="product-feedback__container flex">
      <aside className="product-feedback__panels">
        <div className="product-feedback__panel logo-brand">
          Frontend Mentor
        </div>
        <div className="product-feedback__panel">
          
        </div>
        <div className="product-feedback__panel categories">
          <div className="categories__widget">
            
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