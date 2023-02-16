import { Outlet } from "react-router-dom";

import { route } from "./constants/route";

import { Main } from "../components/main/Main";
import { Convert, List } from "../pages";

export const appRoutes = [
  {
    path: "/",
    element: (
      <Main>
        <Outlet />
      </Main>
    ),

    children: [
      {
        path: route.LIST,
        element: <List />,
      },
      {
        path: route.CONVERTER,
        element: <Convert />,
      },
    ],
  },
];
