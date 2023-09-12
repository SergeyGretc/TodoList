export const getDataFromLocalStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key) || "[]");
