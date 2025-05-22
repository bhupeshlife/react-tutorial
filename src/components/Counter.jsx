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
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "300px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
        Counter Component
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Current count: {counter}
      </p>
      {/* {counter} is evaluation expression */}
      <button
        style={{
          padding: "10px 20px",
          marginBottom: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={addValue}
      >
        Add Value
      </button>
      <br />
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={removeValue}
      >
        Remove Value
      </button>
    </div>
  );
}

export default Counter;
