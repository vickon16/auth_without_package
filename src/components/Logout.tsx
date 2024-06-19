import { logout } from "@/actions";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <form action={logout}>
      <Button variant="ghost">Logout</Button>
    </form>
  );
};

export default Logout;
