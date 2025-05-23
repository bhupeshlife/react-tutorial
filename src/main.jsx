import { StrictMode } from "react";
// We use PascalCase (first letter capitalized) for React component files and names.
import App from "./App";
import { createRoot } from "react-dom/client";

// 1. Grab the <div id="root"> element from our HTML.
const container = document.getElementById("root");

// 2. createRoot sets up a React rendering root inside that container.
const root = createRoot(container);

// 3. render our App component inside <StrictMode>, which helps catch common mistakes.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
