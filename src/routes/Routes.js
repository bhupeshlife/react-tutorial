import { lazy } from "react";
const Home = lazy(() => import("../pages/HomePage"));
const Counter = lazy(() => import("../components/Counter"));
const Card = lazy(() => import("../pages/CardContent"));
import NotFound from "../components/NotFound";

const routes = [
  { path: "/home", exact: true, name: "Home", component: Home },
  { path: "/counter", exact: true, name: "Counter", component: Counter },
  { path: "/card", exact: true, name: "Card", component: Card },
];
export { routes, NotFound };
