"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { adminAuthClient } from "@/lib/admin-authClient";
import { loginSchema } from "@/zodValidation/userValidation";
import z from "zod";

export default function AdminrLogin() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onAdminSubmit(values: z.infer<typeof loginSchema>) {
    const { data, error } = await adminAuthClient.signIn.email({
      email: values.email,
      password: values.password,
      callbackURL: "/admin",
    });
  }
  return (
    <Card className="max-w-[350px] w-full">
      <CardHeader>
        <CardTitle>Admin Login</CardTitle>
        <CardDescription>
          Login form for sign in your admin account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onAdminSubmit)}
            className="space-y-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-neutral-600 w-full">
              Admin Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
