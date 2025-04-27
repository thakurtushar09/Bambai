import Navbar from "@/components/Navbar";
import TweetCard from "@/components/TweetCard";
import React from "react";

const Quest = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="fixed inset-0 bg-[url(/bg-image.png)] bg-cover bg-center z-0" />
      <div className="fixed top-4 left-4 right-4 z-20">
        <Navbar />
      </div>
      
      <div className="relative z-10 pt-20 h-full overflow-y-auto "> 
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto py-10 mt-36">
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </div>
      </div>
    </div>
  );
};

export default Quest;