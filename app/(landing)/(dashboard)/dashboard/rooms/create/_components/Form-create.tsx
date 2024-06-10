"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UploadButton } from "@/utils/uploadthing";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Category, Subcategory } from "@prisma/client";
import { set } from "date-fns";

const formSchema = z.object({
  name: z.string().min(2),
  title: z.string().min(2),
  description: z.string().min(5),
  price: z.coerce.number(),
  category: z.string(),
  subCategory: z.string(),
});

interface sub_categoriesType {
  id: string;
  name: string;
  categoryId: string;
}
[];
interface CategoryType {
  id: string;
  name: string;
  subcategories: any;
}

export const CreateForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState<CategoryType[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      description: "",
      price: 0,
      category: "",
      subCategory: "",
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
          imageUrl: imageUrl,
          category: category,
          subCategory: subCategory,
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

  const fetchCategories = async () => {
    const res = await fetch("/api/room/category");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchSubCategories = () => {
    const newCategories = [...categories];
    const subCategory = newCategories.filter(
      (c: CategoryType) => c.name == category
    );

    if (subCategory[0]) {
      // console.log("sub", subCategory[0].subcategories);
      const sub_categories = subCategory[0].subcategories;
      setSubCategories(sub_categories);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, [category]);

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
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category, index) => (
                        <SelectItem key={index} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Course category</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub Category</FormLabel>
                  <Select onValueChange={(value) => setSubCategory(value)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {subCategories.map((category, index) => (
                        <SelectItem key={index} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Course category</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <h1>Date</h1>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>

          <div className="border p-2">
            <Label className="text-center">Upload course image</Label>
            <UploadButton
              endpoint="courseImage"
              onClientUploadComplete={(res) => {
                setImageUrl(res[0].url);
                toast({
                  title: "Alert",
                  description: "upload complete",
                });
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                toast({
                  title: "Alert",
                  description: "upload failed",
                });
              }}
            />
          </div>
          <Button disabled={!isValid || isSubmitting} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
