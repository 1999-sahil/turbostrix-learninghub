import Features from "@/components/home-features/Features";
import Banner from "@/components/home-page/banner";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center gap-[60px] px-5 xl:px-20 py-8 xl:py-12">
        <Banner />
        <Features />
      </div>
      <div className="w-full h-[2px] bg-zinc-200 dark:bg-black my-[50px]" />
    </main>
  );
}
