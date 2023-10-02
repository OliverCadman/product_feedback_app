import React from "react";
import { Link } from "react-router-dom";
import { UseAppContext } from "../../../context/AppDataContext";
import {
  IProductRequest,
  IStatusListItem,
} from "../../../types/AppData/appdata.types";
import { filterFeatureRequests } from "../../../utils/helpers";

const Roadmap: React.FC = () => {
  const { state } = UseAppContext();

  return (
    <div className="product-feedback__panel widget-container">
      <div className="roadmap__header flex row-between align-center">
        <h2>Roadmap</h2>
        <Link to="roadmap" className="roadmap__link">
          View
        </Link>
      </div>
      <div className="roadmap__items">
        <ul className="roadmap__items-list">
          {state.statuses.map((status: IStatusListItem) => {
            const { id, title, color } = status;

            const filteredFeatureRequest = filterFeatureRequests(
              state.data.productRequests,
              title,
            );
            return (
              <li key={id}>
                <div className="flex row-between">
                  <p>
                    <span
                      className="colored-circle"
                      style={{ backgroundColor: color }}
                    ></span>
                    {title}
                  </p>
                  <p>{filteredFeatureRequest.productRequests.length}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
