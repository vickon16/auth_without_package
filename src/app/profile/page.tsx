import { changePremium, getSession } from "@/actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getSession();
  if (!session || !session.userId) return redirect("/login");

  return (
    <div className="w-full text-center space-y-3">
      <h1 className="text-lg md:text-3xl font-bold">
        Welcome, {session.username}
      </h1>
      <p className="text-muted-foreground">This is your Profile page</p>

      <div className="!mt-10 space-y-4">
        <h2 className="text-lg md:text-xl">
          You are a <b>{session.isPro ? "Premium " : "Free "}</b>User
        </h2>

        <form action={changePremium}>
          <Button>{session.isPro ? "Cancel" : "Buy"} Premium</Button>
        </form>
      </div>
    </div>
  );
}
