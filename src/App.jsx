// 1. Import the HomePage component from the pages folder
import HomePage from "./pages/HomePage";
// 2. Import your global CSS so its styles apply across the app
import "./App.css";

// 3. Define the App component, which is the root of your React app
function App() {
  return (
    <>
      {/* 4. Render the HomePage component inside App */}
      <HomePage />
    </>
  );
}

// 5. Export App so it can be used by index.js (or other files)
export default App;
