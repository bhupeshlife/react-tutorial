import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

function CardContent() {
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
    <div className="flex flex-row items-center justify-center min-h-screen gap-5 p-5">
      {/*
        6. Render the Card component and give it three props:
           - userName: a simple string
           - userDetail: the object we made above
           - myArray: the number array we made above
      */}
      <Card userName="Bhupesh" userDetail={userDetail} myArray={myArray} />
    </div>
  );
}

// 7. Export HomePage so other files (like App.jsx) can import and display it
export default CardContent;
