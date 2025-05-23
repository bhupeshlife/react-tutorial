import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  // useState() hook that allows you to add or perform state management in UI.
  // setCounter is the Function which control the countre value (counter is a variable)

  const addValue = () => {
    counter = counter + 1;
    if (counter > 20) {
      alert("Counter cannot be greater than 20");
      counter = 20;
    }
    setCounter(counter);
    // setCounter is a function that updates the state variable counter
    console.log("Counter after addValue", counter);
  };

  const removeValue = () => {
    counter = counter - 1;
    if (counter < 0) {
      alert("Counter cannot be less than 0");
      counter = 0;
    }
    setCounter(counter);
    // setCounter is a function that updates the state variable counter
    console.log("Counter after removeValue", counter);
  };

  return (
     <div className="font-sans max-w-[300px] mx-auto mt-10 p-5 border border-gray-300 rounded-xl text-center bg-gray-100">
      <h1 className="text-gray-800 text-2xl mb-5">Counter Component</h1>
      <p className="text-lg mb-5">Current count: {counter}</p>

      <button
        className="px-5 py-2 mb-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer"
        onClick={addValue}
      >
        Add Value
      </button>
      <br />
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
