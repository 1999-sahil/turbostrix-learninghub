import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        src="/logo/turbo-strix-logo.png"
        alt="logo"
        width={28}
        height={30}
        className="max-md:w-[24px] max-md:h-[24px]"
      />
      <h2 className="text-[#333] dark:text-zinc-300 font-poppins font-semibold text-base md:text-xl">TurboStrix</h2>
    </Link>
  );
}

export default NavLogo;
