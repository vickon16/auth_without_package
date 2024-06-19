import { getSession } from "@/actions";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Premium() {
  const session = await getSession();
  if (!session || !session.userId) return redirect("/login");
  if (!session.isPro)
    return (
      <div className="w-full text-center space-y-3">
        <h1 className="text-lg md:text-3xl font-bold">
          Welcome to the Pro Page
        </h1>
        <p className="text-muted-foreground">
          Only pro users can see this page
        </p>
        <Link
          href="/profile"
          className={buttonVariants({ variant: "ghost", className: "!mt-6" })}
        >
          Buy a premium package to view this page &rarr;
        </Link>
      </div>
    );

  return (
    <div className="w-full text-center space-y-3">
      <h1 className="text-lg md:text-3xl font-bold">Welcome to the Pro Page</h1>
      <p className="text-muted-foreground">
        Thank you for buying our premium package
      </p>
    </div>
  );
}
