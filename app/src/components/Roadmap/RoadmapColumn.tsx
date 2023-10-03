import React from "react";
import Suggestion from "../Suggestion/Suggestion";
import { RoadMapColumnProps } from "../../types/PropTypes/prop.types";
import { IProductRequest } from "../../types/AppData/appdata.types";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

const RoadmapColumn: React.FC<RoadMapColumnProps> = ({
  name,
  description,
  items,
  columnColor,
  id,
}) => {
  const { setNodeRef } = useDroppable({ id, data: { id, status: name } });

  return (
    <SortableContext
      id={id.toString()}
      strategy={verticalListSortingStrategy}
      items={items}
    >
      <div className="roadmap-column__container" ref={setNodeRef}>
        <div className="roadmap-column__header">
          <h2>
            {name} ({items.length})
          </h2>
          <p>{description}</p>
        </div>
        {items.map((item: IProductRequest, index: number) => {
          const {
            id,
            title,
            status,
            upvotes,
            description,
            comments,
            category,
          } = item;
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
              color={columnColor}
              index={index}
              page="roadmap"
            />
          );
        })}
      </div>
    </SortableContext>
  );
};

export default RoadmapColumn;
