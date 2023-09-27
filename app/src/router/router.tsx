import { Route, Routes } from "react-router-dom";
import { RouterType } from "../types/router/router.types";
import pagesData from "../pages/PagesData";

const Router = () => {
  const pageRoutes = pagesData.map((page: RouterType, index: number) => {
    const { path, title, element } = page;
    if (title.includes("Detail")) {
      return <Route path={`/:id`} element={element} key={index} />;
    } else if (title.includes("Add")) {
      return <Route path={`/${path}`} element={element} key={index} />;
    } else if (title.includes("Edit")) {
      return <Route path="/edit-feedback/:id" element={element} key={index} />;
    } else {
      return <Route path="/" element={element} key={index} />;
    }
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
