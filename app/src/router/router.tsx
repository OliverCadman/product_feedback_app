import { Route, Routes } from "react-router-dom";
import { RouterType } from "../types/router/router.types";
import pagesData from "../pages/PagesData";

const Router = () => {
  const pageRoutes = pagesData.map((page: RouterType, index: number) => {
    const { path, title, element } = page;
    if (title.includes("Detail")) {
      return (
        <Route
          path={`/product_feedback_app/:id`}
          element={element}
          key={index}
        />
      );
    } else if (title.includes("Add")) {
      return (
        <Route
          path={`/product_feedback_app/${path}`}
          element={element}
          key={index}
        />
      );
    } else if (title.includes("Edit")) {
      return (
        <Route
          path="/product_feedback_app/edit-feedback/:id"
          element={element}
          key={index}
        />
      );
    } else if (title.includes("Roadmap")) {
      return (
        <Route
          path="/product_feedback_app/roadmap"
          element={element}
          key={index}
        />
      );
    } else {
      return (
        <Route path="/product_feedback_app/" element={element} key={index} />
      );
    }
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
