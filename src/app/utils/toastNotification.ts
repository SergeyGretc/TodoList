import { toast } from "react-toastify";

export enum Positions {
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
  TOP_CENTER = "TOP_CENTER",
  BOTTOM_LEFT = "TOP_LEFT",
  BOTTOM_RIGHT = "TOP_RIGHT",
  BOTTOM_CENTER = "TOP_CENTER",
}

const pos = (type: Positions) => {
  return { position: toast.POSITION[type] };
};
export const toastNotification = (
  value: string,
  position: Positions = Positions.TOP_CENTER
) => {
  if (value === "success") {
    toast.success("Задача успешно создана", pos(position));
  }
  if (value === "delete") {
    toast.success("Задача успешно удалена", pos(position));
  }
};
