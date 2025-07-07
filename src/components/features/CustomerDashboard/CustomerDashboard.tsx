"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { customerAuthClient } from "@/lib/customer-authClient";
import { useRouter } from "next/navigation";

export default function CustomerDashboard() {
  const router = useRouter();
  const { data: session, isPending } = customerAuthClient.useSession();

  async function sigOutUser() {
    await customerAuthClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  }
  return (
    <Card className="max-w-[350px] w-full">
      <CardHeader>
        <CardTitle>Customer Dashboard</CardTitle>
        <CardDescription>
          This dashboard serves as the homepage for the customer account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isPending ? (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-sm font-bold">Name:</span>
              <span className="text-2xl">{session?.user.name}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold">Email:</span>
              <span className="text-2xl">{session?.user.email}</span>
            </div>
          </div>
        ) : (
          "Loading..."
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={async () => {
            sigOutUser();
          }}
        >
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
}
