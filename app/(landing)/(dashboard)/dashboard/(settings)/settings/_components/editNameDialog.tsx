"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Edit } from "lucide-react";
import { Posts } from "@prisma/client";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface EditDialogNameProps {
  id: string;
  name: string;
  data?: {
    content: string;
    title: string;
  };
  type: string;
}

export default function EditDialogName({
  id,
  name,
  data,
  type,
}: EditDialogNameProps) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="flex" variant={"secondary"}>
            <Edit /> Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          {data && type == "post" && <EditPost data={data} id={id} />}

          {type == "course" && <EditCourse name={name} id={id} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 6 characters.",
  }),
  content: z.string(),
});

function EditPost({
  data,
  id,
}: {
  data: {
    content: string;
    title: string;
  };
  id: string;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/posts", {
        method: "put",
        body: JSON.stringify({
          id,
          data: values,
        }),
      });

      toast({
        title: "Alert",
        description: await res.json(),
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder={data.title} {...field} />
                </FormControl>
                <FormDescription>Edit article title.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

const formCourseSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 6 characters.",
  }),
});
function EditCourse({ name, id }: { name: string; id: string }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formCourseSchema>>({
    resolver: zodResolver(formCourseSchema),
    defaultValues: {
      name,
    },
  });

  const router = useRouter();
  async function onCourseSubmit(values: z.infer<typeof formCourseSchema>) {
    try {
      const res = await axios.put("/api/room/rooms", {
        id,
        data: values,
      });

      toast({
        title: "Alert",
        description: res["data"],
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onCourseSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course name</FormLabel>
                <FormControl>
                  <Input placeholder={name} {...field} />
                </FormControl>
                <FormDescription>Edit course name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
