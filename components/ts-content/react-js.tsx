import React from "react";

function Reactjs() {
  const topics = [
    "React Hooks",
    "Lifecycle Methods",
    "Components",
    "Context",
    "Props & State",
    "Virtual DOM",
  ];

  return (
    <div>
      <h3 className="bg-[#f6f6f7] dark:bg-[#202127] text-center text-[14px] font-semibold font-poppins text-[rgba(60,60,67,0.78)] dark:text-[rgba(235,235,245,0.6)] py-[8px] lg:py-[13px]">
        Essentials of React.js
      </h3>
      <div className="mt-1 flex flex-col gap-1">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 text-zinc-800 dark:text-white">
          {topics.map((topic, index) => (
            <h2
              key={index}
              className="h-[134px] lg:h-[184px] bg-[#f6f6f7] dark:bg-[#202127] hover:bg-[#efefef] dark:hover:bg-white hover:text-black dark:hover:text-black cursor-pointer w-full flex items-center justify-center font-kanit font-semibold text-center text-xl lg:text-3xl"
            >
              {topic}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reactjs;
