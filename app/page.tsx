import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h2>home page</h2>
      <Link href="/frameworks/angular">
        doc1
      </Link>
      <Link href="/fruits/apple">
        doc2
      </Link>
    </div>
  );
}
