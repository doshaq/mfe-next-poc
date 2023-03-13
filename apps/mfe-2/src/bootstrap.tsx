import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routing/router-factory";
const mount = ({
  mountPoint,
  initialPathname,
}: {
  mountPoint: HTMLElement;
  initialPathname: string;
}) => {
  const router = createRouter({  initialPathname });
  const root = createRoot(mountPoint);
  root.render(<RouterProvider router={router}  />);
  return () => queueMicrotask(() => root.unmount());
};

export { mount };
