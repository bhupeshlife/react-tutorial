import { lazy } from "react";
const Home = lazy(() => import("../pages/HomePage"));
const Counter = lazy(() => import("../components/Counter"));
const Card = lazy(() => import("../pages/CardContent"));
const BgChanger = lazy(() => import("../components/BgChanger"));
const PasswordGenerator = lazy(() => import("../components/PasswordGenerator"));
const CurrencyConverter = lazy(() => import("../components/currency-converter/CurrencyConverter"));
import NotFound from "../components/NotFound";

const routes = [
  { path: "/home", exact: true, name: "Home", component: Home },
  { path: "/counter", exact: true, name: "Counter", component: Counter },
  { path: "/card", exact: true, name: "Card", component: Card },
  { path: "/bg-changer", exact: true, name: "BgChanger", component: BgChanger },
  {
    path: "/password-generator",
    exact: true,
    name: "PasswordGenerator",
    component: PasswordGenerator,
  },
  {
    path: "/currency-converter",
    exact: true,
    name: "CurrencyConverter",
    component: CurrencyConverter,
  },
];
export { routes, NotFound };
