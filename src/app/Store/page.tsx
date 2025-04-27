import NavButton from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Store = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="fixed inset-0 bg-[url(/bg-image.png)] bg-cover bg-center z-0" />
      
      <div className="fixed top-4 left-4 right-4 z-20">
        <Navbar />
      </div>

      <div className="relative z-10 pt-20 h-full overflow-y-auto p-10">
        <div className="mt-24">
          <button className="px-6 py-3 bg-white text-black font-bold rounded-xl shadow-[6px_6px_0px_black] border-2 border-[#2F195F]">Items</button>
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
    </div>
  );
};

export default Store;