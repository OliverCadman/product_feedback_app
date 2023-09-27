import { SetStateAction } from "react";

export const checkFormValidity = (
  input: string,
  dispatch: React.Dispatch<SetStateAction<any>>,
  dispatchParams: Record<string, string | null>,
) => {
  if (!input) {
    dispatch(dispatchParams);
    return false;
  }
  return true;
};
