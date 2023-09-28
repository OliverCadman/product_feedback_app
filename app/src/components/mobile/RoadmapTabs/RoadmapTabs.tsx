import React from "react";
import { RoadMapTabProps } from "../../../types/PropTypes/prop.types";
import { IStatusListItem } from "../../../types/AppData/appdata.types";

const RoadmapTabs: React.FC<RoadMapTabProps> = ({
  statusList,
  setSelectedStatus,
}) => {
  return (
    <menu className="flex roadmap-tab__container">
      {statusList.map((status: IStatusListItem) => {
        return (
          <li key={status.id}>
            <button
              type="button"
              className={status.selected ? "active" : ""}
              onClick={() => setSelectedStatus(status)}
            >
              {status.title}
            </button>
          </li>
        );
      })}
    </menu>
  );
};

export default RoadmapTabs;
