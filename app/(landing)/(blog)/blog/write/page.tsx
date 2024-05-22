"use client";

import { Button } from "@/components/ui/button";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { PlusCircleIcon, SaveIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Quill } from "react-quill";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function WriteArticle() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(false);

  console.log(title);
  const onToggle = () => {
    setToggle(!toggle);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const onPublish = async () => {
    try {
      await axios.post("/api/posts", { content: value, title });

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
            <ReactQuill
              className="transition-all md:mx-4"
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
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

      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </>
  );
}
