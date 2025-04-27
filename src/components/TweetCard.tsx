import React from 'react';
import NavButton from './Button';

const TweetCard = () => {
  return (
    <div className="flex flex-col items-center w-full mt-5 ">
      <div className="bg-[#8B4DFF] h-[20vh] border-2 border-black rounded-2xl w-full p-6 flex flex-col items-center justify-center relative">
        <div className="absolute top-4 left-4">
          <NavButton text="10 XP" href="#" />
        </div>
        <div className="text-center font-extrabold text-2xl text-black">
          Like: Lendi Land Tweet
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <NavButton text="View Tweet" href="#" />
        <NavButton text="Verify Tweet" href="#" />
      </div>
    </div>
  );
};

export default TweetCard;
