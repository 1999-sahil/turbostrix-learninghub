import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-6 ml-4">
      <h2>home page</h2>
      <Link href="/frameworks/angular">
        doc1
      </Link>
      <Link href="/fruits/apple">
        doc2
      </Link>
      <ModeToggle />
    </div>
  );
}
