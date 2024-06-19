import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full max-w-[500px] mx-auto flex flex-col gap-y-2">
      <h1 className="text-center text-md sm:text-lg md:text-2xl">
        Welcome to the login page
      </h1>
      <p className="text-center text-muted-foreground">
        This page is visible to everyone
      </p>

      <LoginForm />
    </div>
  );
}
