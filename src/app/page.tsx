import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Welcome to the Dashboard</h2>
      <Link href={"/dashboard"}>Go to Admin Panel</Link>
    </>
  );
}
