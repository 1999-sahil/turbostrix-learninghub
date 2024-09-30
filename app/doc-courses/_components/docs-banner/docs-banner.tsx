import React from "react";
import { GoNorthStar } from "react-icons/go";
import BannerHeading from "./banner-heading";
import BannerGridCards from "./banner-grid-cards";

function DocsBanner() {
  return (
    <div className="flex flex-col gap-5 lg:gap-6 xl:gap-8 w-full">
      {/** above section (heading & image) */}
      <section className="flex lg:gap-5">
        {/** left (text) */}
        <BannerHeading />

        {/** right (image) */}
        <div className="w-[40%] lg:w-1/4 h-[154px] md:h-[240px] lg:h-[290px] xl:h-[300px] flex bg-black text-white rounded-[16px] p-2 lg:p-4">
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="bg-[#333] text-[10px] md:text-xs lg:text-sm font-poppins rounded-full px-1.5 py-[2px] md:px-2 md:py-1 lg:px-3.5 lg:py-1.5">
                Welcome
              </h2>
              <span>
                <GoNorthStar className="text-xl md:text-2xl lg:text-4xl text-yellow-500" />
              </span>
            </div>
            <div>
              <p className="text-[10px] md:text-xs lg:text-sm font-ubuntu">
                Discover a new way of learning with our online platform. Achieve
                you goals and succeed with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/** lower section (images) */}
      <section>
        <BannerGridCards />
      </section>
    </div>
  );
}

export default DocsBanner;
