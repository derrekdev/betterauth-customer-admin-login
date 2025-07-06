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
import { customerAuthClient } from "@/lib/customer-authClient";
import { loginSchema } from "@/zodValidation/userValidation";
import z from "zod";

export default function CustomerLogin() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onCustomerSubmit(values: z.infer<typeof loginSchema>) {
    const { data, error } = await customerAuthClient.signIn.email({
      email: values.email,
      password: values.password,
      callbackURL: "/customer",
    });
  }

  return (
    <Card className="max-w-[350px] w-full">
      <CardHeader>
        <CardTitle>Customer Login</CardTitle>
        <CardDescription>
          Login form for sign in your customer account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onCustomerSubmit)}
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
              Customer Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
