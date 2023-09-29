import React from "react";
import SharedNavBanner from "../../components/SharedNavBanner/SharedNavBanner";
import RoadmapTabs from "../../components/mobile/RoadmapTabs/RoadmapTabs";
import { UseAppContext } from "../../context/AppDataContext";
import { IStatusListItem } from "../../types/AppData/appdata.types";

const Roadmap = () => {
  const { state, dispatch } = UseAppContext();

  const setSelectedStatus = (item: IStatusListItem, index: number) => {
    dispatch({ type: "SET_SELECTED_STATUS", payload: item });

    setTabIndex(index);
  };

  const setTabIndex = (index: number) => {
    console.log(index);
    dispatch({ type: "SET_ACTIVE_TAB_INDEX", payload: index });
  };

  return (
    <div className="roadmap__container main-bg">
      <SharedNavBanner
        historyPath="/"
        hasAccompanyingButton={true}
        isRoadmapPage={true}
        urlPath="/add-feedback"
      />
      <div className="hide-md">
        <RoadmapTabs
          setSelectedStatus={setSelectedStatus}
          statusList={state.statuses}
          activeTabIndex={state.activeTabIndex}
        />
      </div>
    </div>
  );
};

export default Roadmap;
