import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import { routes, NotFound } from "./routes/Routes";
import Loader from "./components/Loader";
// 2. Import your global CSS so its styles apply across the app
import "./App.css";

// 3. Define the App component, which is the root of your React app
function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {routes.map(({ path, component: Component }, idx) => (
            <Route key={idx} path={path} element={(<Component />)} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// 5. Export App so it can be used by index.js (or other files)
export default App;
