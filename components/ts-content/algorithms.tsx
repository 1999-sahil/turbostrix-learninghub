import React from 'react'

function Algorithms() {
    const topics = [
        "Sorting",
        "Searching",
        "Recursion",
        "Backtracking",
        "Greedy",
        "Divide & Conquer",
        "Dynamic Programming",
        "Pattern Searching",
        "Two Pointers",
        "Sliding Window",
        "",
        ""
      ];
    
      return (
        <div>
          <h3 className="bg-[#f6f6f7] dark:bg-[#202127] text-center text-[14px] font-semibold font-poppins text-[rgba(60,60,67,0.78)] dark:text-[rgba(235,235,245,0.6)] py-[8px] lg:py-[13px]">
            Types of Algorithms
          </h3>
          <div className="mt-1 flex flex-col gap-1">
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-1 text-zinc-800 dark:text-white">
              {topics.map((topic, index) => (
                <h2
                  key={index}
                  className="h-[104px] lg:h-[144px] bg-[#f6f6f7] dark:bg-[#202127] hover:bg-[#efefef] dark:hover:bg-white hover:text-black dark:hover:text-black cursor-pointer w-full flex items-center justify-center font-kanit font-semibold text-center text-sm md:text-base lg:text-xl xl:text-2xl"
                >
                  {topic}
                </h2>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Algorithms