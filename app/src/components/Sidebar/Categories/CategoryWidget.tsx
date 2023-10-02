import React from "react";
import { UseAppContext } from "../../../context/AppDataContext";

const CategoryWidget: React.FC = () => {
  const { state, dispatch } = UseAppContext();
  return (
    <div className="product-feedback__panel widget-container categories">
      <div className="categories__widget-wrapper flex">
        {state.categories.map((category, i) => {
          const { id, title, selected } = category;
          return (
            <button
              className={`category__widget ${selected ? "active" : ""}`}
              type="button"
              key={i}
              onClick={() => {
                dispatch({
                  type: "SET_SELECTED_CATEGORY",
                  payload: { id, title },
                });
              }}
            >
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryWidget;
