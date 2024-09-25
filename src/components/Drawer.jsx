import React, { useState } from "react";
import UserProfile from "./UserProfile";
import ManageApi from "./ManageApi";

const Drawer = () => {
    const [active, setActive] = useState("userprofile");

    const handleActiveChange = (section) => {
        setActive(section);
      };
    
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here  */}
          <div className="">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-dust drawer-button lg:hidden ml-4"
          >
            Side Bar
          </label>
          </div>
          
          <div className="">
            {active === "userprofile" && <UserProfile />}
            {active === "manageapi" && <ManageApi />}
            
          </div>
          
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          > </label>
          <ul className="menu bg-base-200 text-dust min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a onClick={() => handleActiveChange('userprofile')}>User Profile</a>
            </li>
            <li>
              <a onClick={() => handleActiveChange('manageapi')}>Manage API Key</a>
            </li>
            <li>
              <a>Manage Plugins</a>
            </li>
            <li>
              <a>Stats</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
