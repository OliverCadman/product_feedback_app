import { RouterType } from "../types/router/router.types";
import ProductFeedback from "./ProductFeedback/ProductFeedback";
import FeedbackDetail from "./FeedbackDetail/FeedbackDetail";
import AddFeedback from "./AddFeedback/AddFeedback";

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
];

export default pagesData;
