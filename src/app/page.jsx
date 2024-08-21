import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1>Recipe Application</h1>
      <Link href="/recipe-list">
      Go to Explorer
      </Link>
    </main>
  );
}
