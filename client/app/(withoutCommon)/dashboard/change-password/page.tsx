"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/actions/auth.services";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { logoutUser } from "@/services/actions/logoutUser";

const formSchema = z.object({
  oldPassword: z.string().min(6, {
    message: "Old password must be at least 6 characters",
  }),
  newPassword: z.string().min(6, {
    message: "New password must be at least 6 characters",
  }),
});

const ChangePassword = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const [changePassword] = useChangePasswordMutation();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await changePassword(values);

      if ("data" in res && res.data.status === 200) {
        logoutUser(router);
        toast.success("Password Changed Successfully");
      } else {
        throw new Error("Incorrect Old Password");
      }
    } catch (error) {
      toast.error("Incorrect Old Password");
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <p className="text-3xl md:text-4xl font-extrabold text-center uppercase mb-8 text-white">
        Change Password
      </p>
      <div className="w-full max-w-md space-y-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-[#313844] rounded-lg shadow-lg p-8 space-y-6"
          >
            <Card className="w-full space-y-4 p-4 border-0 shadow-sm bg-transparent">
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Old Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your old password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your new password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full bg-gradient-to-r from-red-500 to-amber-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Change Password
              </Button>
            </Card>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default ChangePassword;
