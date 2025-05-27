import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const topics = [
    { label: "useState Topic", path: "/counter" },
    { label: "Props Topic", path: "/card" },
    { label: "Theme Topic", path: "/bg-changer" },
    { label: "Password Generator", path: "/password-generator" },
    { label: "Currency Converter", path: "/currency-converter" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        React Tutorial Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {topics.map(({ label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="w-full py-3 px-6 bg-black text-white font-semibold rounded-xl shadow-md hover:bg-gray-900 transition duration-300"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
