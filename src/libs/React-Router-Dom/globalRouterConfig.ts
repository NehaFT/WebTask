import baseRoutes from "../../routes/base_route";
import { createBrowserRouter } from "react-router-dom";

const globalRouterConfig = createBrowserRouter([
  {
    path: "/",
    children: baseRoutes,
  },
]);

export { globalRouterConfig };
