import {
  ICategoryListItem,
  IProductRequest,
} from "../types/AppData/appdata.types";

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

export const filterFeatureCategories = (
  categories: ICategoryListItem[],
  productRequestCategory: string,
) => {
  return categories.filter((category: ICategoryListItem) => {
    return (
      category.title.toLowerCase() === productRequestCategory.toLowerCase()
    );
  });
};

export const findItem = (itemList: IProductRequest[], id: string) => {
  const item = itemList.find((request: IProductRequest) => {
    return request.id === id;
  });

  if (item) return item;

  return false;
};

export const removeItem = (
  itemList: IProductRequest[],
  item: IProductRequest | undefined,
) => {
  if (!item) return;
  let index = itemList.indexOf(item);
  itemList.splice(index, 1);

  return itemList;
};
