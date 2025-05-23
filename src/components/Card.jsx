import React from "react";

// 1. We use destructuring to pull out the props we need:
//    userDetail is an object, myObject could be any data, myArray is an array.
function Card({ userDetail, myObject, myArray }) {
  // 2. You can log props to see what’s inside them:
  console.log("userDetail:", userDetail);
  console.log("myObject:", myObject);
  console.log("myArray:", myArray);

  return (
    // 3. A container div for the card, with Tailwind CSS classes for styling
    <div className="w-60 flex flex-col rounded-xl bg-gray-300 min-h-[19rem]">
      
      {/* 4. Image section */}
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="Sample NFT"
          className="object-cover object-center rounded-t-xl"
        />
      </div>

      {/* 5. Text section */}
      <div className="flex flex-col py-3 px-3 pb-10">
        {/* 5a. Name */}
        <h1 className="font-bold">{userDetail.name}</h1>
        
        {/* 5b. Age and City side by side */}
        <div className="flex justify-between">
          <p>Age: {userDetail.age}</p>
          <p>City: {userDetail.address.city}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
