import CustomButton from "@/components/button";
import Features from "@/components/home-features/Features";
import Banner from "@/components/home-page/banner";
import HomeTSCodeIde from "@/components/ts-code-editor/homepage-ts-code-editor";
import TSContent from "@/components/ts-content/ts-content";
import { AiFillThunderbolt, AiOutlineCode } from "react-icons/ai";
import { PiBracketsCurlyBold } from "react-icons/pi";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/** banner section */}
      <section className="flex flex-col items-center justify-center gap-[60px] px-5 xl:px-20 py-8 xl:py-12">
        <Banner />
        <Features />
      </section>

      <div className="w-full h-[2px] bg-zinc-200 dark:bg-black my-[50px]" />

      {/** turbostrix content section (dsa, algo, react, api) */}
      <section className="flex items-center justify-center px-5 xl:px-20 py-8 xl:py-12">
        <TSContent />
      </section>

      <div className="w-full h-[2px] bg-zinc-200 dark:bg-black my-[50px]" />

      {/** code editor section */}
      <section className="mt-[80px] px-5 xl:px-20 py-8 xl:py-12">
        <HomeTSCodeIde />
      </section>

      {/** buttons */}
      <section className="flex flex-row gap-4 lg:gap-8 my-[50px] items-center justify-center">
        <CustomButton
          href=""
          text="Code Editor"
          textOnHover="#d45656"
          borderOnHover="#d45656"
          textOnHoverDark="#d45656"
          borderOnHoverDark="#d45656"
          icon={<PiBracketsCurlyBold />}
        />

        <CustomButton
          href=""
          text="Documentations"
          textOnHover="#33b864"
          borderOnHover="#33b864"
          textOnHoverDark="#33b864"
          borderOnHoverDark="#33b864"
          icon={<AiFillThunderbolt />}
        />

        <CustomButton
          href=""
          text="Web IDE"
          textOnHover="#f67280"
          borderOnHover="#f67280"
          textOnHoverDark="#f67280"
          borderOnHoverDark="#f67280"
          icon={<AiOutlineCode />}
        />
      </section>

      <div className="w-full h-[2px] bg-zinc-200 dark:bg-black my-[50px]" />
    </main>
  );
}
