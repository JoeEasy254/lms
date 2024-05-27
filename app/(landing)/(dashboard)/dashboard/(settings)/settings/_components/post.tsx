"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
import { Edit, Trash } from "lucide-react";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");
export default function Post({
  post,
}: {
  post: {
    id: string;
    content: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
  };
}) {
  const router = useRouter();
  const removePost = async () => {
    try {
      const obj = {
        creatorId: post.userId,
        postId: post.id,
      };

      await axios({
        method: "delete",
        url: "/api/posts",
        data: {
          ...obj,
        },
      });
      toast({
        title: "Alert",
        description: "Article removed",
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="grid gap-1">
        <div className="text-lg font-medium">{post.title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Published {timeAgo.format(new Date(post.createdAt))}
        </div>
      </div>
      <div className="flex items-center gap-x-2 ">
        <Button size="sm" variant="default">
          <Edit />
        </Button>
        <Button onClick={removePost} size="sm" variant="destructive">
          <Trash />
        </Button>
      </div>
    </div>
  );
}
