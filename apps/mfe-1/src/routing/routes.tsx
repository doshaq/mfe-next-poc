import React from "react";
import { Outlet, RouteObject } from "react-router-dom";
import { NavigationManager } from "../components/navigation-manager";
import App from "../pages/_app";
import OrderPage from "../pages/order";
import FormPage from "../pages/form";

export const routes = [
  {
    path: '/',
    element: (
      <App>
        <NavigationManager>
          <Outlet />
        </NavigationManager>
      </App>
    ),
    children: [
      {
        index:true,
        element: <OrderPage />,
      },
      {
        path: "form",
        element: <FormPage />,
      },
    ],
  },
];