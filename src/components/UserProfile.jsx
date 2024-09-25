import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div className=" bg-dust h-40">
        <div className=" flex items-center justify-center">
          <div className=" bg-[#1c2936] h-24 w-24 rounded-full mt-32 border-2 border-dust"></div>
        </div>
      </div>
      <div className=" flex text-center items-center justify-center flex-col mt-24">
        <h2>Welcome</h2>
        <p>Connected To Address</p>
      </div>
    </div>
  );
};

export default UserProfile;
