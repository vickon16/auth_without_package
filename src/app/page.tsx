import { getSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  if (!session || !session.userId) return redirect("/login");
  return (
    <div className="w-full text-center space-y-3">
      <h1 className="text-lg md:text-3xl">Welcome to the home page</h1>
      <p className="text-muted-foreground">This page is visible to everyone</p>
    </div>
  );
}
