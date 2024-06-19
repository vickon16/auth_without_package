"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { login } from "@/actions";

const LoginForm = () => {
  const [state, action] = useFormState(login, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-4 mt-10">
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" placeholder="John" type="text" />
          {state?.errors?.username && (
            <p className="text-sm text-red-500">{state.errors.username}</p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="m@example.com"
            type="email"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-500">{state.errors.email}</p>
          )}
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" name="password" />
          {state?.errors?.password && (
            <p className="text-sm text-red-500">{state.errors.password}</p>
          )}
        </div>
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <LoginButton />
      </div>
    </form>
  );
};

export default LoginForm;

export const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      disabled={pending}
      type="submit"
      className="mt-4 w-full"
    >
      {pending ? "Submitting..." : "Login"}
    </Button>
  );
};
