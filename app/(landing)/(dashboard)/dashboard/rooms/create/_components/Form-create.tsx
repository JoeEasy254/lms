"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Calendar } from "@/components/ui/calendar";

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

import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  title: z.string().min(2).max(50),
  description: z.string().min(5).max(50),
  price: z.coerce.number(),
});

export const CreateForm = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      description: "",
      price: 0,
    },
  });
  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // create a user
    try {
     await fetch("/api/room", {
        method: "post",
        body: JSON.stringify({
          name: values.name,
          title: values.title,
          price: values.price,
          date,
          description: values.description,
        }),
      });

      toast({
        title: "Alert",
        description: "Room created",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Room Name</FormLabel>
                <FormControl>
                  <Input placeholder="create a room" {...field} />
                </FormControl>
                <FormDescription>Here you will create a room</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Topic</FormLabel>
                <FormControl>
                  <Input placeholder="topic" {...field} />
                </FormControl>
                <FormDescription>
                  A title on what will be taught.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="price" {...field} />
                </FormControl>
                <FormDescription>Session price</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="A brief description of the class"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Class description</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <h1>Date</h1>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <Button disabled={isSubmitting || !isValid} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
