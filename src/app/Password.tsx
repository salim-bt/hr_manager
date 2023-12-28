import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const passwordChangeSchema = z.object({
  oldPassword: z.string().min(6).max(50),
  newPassword: z.string().min(6).max(50),
  confirmPassword: z.string(),
});

function Password() {
  const form = useForm<z.infer<typeof passwordChangeSchema>>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof passwordChangeSchema>) {
    console.log(values);
    // Add your password change logic here
  }

  return (
    <ScrollArea className="h-[400px] w-[500px] rounded-md border p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Old Password */}
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Old Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter old password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* New Password */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter new password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Confirm new password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="bg-blue-500 text-white mt-4" type="submit">
            Change Password
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
}

export default Password;
