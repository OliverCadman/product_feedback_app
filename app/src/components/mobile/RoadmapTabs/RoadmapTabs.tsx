import React from "react";
import { RoadMapTabProps } from "../../../types/PropTypes/prop.types";
import { IStatusListItem } from "../../../types/AppData/appdata.types";

const RoadmapTabs: React.FC<RoadMapTabProps> = ({
  statusList,
  setSelectedStatus,
  activeTabIndex,
}) => {
  const underlineStyles =
    activeTabIndex === 0
      ? "underline-1"
      : activeTabIndex === 1
      ? "underline-2"
      : activeTabIndex === 2
      ? "underline-3"
      : "";

  return (
    <menu className={`flex roadmap-tab__container ${underlineStyles}`}>
      {statusList.map((status: IStatusListItem, index: number) => {
        return (
          <li key={status.id}>
            <button
              type="button"
              className={status.selected ? "active" : ""}
              onClick={() => setSelectedStatus(status, index)}
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
