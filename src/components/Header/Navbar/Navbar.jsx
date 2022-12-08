import HomeIcon from "./homeIcon/HomeIcon";
import Info from "../info/info";
import { useState } from "react";
const Navbar = () => {
    const isActive = false;
  return (
    <>
      {/* <HomeIcon />
      <HomeIcon />*/}
      {isActive === true ? <HomeIcon /> : <h1>didnt happen</h1>}
      <HomeIcon />

    <Info />
    </>
  );
};

export default Navbar;
