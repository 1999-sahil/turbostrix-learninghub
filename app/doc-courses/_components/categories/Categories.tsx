"use client";

import { categoryFilters } from "@/constant/categories";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const listRef = useRef<HTMLUListElement>(null); // Reference for the scrollable list

  const category = searchParams ? searchParams.get("category") : "";

  const handleTags = (item: string) => {
    router.push(`${pathName}?category=${item}`);
  };

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -150, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 150, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="w-full flex items-center justify-between bg-zinc-200 dark:bg-black rounded-[10px] py-3 px-3">
      <div onClick={scrollLeft} className="p-1 mr-2 cursor-pointer rounded-full bg-zinc-300 dark:bg-zinc-900 flex items-center justify-center">
        <MdChevronLeft className="text-xl" />
      </div>
      <ul ref={listRef} className="flex px-1 gap-4 list-none hide-scrollbar overflow-auto">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${
              category === filter
                ? "text-[#5645ee]"
                : "font-normal"
            } rounded-[10px] text-xs font-semibold font-openSans px-3 py-1.5 transition 0.2s ease-in-out whitespace-nowrap bg-zinc-300 dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-800`}
          >
            {filter}
          </button>
        ))}
      </ul>
      <div onClick={scrollRight} className="ml-2 bg-zinc-300 dark:bg-zinc-900 p-1 cursor-pointer rounded-full flex items-center">
        <MdChevronRight className="text-xl" />
      </div>
    </div>
  );
};

export default Categories;