import Navbar from "@/components/Navbar";
import TweetCard from "@/components/TweetCard";
import React from "react";

const Quest = () => {
  return (
    <div className="h-screen bg-[url(/bg-image.png)] p-10">
      <Navbar />

      <div className="mt-50 w-[80%] grid grid-cols-3 gap-8 mx-auto ">
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </div>
    </div>
  );
};

export default Quest;
