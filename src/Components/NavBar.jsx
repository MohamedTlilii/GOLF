import React from "react";
import { SlArrowDown } from "react-icons/sl";

function NavBar() {
  return (
    <div>
      
      <ul className="navbar">
        <li>ABOUT</li>
        <li>MEMBERSHIP</li>
        <li>
          SERVICES <SlArrowDown style={{ fontSize: "10px" }} />
        </li>
        <li>COURSE</li>
        <li>EVENTS</li>
        <li>BLOG</li>
        <li>
          PAGES <SlArrowDown style={{ fontSize: "10px" }} />
        </li>
        <li>LOCATION</li>
      </ul>
    </div>
  );
}

export default NavBar;
