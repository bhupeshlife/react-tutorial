import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  // createRoot is a method that behind the scene creates a whole DOM replcation
  // Use PascalCase (also called UpperCamelCase) for React component filenames:
  <StrictMode>
    <App />
  </StrictMode>
);
