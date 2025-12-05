import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";

export const tikets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
];
