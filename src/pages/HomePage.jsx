// 1. Always import React when writing JSX
import React from "react";
// 2. Import any child components you plan to use
import Counter from "../components/Counter";
import Card from "../components/Card";

function HomePage() {
  // 3. Prepare any data you want to pass into your components as props
  const userDetail = {
    name: "Bhupesh",
    age: 23,
    address: {
      city: "Nagpur",
    },
  };

  const myArray = [1, 2, 3, 4, 5];

  return (
    // 4. Return your page layout. Here we use Tailwind CSS classes
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 p-5">
      
      {/* 5. Show a simple counter */}
      <Counter />

      {/*
        6. Render the Card component and give it three props:
           - userName: a simple string
           - userDetail: the object we made above
           - myArray: the number array we made above
      */}
      <Card
        userName="Bhupesh"
        userDetail={userDetail}
        myArray={myArray}
      />
    </div>
  );
}

// 7. Export HomePage so other files (like App.jsx) can import and display it
export default HomePage;
