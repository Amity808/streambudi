import React, { useState } from "react";

const ManageApi = () => {
  // const [isEditable, setIsEditable] = useState(false)
  // const [apiKey, setapiKey] = useState("")

  // const toggleEditable = () => {
  //     setIsEditable(!isEditable)
  // }

  return (
    <div className=" m-5">
      <h1 className=" text-2xl font-medium">Manage your api keys here</h1>
      <div className=" mt-8">
        <p>Generate Api key for your appilication</p>
        <div className=" mt-3">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className=" mt-16">
          <p className=" text-2xl mb-5">Generate your api key</p>
          <span className=" border-2 border-dust p-2 mt-2 rounded-md">
            Generated key: xxxxxxxxxxx
          </span>{" "}
          <br />
          <button
            className="btn btn-active mt-5"
            data-aos="zoom-out"
            data-aos-duration="3000"
          >
            Generate Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageApi;
