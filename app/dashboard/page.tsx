import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { isAuthenticated } = await auth();
  if (!isAuthenticated) redirect("/");

  return (
    <main className="flex flex-1 flex-col px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
    </main>
  );
}
