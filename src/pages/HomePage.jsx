import React from "react";
import Counter from "../components/Counter";
import Card from "../components/card";

function HomePage() {
  let myObject = {
    name: "Bhupesh",
    age: 23,
    address: {
      city: "Nagpur",
      state: "Maharashtra",
    },
  };

  let myArray = [1, 2, 3, 4, 5];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Counter />
      <Card userName="Bhupesh" myObject={myObject} myArray={myArray} />
      {/* userName=Bhupesh is a props which i passed to <Card/> component */}
      {/* myObject={myObject} is a props which i passed to <Card/> component */}
      {/* myArray={myArray} is a props which i passed to <Card/> component */}
      {/* <Card/> is component that is imported from (import Card from "./components/card";) */}
    </div>
  );
}

export default HomePage;
