import React, { useState } from "react";

function BgChanger() {
  const [bgColor, setBgColor] = useState("Olive");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none px-4 py-1 rounded-lg text-white"
            style={{ backgroundColor: "Red" }}
            onClick={() => setBgColor("Red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-lg text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setBgColor("Green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-lg text-white"
            style={{ backgroundColor: "Blue" }}
            onClick={() => setBgColor("Blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
