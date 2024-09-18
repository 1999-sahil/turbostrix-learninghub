import Image from "next/image";
import React from "react";
import TSCodeIde from "./ts-code-ide";
import TSDocs from "./ts-docs";

function HomeTSCodeIde() {
  return (
    <div>
      {/** asset */}
      <div className="relative">
        <Image
          src="/code-ide/code-ide-asset2.svg"
          alt="asset"
          width={400}
          height={300}
          className="max-md:w-[300px] max-md:h-[300px] absolute -right-6 -top-24 lg:-right-24"
        />
      </div>
      {/** content */}
      <div className="flex flex-col space-y-20 lg:space-y-40">
        <TSCodeIde />
        <TSDocs />
      </div>
      {/** asset */}
      <div className="relative pt-40">
        <Image
          src="/code-ide/code-ide-asset1.svg"
          alt="asset"
          width={400}
          height={300}
          className="max-md:w-[400px] max-md:h-[400px] absolute bottom-0 -left-16 lg:-left-28"
        />
      </div>
    </div>
  );
}

export default HomeTSCodeIde;
