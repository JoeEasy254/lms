"use client";

import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Profile } from "@prisma/client";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  headline: z.string().min(2, {
    message: "headline must be at least 2 characters.",
  }),
  biography: z.string().min(2),
  language: z.string().max(20, {
    message: "language must be at least 2 characters.",
  }),
  website: z.string(),
  twitter: z.string(),
  facebook: z.string(),
  linkedIn: z.string(),
  youtube: z.string(),
});
export default function UserProfile() {
  const [profile, setProfile] = useState<Profile>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      headline: profile?.headline,
      biography: profile?.biography,
      website: profile?.website as string,
      twitter: profile?.twitter as string,
      facebook: profile?.facebook as string,
      linkedIn: profile?.linkedIn as string,
      youtube: profile?.youtube as string,
    },
  });

  useEffect(() => {
    if (profile) {
      form.reset({
        firstName: profile.firstName,
        lastName: profile.lastName,
        headline: profile.headline,
        biography: profile.biography,
        website: profile.website as string,
        twitter: profile.twitter as string,
        facebook: profile.facebook as string,
        linkedIn: profile.linkedIn as string,
        youtube: profile.youtube as string,
      });
    }
  }, [profile, form]);
  const { isValid, isSubmitting } = form.formState;
  const router = useRouter();

  // fetch profile
  const fetchProfile = async () => {
    const data = await fetch("/api/profile");
    const response = await data.json();
    if (response) setProfile(response);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await fetch("/api/profile", {
        method: "post",
        body: JSON.stringify(values),
      });

      toast({
        title: "Alert",
        description: "profile updated",
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className=" p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Profile & settings</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="first name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="last name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="headline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Headline</FormLabel>
                    <FormControl>
                      <Input placeholder="headline" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="biography"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Biography</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Biography" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Language</FormLabel>
                    <Select onValueChange={field.onChange} {...field}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="swahili">Swahili</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="website url" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook url</FormLabel>
                    <FormControl>
                      <Input placeholder="facebook url" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter url</FormLabel>
                    <FormControl>
                      <Input placeholder="twitter" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <FormField
                  control={form.control}
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn url</FormLabel>
                      <FormControl>
                        <Input placeholder="linkedIn" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="youtube"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Youtube url</FormLabel>
                      <FormControl>
                        <Input placeholder="youtube" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <Button disabled={!isValid || isSubmitting} type="submit">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
