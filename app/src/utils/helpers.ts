import { IProductRequest } from "../types/AppData/appdata.types";

export const getImageURL = (name: string) => {
  return new URL(`${name}`, import.meta.url).href.replace("/utils", "");
};

export const filterFeatureRequests = (
  productRequests: IProductRequest[],
  title: string,
) => {
  return {
    productRequests: productRequests.filter((request: IProductRequest) => {
      return request.status.toLowerCase() === title.toLowerCase();
    }),
    status: title,
  };
};
