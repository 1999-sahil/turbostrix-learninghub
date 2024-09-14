import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-col space-y-6 ml-4">
      <h2>home page</h2>
      
      <ModeToggle />
    </div>
  );
}
