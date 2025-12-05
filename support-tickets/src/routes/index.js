import { parseRoutePath } from "../utils/parse-route-path.js";
import { tikets } from "./tikets.js";

export const routes = [...tikets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
