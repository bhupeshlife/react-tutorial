import React, { useState } from "react";

function BgChanger() {
  const [bgColor, setBgColor] = useState("red");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3"></div>
      </div>
    </div>
  );
}

export default BgChanger;
