import React from "react";

function Card({ userDetail, myObject, myArray }) {
  console.log("userName", userDetail);
  console.log("myObject", myObject);
  console.log("myArray", myArray);
  //   In above Card function, { userName, myObject, myArray } is an object that contains all the properties passed to the component
  //   In react, we can also use destructuring to get the properties of the object
  //   function Card(props) {return ()}
  //   In above Card function, props is an object that contains all the properties passed to the component
  //   console.log("props", props);

  return (
    <div className="w-60 flex flex-col rounded-xl bg-gray-300 min-h-[19rem] ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold  ">{userDetail.name}</h1>
          
        </div>
        <div className="flex  justify-between">
          <p>{userDetail.age}</p>
          <p>{userDetail.address.city}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
