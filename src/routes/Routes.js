import { lazy } from "react";
const Home = lazy(() => import("../pages/HomePage"));
import NotFound from "../components/NotFound";

const routes = [{ path: "/home", exact: true, name: "Home", component: Home }];
export { routes, NotFound };
