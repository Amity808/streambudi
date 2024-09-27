import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div className=" bg-dust h-40">
        <div className=" flex items-center justify-center">
          <div className=" bg-[#1c2936] h-24 w-24 rounded-full mt-32 border-2 border-dust">
            <img src="profileimg.png" alt="" />
          </div>
        </div>
      </div>
      <div className=" flex text-center items-center justify-center flex-col mt-24">
        <p className=" text-5xl font-bold mt-5">Ayo Jonathan</p>
        <p className=" text-xl font-normal mt-5">@ayomight</p>
        <p className=" mt-3">Address</p>

        <p className=" mt-2">Uzbekistan, Tashkent</p>
        <p className=" mt-2">Email: streambudi@gmail.com</p>
      </div>
    </div>
  );
};

export default UserProfile;
