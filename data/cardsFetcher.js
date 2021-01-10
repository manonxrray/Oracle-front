import base from "./base";

export const getAllCards = () => base.get("/cards").then((res) => res.data);

export const getCardBySlug = (slug) =>
  base.get(`/cards/?slug=${slug}`).then((res) => res.data);
