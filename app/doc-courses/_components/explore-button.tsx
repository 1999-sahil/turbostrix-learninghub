import Link from "next/link";
import React from "react";

interface ExploreButtonProps {
  linkSrc: string;
}

function ExploreButton({ linkSrc }: ExploreButtonProps) {
  return (
    <Link href={linkSrc}>
      <button className="text-[10px] lg:text-xs font-ubuntu font-medium bg-[#9f95fc] dark:bg-[#5645ee] rounded-full px-2 py-[2px] lg:px-3 lg:py-1">
        Explore All
      </button>
    </Link>
  );
}

export default ExploreButton;
