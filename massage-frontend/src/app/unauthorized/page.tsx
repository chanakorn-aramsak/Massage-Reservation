import Link from "next/link";

export default function UnAuthorizedPage() {
  return (
    <main className="flex flex-col h-screen py-4 justify-center items-center">
      <h1 className="text-5xl font-black text-primary text-center py-5">
        You are not authorized to view this page
      </h1>
      <Link href="/" className="underline hover:text-blue-600">
        Go to home page
      </Link>
    </main>
  );
}
