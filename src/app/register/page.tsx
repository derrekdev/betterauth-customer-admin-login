import Register from "@/components/features/Register/Register";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
export default function page() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-dvh">
      <section className="max-w-[400px] w-full flex flex-row max-md:flex-col gap-4 items-center">
        <Register />
      </section>
      <section className="max-w-[400px] mt-10 w-full">
        <Card>
          <CardContent className="text-center">
            <Link href={"/"}>
              <Button variant="default" className="cursor-pointer">
                Back to login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
