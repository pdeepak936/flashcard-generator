import React from "react";
import logo from "../image/Logo.png";

const Header = () => {
  return (
    <div className="container-flex sticky top-0 shadow-lg bg-white  ">
      <img className="p-2 ml-4 sm:w-auto w-10"src={logo} alt="logo" />
    </div>
  );
};
export default Header;