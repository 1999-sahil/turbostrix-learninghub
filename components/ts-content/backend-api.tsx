import Image from "next/image";
import React from "react";

import nodejs from "../../public/ts-content/content-nodejs.svg";
import api from "../../public/ts-content/content-api.svg";
import mysql from "../../public/ts-content/content-mysql.svg";
import mongodb from "../../public/ts-content/content-mongodb.svg";
import expressjs from "../../public/ts-content/expressjs.svg";
import nextjs from "../../public/ts-content/nextjs.svg";

function BackendApi() {
  const topics = [
    { title: "Nodejs", href: nodejs },
    { title: "Api", href: api },
    { title: "Mysql", href: mysql },
    { title: "Mongodb", href: mongodb },
    { title: "Expressjs", href: expressjs },
    { title: "Nextjs", href: nextjs },
  ];

  return (
    <div className="flex flex-col gap-1">
      <h3 className="bg-[#f6f6f7] dark:bg-[#202127] text-center text-[14px] font-semibold font-poppins text-[rgba(60,60,67,0.78)] dark:text-[rgba(235,235,245,0.6)] py-[8px] lg:py-[13px]">
        Learn back-end dev and API&apos;s
      </h3>
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 text-zinc-800 dark:text-white">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-[#f6f6f7] dark:bg-[#202127] hover:bg-[#efefef] dark:hover:bg-white w-full h-[134px] lg:h-[154px] flex items-center justify-center cursor-pointer group transition duration-300"
            >
              <Image
                src={topic.href}
                alt={topic.title}
                width={104}
                height={104}
                className="max-md:w-[82px] max-md:h-[82px] filter brightness-0 grayscale dark:invert group-hover:filter-none transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f6f6f7] dark:bg-[#202127] w-full h-[34px] lg:h-[44px] rounded-bl-[24px] rounded-br-[24px] text-center text-[14px] font-semibold font-poppins text-[rgba(60,60,67,0.78)] dark:text-[rgba(235,235,245,0.6)]" />
    </div>
  );
}

export default BackendApi;
