import React from "react";
import Suggestion from "../Suggestion/Suggestion";
import { RoadMapColumnProps } from "../../types/PropTypes/prop.types";
import { IProductRequest } from "../../types/AppData/appdata.types";

const RoadmapColumn: React.FC<RoadMapColumnProps> = ({
  name,
  description,
  items,
  columnColor,
}) => {
  return (
    <div className="roadmap-column__container">
      <div className="roadmap-column__header">
        <h2>
          {name} ({items.length})
        </h2>
        <p>{description}</p>
      </div>
      {items.map((item: IProductRequest) => {
        const { id, title, status, upvotes, description, comments, category } =
          item;
        return (
          <Suggestion
            key={id}
            id={id}
            title={title}
            status={status}
            upvotes={upvotes}
            description={description}
            comments={comments}
            category={category}
            page="roadmap"
          />
        );
      })}
    </div>
  );
};

export default RoadmapColumn;
