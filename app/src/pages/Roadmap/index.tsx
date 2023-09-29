import React from "react";
import SharedNavBanner from "../../components/SharedNavBanner/SharedNavBanner";
import RoadmapTabs from "../../components/mobile/RoadmapTabs/RoadmapTabs";
import { UseAppContext } from "../../context/AppDataContext";
import {
  IProductRequest,
  IStatusListItem,
} from "../../types/AppData/appdata.types";
import RoadmapColumn from "../../components/Roadmap/RoadmapColumn";

const Roadmap = () => {
  const { state, dispatch } = UseAppContext();

  const setSelectedStatus = (item: IStatusListItem, index: number) => {
    dispatch({ type: "SET_SELECTED_STATUS", payload: item });

    setTabIndex(index);
  };

  const setTabIndex = (index: number) => {
    dispatch({ type: "SET_ACTIVE_TAB_INDEX", payload: index });
  };

  const filterFeatureRequests = (
    productRequests: IProductRequest[],
    title: string,
  ) => {
    return productRequests.filter((request: IProductRequest) => {
      return request.status.toLowerCase() === title.toLowerCase();
    });
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
      <section className="roadmap-column__container flex">
        {state.statuses.map((status: IStatusListItem) => {
          const { id, title, description } = status;
          const plannedFeatures = filterFeatureRequests(
            state.data.productRequests,
            title,
          );
          return (
            <RoadmapColumn
              key={id}
              description={description}
              name={title}
              items={plannedFeatures}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Roadmap;
