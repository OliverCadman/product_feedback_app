import { RouterType } from "../types/router/router.types";
import ProductFeedback from "./ProductFeedback";
import FeedbackDetail from "./FeedbackDetail";
import AddFeedback from "./AddFeedback";
import EditFeedback from "./EditFeedback";
import Roadmap from "./Roadmap";

const pagesData: RouterType[] = [
  {
    path: "",
    title: "Feedback Collection",
    element: <ProductFeedback />,
  },
  {
    path: "feedback-detail",
    title: "Feedback Detail",
    element: <FeedbackDetail />,
  },
  {
    path: "add-feedback",
    title: "Add Feedback",
    element: <AddFeedback />,
  },
  {
    path: "edit-feedback",
    title: "Edit Feedback",
    element: <EditFeedback />,
  },
  {
    path: "roadmap",
    title: "Roadmap",
    element: <Roadmap />,
  },
];

export default pagesData;
