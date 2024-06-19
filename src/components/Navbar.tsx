import Link from "next/link";
import Logout from "./Logout";
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();
  return (
    <nav className="w-full h-[70px] border flex items-center">
      <div className="container flex items-center justify-between w-full">
        <h2 className="text-lg md:text-3xl font-bold">Victor</h2>

        <div className="hidden sm:flex items-center gap-6 [&>a]:text-muted-foreground hover:[&>a]:text-foreground">
          <Link href="/">Home</Link>

          {!!session?.isLoggedIn ? (
            <>
              <Link href="/premium">Premium</Link>
              <Link href="/profile">Profile</Link>
              <Logout />
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
