import AdminLogin from "@/component/Login/AdminLogin";
import CustomerLogin from "@/component/Login/CustomerLogin";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-[700px] w-full flex flex-row max-md:flex-col gap-4 items-center">
        <CustomerLogin />
        <AdminLogin />
      </div>
      <div className="max-w-[700px] mt-10 w-full">
        <Card>
          <CardContent className="text-center">
            <Link href={"/register"}>
              <Button variant="default" className="cursor-pointer">
                Register here
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
