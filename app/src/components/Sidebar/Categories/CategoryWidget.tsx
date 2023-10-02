import React from "react";
import { UseAppContext } from "../../../context/AppDataContext";

const CategoryWidget: React.FC = () => {
  const { state } = UseAppContext();
  return (
    <div className="product-feedback__panel widget-container categories">
      <div className="categories__widget-wrapper flex">
        <button className="category__widget" type="button">
          All
        </button>
        {state.categories.map((category, i) => {
          console.log(category);
          return (
            <button className="category__widget" type="button" key={i}>
              {category.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryWidget;
