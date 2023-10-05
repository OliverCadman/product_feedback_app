import SharedNavBanner from "../../components/SharedNavBanner/SharedNavBanner";
import RoadmapTabs from "../../components/mobile/RoadmapTabs/RoadmapTabs";
import { UseAppContext } from "../../context/AppDataContext";
import {
  IProductRequest,
  IStatusListItem
} from "../../types/AppData/appdata.types";
import RoadmapColumn from "../../components/Roadmap/RoadmapColumn";
import { UseSidebarClose } from "../../hooks/UseSidebarClose";
import { filterFeatureRequests } from "../../utils/helpers";
import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  closestCenter,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent
} from "@dnd-kit/core";
import { DragOverlay } from "@dnd-kit/core";
import Suggestion from "../../components/Suggestion/Suggestion";
import { nanoid } from "nanoid";

const Roadmap = () => {
  const { state, dispatch } = UseAppContext();

  // Closes home page sidebar upon navigating to this page.
  UseSidebarClose();

  const setSelectedStatus = (item: IStatusListItem, index: number) => {
    dispatch({ type: "SET_SELECTED_STATUS", payload: item });

    setTabIndex(index);
  };

  const setTabIndex = (index: number) => {
    dispatch({ type: "SET_ACTIVE_TAB_INDEX", payload: index });
  };

  const handleDragStart = (e: DragStartEvent) => {
    const { active } = e;

    const draggedItem = state.data.productRequests.find(
      (request: IProductRequest) => {
        return request.id === active.id;
      }
    );

    if (!draggedItem) return;

    const { id, title, category, upvotes, comments, status } = draggedItem;

    dispatch({
      type: "ACTIVATE_DRAG",
      payload: {
        id,
        title,
        category,
        upvotes,
        comments,
        status
      }
    });
  };

  const handleDragOver = (e: DragOverEvent) => {
    const { active, over } = e;

    const [activeContainerId, overContainerId] = [
      active?.data?.current?.sortable?.containerId,
      over?.data?.current?.sortable?.containerId || over?.data?.current?.id
    ];

    if (activeContainerId && overContainerId) {
      if (activeContainerId === overContainerId) {
        return;
      }
      dispatch({
        type: "SET_REQUEST_STATUS",
        payload: {
          updatedStatus: over?.data?.current?.status,
          requestId: active?.data?.current?.id
        }
      });
    }
  };

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    const [activeContainerId, overContainerId] = [
      active?.data?.current?.sortable?.containerId,
      over?.data?.current?.sortable?.containerId
    ];

    console.log(over);
  };

  const activationConstraints = {
    delay: 150,
    tolerance: 3
  };

  const dragSensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: activationConstraints }),
    useSensor(TouchSensor, { activationConstraint: activationConstraints })
  );

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={dragSensors}
    >
      <div className="roadmap__container main-bg">
        <SharedNavBanner
          historyPath="/product_feedback_app/"
          hasAccompanyingButton={true}
          isRoadmapPage={true}
          urlPath="/product_feedback_app/add-feedback"
        />
        <div className="hide-md">
          <RoadmapTabs
            setSelectedStatus={setSelectedStatus}
            statusList={state.statuses}
            activeTabIndex={state.activeTabIndex}
          />
          {state.statuses.map((status: IStatusListItem) => {
            if (status.selected) {
              const plannedFeatures = filterFeatureRequests(
                state.data.productRequests,
                status.title
              );
              const { id, title, description, color } = status;
              return (
                <RoadmapColumn
                  key={id}
                  id={id}
                  description={description}
                  name={title}
                  items={plannedFeatures.productRequests}
                  columnColor={color}
                />
              );
            }
          })}
        </div>
        <section className="roadmap__wrapper hide-sm">
          {state.statuses.map((status: IStatusListItem) => {
            const { id, title, description, color } = status;
            const plannedFeatures = filterFeatureRequests(
              state.data.productRequests,
              title
            );
            const columnId = nanoid();
            return (
              <RoadmapColumn
                key={id}
                id={id}
                description={description}
                name={title}
                items={plannedFeatures.productRequests}
                columnColor={color}
              />
            );
          })}
        </section>
      </div>
      <DragOverlay>
        <Suggestion
          dragStyle={{ opacity: 0.8, listStyle: "none" }}
          id={state.draggedItem?.data.id || "1"}
          title={state.draggedItem?.data.title}
          status={state.draggedItem?.data.status}
          category={state.draggedItem?.data.category}
          comments={state.draggedItem?.data.comments}
          upvotes={state.draggedItem?.data.upvotes}
          index={undefined}
        ></Suggestion>
      </DragOverlay>
    </DndContext>
  );
};

export default Roadmap;
