import NavButton from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Store = () => {
  return (
    <div className="h-screen bg-[url(/bg-image.png)] p-10">
      <Navbar />

      <div className="mt-12">
        <NavButton text="Items" href="#" />
        <div className="flex flex-col w-[20vw] mt-10">

          <div className="bg-[#8B4DFF] w-[20vw] p-4 border-4 border-black rounded-3xl">
            <div className="relative h-[250px]">
              <div className="absolute left-0 top-0 z-20">
                <Image
                  src={"/ticket1.png"}
                  alt="ticket-image"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>

              <div className="absolute right-0 bottom-0 z-10">
                <Image
                  src={"/ticket2.png"}
                  alt="ticket-image"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>

              <h1 className="absolute bottom-0 left-0 right-0 text-center font-bold text-black">
                1000XP
              </h1>
            </div>
          </div>

          <div className="mt-4 mx-auto">
            <NavButton text="Locked" href="#" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Store;
