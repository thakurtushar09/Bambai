import NavButton from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-[url(/bg-image.png)] p-5">
      <Navbar />
      <div className="backdrop-blur-[1px] backdrop-saturate-[100%] bg-[#8B4DFF] bg-opacity-10 border border-opacity-20 border-[#2f1dbf] ml-[70%] mt-5 p-5 rounded-lg">
        <div className="flex items-center gap-5">
          <div className="">
            <Image
              src={"/image 4.png"}
              alt="profile"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-10">
            <NavButton text="696969XP" href="#" />
            <NavButton text="# 696969" href="#" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 mt-4 bg-white text-black rounded-md py-4">
          <h1 className="font-extrabold text-lg">Referral Link</h1>
          <input className="rounded-md bg-purple-300 w-[90%] p-3" />
          <button className="bg-black text-white px-4 py-2 rounded-lg font-extrabold hover:cursor-pointer">
            {" "}
            Copy Link
          </button>
        </div>

        <div className="mt-3 flex flex-col items-center">
          <h1 className="text-lg">10 XP per referral </h1>
          <Link
            href={"#"}
            className="mt-4 px-6 py-3 bg-white text-black font-bold rounded-xl shadow-[6px_6px_0px_black] border-2 border-[#2F195F]"
          >
            Connect Discord
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
