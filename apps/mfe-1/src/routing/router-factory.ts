import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";

interface CreateRouterProps {
  initialPathname: string;
}

export function createRouter({
  initialPathname,
}: CreateRouterProps) {
    return createBrowserRouter(
      routes,
      {
        basename:initialPathname
      }
    );
  
}
