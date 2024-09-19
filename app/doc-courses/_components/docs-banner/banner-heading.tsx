import React from "react";

function BannerHeading() {
  return (
    <div className="w-[60%] lg:w-3/4 flex flex-col gap-2 lg:gap-4 text-zinc-800 dark:text-zinc-300">
      <div className="w-full flex">
        <div className="w-1/2 justify-start hidden lg:flex"></div>
        <div className="flex justify-end">
          <h1 className="text-3xl lg:text-6xl font-kanit font-semibold">
            REVOLUTIONIZE
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-center lg:justify-start gap-4 lg:gap-10">
        <h1 className="text-3xl lg:text-6xl font-kanit font-semibold">
          LEARNING
        </h1>
        <span className="text-xl lg:text-4xl font-ubuntu font-medium border border-[#333] dark:border-zinc-400 rounded-full px-2 py-1 lg:px-4 lg:py-2">
          WITH
        </span>
      </div>

      <div className="w-full flex flex-col gap-2 lg:gap-5 justify-end">
        <h1 className="text-center text-3xl lg:text-6xl font-kanit font-semibold">
          TURBOSTRIX
        </h1>
        <h1 className="text-start lg:text-end text-3xl lg:text-6xl font-kanit font-semibold">
          EDUCATION
        </h1>
      </div>
    </div>
  );
}

export default BannerHeading;
