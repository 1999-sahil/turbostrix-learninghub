import Image from "next/image";
import React from "react";

function NavLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo/turbo-strix-logo.png"
        alt="logo"
        width={28}
        height={30}
      />
      <h2 className="text-[#333] dark:text-zinc-300 font-poppins font-semibold text-xl">TurboStrix</h2>
    </div>
  );
}

export default NavLogo;
