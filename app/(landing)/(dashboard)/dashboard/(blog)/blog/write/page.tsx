"use client";

import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function WriteArticle() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onPublish = async () => {
    try {
      await fetch("/api/posts", {
        method: "post",
        body: JSON.stringify({
          content: value,
          title,
        }),
      });

      toast({
        title: "Alert",
        description: "post created ",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "error" + error,
      });
      console.log(error);
    }
  };

   const handleChange = (
     value: string | undefined,
     event: React.ChangeEvent<HTMLTextAreaElement> | undefined
   ) => {
     if (typeof value == "string") {
       setValue(value);
     }
   };
  return (
    <>
      <div className="mx-5 my-4">
        <PlusCircleIcon
          className="cursor-pointer hover:animate-pulse"
          size={45}
          onClick={onToggle}
        />

        <h1 className="text-2xl mt-4">Write Something......</h1>
      </div>

      {toggle && (
        <>
          <div className="mb-2">
            <Textarea
              className="mx-4 border-none outline-none resize-none text-3xl"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="write a title.."
            />
          </div>
          <div>
            <MDEditor
              value={value as string}
              onChange={(value, event) => handleChange(value, event)}
            />

            <Button
              onClick={onPublish}
              className="transition-all md:mx-4 mt-4 bg-green-500"
              variant={"ghost"}
            >
              publish
            </Button>
          </div>
        </>
      )}
    </>
  );
}
