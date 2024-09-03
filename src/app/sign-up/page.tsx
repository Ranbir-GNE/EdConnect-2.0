"use client";

import { signUpAction } from "@/actions/users";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuLoader } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";


function CreateAccountPage() {
  
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleCreateAccount = async (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await signUpAction(formData);
      if (!errorMessage) {
        router.replace("/");
        toast.success("Account created successfully\nYou are now logged in", {
          duration: 5000,
        });
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative flex w-[600px] flex-col items-center rounded-lg border bg-popover p-8">
        <h1
          className={`mb-8 text-2xl font-semibold ${isPending ? "opacity-0" : ""}`}
        >
          Create Account
        </h1>

        {isPending && (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-y-2 text-primary">
            <p>Creating account...</p>
            <LuLoader className="size-6 animate-spin" />
          </div>
        )}

        <form
          className={`flex w-full flex-col gap-4 ${isPending ? "-z-10 opacity-0" : ""}`}
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateAccount(new FormData(e.target as HTMLFormElement));
          }}
        >
          <Input
            type="text"
            name="email"
            placeholder="Email"
            required
            disabled={isPending}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            disabled={isPending}
          />
          <Button disabled={isPending}>Create Account</Button>

          <p className="mt-3 text-center text-xs">
            Already have an account?
            <Link
              href="/login"
              className="ml-2 underline transition-colors duration-200 ease-in-out hover:text-primary"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
