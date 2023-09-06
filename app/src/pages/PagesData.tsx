import { RouterType } from "../types/router/router.types";
import ProductFeedback from "./ProductFeedback/ProductFeedback";
import FeedbackDetail from "./FeedbackDetail/FeedbackDetail";

const pagesData: RouterType[] = [
    {
        path: "",
        title: "Feedback Collection",
        element: <ProductFeedback />
    },
    {
        path: "feedback-detail",
        title: "Feedback Detail",
        element: <FeedbackDetail />
    }
]

export default pagesData;