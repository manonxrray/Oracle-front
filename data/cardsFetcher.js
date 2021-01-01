import base from "./base";

export const getAllCards = () => base.get("/cards").then((res) => res.data);

export const getCardByNumber = (number) =>
  base.get(`/cards/${number}`).then((res) => res.data);
