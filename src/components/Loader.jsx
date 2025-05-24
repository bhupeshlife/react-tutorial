import React from "react";

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white text-black">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      <p className="text-lg font-medium">Loading...</p>
    </div>
  </div>
);

export default Loader;
