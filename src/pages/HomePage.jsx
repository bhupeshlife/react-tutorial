import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); // ✅ Create navigate function
  return (
    // 4. Return your page layout. Here we use Tailwind CSS classes
    <div className="flex flex-row items-center justify-center min-h-screen gap-5 p-5">
      <button
        className="border rounded-lg p-2 bg-gray-500 text-white"
        onClick={() => navigate("/counter")}
      >
        Counter Page
      </button>
      <button
        className="border rounded-lg p-2 bg-gray-500 text-white"
        onClick={() => navigate("/card")}
      >
        Card Page
      </button>
    </div>
  );
}

// 7. Export HomePage so other files (like App.jsx) can import and display it
export default HomePage;
