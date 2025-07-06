"use client";

import { Button } from "@/components/ui/button";
import { customerAuthClient } from "@/lib/customer-authClient";
import { useRouter } from "next/navigation";

export default function CustomerDashboard() {
  const router = useRouter();
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = customerAuthClient.useSession();

  async function sigOutUser() {
    await customerAuthClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  }
  return (
    <div className="flex ">
      <h1 className="text-9xl">Customer</h1>

      <Button
        onClick={async () => {
          sigOutUser();
        }}
      >
        Logout
      </Button>
    </div>
  );
}
