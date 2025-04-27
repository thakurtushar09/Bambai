import Image from "next/image";
import React from "react";
import NavButton from "./Button";

const Navbar = () => {
  return (
    <div className="w-[90%] flex items-center justify-between">
      <div className="">
        <Image src={"/logo.png"} alt="logo" height={200} width={200} />
      </div>

      <div className="flex items-center gap-7">

      <NavButton text="Quest" href="/Quest"/>
      <NavButton text="Leaderboard" href="Leaderboard"/>
      <NavButton text="Store" href="/Store"/>

      </div>

      <div className="">
      <NavButton text="Connect X" href="/"/>
      </div>
    </div>
  );
};

export default Navbar;
