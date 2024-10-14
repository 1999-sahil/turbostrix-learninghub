import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DocsCardProps {
  serialNumber: string;
  title: string;
  imageSrc: string;
  chapters: number;
  courseType: string;
  description: string;
  redirectLink: string;
}

function DocsCard({
  serialNumber,
  title,
  imageSrc,
  chapters,
  courseType,
  description,
  redirectLink,
}: DocsCardProps) {
  return (
    <div className="h-[16rem] lg:h-[18rem] w-[16rem] lg:w-[18rem] shadow-lg flex flex-col cursor-grab gap-4 border border-zinc-300 dark:border-zinc-800 pt-4 pb-10 relative rounded-[12px]">
      <div className="flex items-baseline gap-2 font-poppins px-3">
        <h2 className="text-zinc-500 dark:text-zinc-600 font-semibold text-[10px] lg:text-xs">
          {serialNumber} /
        </h2>
        <h2 className="text-[#333] dark:text-zinc-300 text-base lg:text-xl font-semibold">
          {title}
        </h2>
      </div>
      <div className="h-[8rem] w-full relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 h-full w-full bg-white dark:bg-zinc-900 bg-[radial-gradient(#a9a9a9_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <Image
          src={imageSrc}
          alt="course-image"
          width={60}
          height={60}
          className="z-10 max-md:w-[50px] max-md:h-[50px] rounded-full p-2 bg-zinc-200 dark:bg-zinc-800 border border-zinc-400/50 dark:border-zinc-600"
        />
      </div>
      <div className="flex flex-col gap-4 px-3">
        <div className="flex gap-2">
          <span className="flex items-center justify-center px-1 py-[2px] lg:px-2 lg:py-1 text-[8px] md:text-xs font-openSans font-medium bg-zinc-300 dark:bg-zinc-700 rounded-[4px]">
            {chapters} Chapters
          </span>
          <span className="flex items-center justify-center px-1 py-[2px] lg:px-2 lg:py-1 text-[8px] md:text-xs font-poppins font-semibold bg-yellow-500 text-black rounded-[4px]">
            {courseType}
          </span>
        </div>
        <p className="font-raleway text-[10px] lg:text-xs font-light">
          {description}
        </p>
      </div>
      <Link href={redirectLink} className="absolute bottom-0 right-0">
        <button className="border border-zinc-300 dark:border-black rounded-tl-[12px] rounded-br-[12px] px-6 py-1 text-xs md:text-sm font-kanit font-normal bg-zinc-300 dark:bg-black">
          View Doc
        </button>
      </Link>
    </div>
  );
}

export default DocsCard;
