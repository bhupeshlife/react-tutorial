import { useState } from "react";

function Counter() {
  // 1. Declare a state variable "counter" starting at 0,
  //    and a function "setCounter" to update it.
  let [counter, setCounter] = useState(0);

  // 2. Handler to increase the counter
  const addValue = () => {
    if (counter > 20) {
      alert("Counter cannot be greater than 20");
      counter = 20;
    }
    setCounter(counter + 1);
    // setCounter is a function that updates the state variable counter
    console.log("Counter after addValue", counter);
  };

  // 3. Handler to decrease the counter
  const removeValue = () => {
    if (counter < 0) {
      alert("Counter cannot be less than 0");
      counter = 0;
    }
    setCounter(counter - 1);
    // setCounter is a function that updates the state variable counter
    console.log("Counter after removeValue", counter);
  };

  // 4. Render the UI
  return (
    <div className="font-sans max-w-[300px] mx-auto mt-10 p-5 border border-gray-300 rounded-xl text-center bg-gray-100">
      {/* Title */}
      <h1 className="text-gray-800 text-2xl mb-5">Counter Component</h1>

      {/* Display current count */}
      <p className="text-lg mb-5">Current count: {counter}</p>

      {/* Button to add */}
      <button
        className="px-5 py-2 mb-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer"
        onClick={addValue}
      >
        Add Value
      </button>
      <br />

      {/* Button to remove */}
      <button
        className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer"
        onClick={removeValue}
      >
        Remove Value
      </button>
    </div>
  );
}

export default Counter;
