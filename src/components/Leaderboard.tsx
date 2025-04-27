import Image from "next/image";
import React from "react";

type LeaderProps = {
  rank: string;
  name: string;
  points: number;
  image?: string;
  alternateColor?: boolean;
};

const Leaderboard = ({ rank, name, points, image, alternateColor = false }: LeaderProps) => {
  const bgColor = alternateColor ? 'bg-[#E470E9]' : 'bg-[#8B4DFF]';
  
  return (
    <div className={`${bgColor} rounded-2xl p-4 border-2 border-black flex items-center justify-between`}>
      <div className="w-[30%] flex items-center justify-between pr-5">
        <h1 className="text-xl">{rank}</h1>
        <div className="flex gap-2 items-center">
          {image ? (
            <Image 
              src={image} 
              alt="profile" 
              height={50} 
              width={50}
              className="rounded-full"
            />
          ) : (
            <div className="w-[50px] h-[50px] rounded-full bg-gray-400/30"></div>
          )}
          <h1 className="text-xl font-bold min-w-[100px]">
            {name || "---"}
          </h1>
        </div>
      </div>

      <div className="w-[70%] text-center">
        <div className="ml-10">
          <h3 className="text-black font-bold">Points</h3>
          <h1 className="text-xl font-bold">
            {points || "---"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;