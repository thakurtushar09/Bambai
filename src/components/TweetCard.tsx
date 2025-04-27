import React from 'react';
import NavButton from './Button';

const TweetCard = () => {
  return (
    <div className="flex flex-col items-center w-full mt-5 ">
      <div className="bg-[#8B4DFF] h-[20vh] border-2 border-black rounded-2xl w-full p-4 flex flex-col items-center justify-center relative">
        <div className="absolute top-4 left-4">
          <button className="px-4 py-2 bg-white text-black font-bold rounded-xl shadow-[6px_6px_0px_black] border-2 border-[#2F195F]">Items</button>
        </div>
        <div className="text-center font-extrabold text-2xl text-black mt-8">
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
