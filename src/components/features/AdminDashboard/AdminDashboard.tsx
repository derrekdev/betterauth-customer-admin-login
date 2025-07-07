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
import { adminAuthClient } from "@/lib/admin-authClient";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const { data: session, isPending } = adminAuthClient.useSession();

  async function sigOutUser() {
    await adminAuthClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  }
  return (
    <Card className="max-w-[350px] w-full dark">
      <CardHeader>
        <CardTitle>Admin Dashboard</CardTitle>
        <CardDescription>
          This dashboard serves as the homepage for the admin account.
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
