import { lazy, Suspense } from "react";
import MainPage from "../pages";

const baseRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<>loading...</>}>
        <MainPage />
      </Suspense>
    ),
  },
];

export default baseRoutes;
