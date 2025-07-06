import AdminLogin from "@/component/Login/AdminLogin";
import CustomerLogin from "@/component/Login/CustomerLogin";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pb-10">
        <Image
          width={150}
          height={150}
          alt="Better Auth Logo"
          src={"/image/better-auth-logo-light.png"}
        />
        <h1 className="font-bold text-2xl text-center">
          Better Auth Customer and Admin <br />
          Login w/ seperate tables
        </h1>
        {/* <h2 className="">Better Auth</h2> */}
      </div>
      <div className="max-w-[700px] w-full flex flex-row max-md:flex-col gap-4 items-center">
        <CustomerLogin />
        <AdminLogin />
      </div>
      <div className="max-w-[700px] mt-10 w-full">
        <Card>
          <CardContent className="text-center">
            <Link href={"/register"}>
              <Button
                variant="default"
                className="cursor-pointer bg-neutral-600"
              >
                Register here
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
