import Leaderboard from '@/components/Leaderboard'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  const sampleData = [
    { name: "Garcia", points: 696969, image: "/image 4.png" },
  ];
  const leaderboardData = Array(100).fill(null).map((_, index) => {
    return sampleData[index] 
      ? { 
          rank: index + 1,
          ...sampleData[index]
        }
      : {
          rank: index + 1,
          name: "",
          points: 0,
          image: ""
        };
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="fixed inset-0 bg-[url(/bg-image.png)] bg-cover bg-center z-0" />

      <div className="fixed top-4 left-4 right-4 z-20">
        <Navbar />
      </div>
      
      <div className="relative z-10 pt-20 h-full overflow-y-auto">
        <div className="min-h-screen mt-[15%] p-8">
          <h1 className='text-5xl font-extrabold ml-[15%] mb-8'>Leaderboard</h1>
          
          <div className="w-[70%] mx-auto"> 
            {leaderboardData.map((entry, index) => (
              <Leaderboard
                key={index}
                rank={`#${entry.rank}`}
                name={entry.name}
                points={entry.points}
                image={entry.image}
                alternateColor={index % 2 === 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page