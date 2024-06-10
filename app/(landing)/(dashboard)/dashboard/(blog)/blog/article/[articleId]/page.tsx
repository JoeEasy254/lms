"use client";

import { Posts } from "@prisma/client";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";

export default function ArticlePage({
  params,
}: {
  params: { articleId: string };
}) {
  const [article, setArticle] = useState<Posts>();
  const fetchSingleArticle = async () => {
    const res = await fetch(`/api/posts?articleId=${params.articleId}`);
    const data = await res.json();

    setArticle(data);
  };
  useEffect(() => {
    fetchSingleArticle();
  }, [params.articleId]);

  const markdown = article?.content;

  return (
    <>
      <div suppressHydrationWarning className="h-screen overflow-auto ">
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {article?.title}
          </h1>

          {markdown ? (
            <MDEditor.Markdown
              source={markdown}
              style={{ whiteSpace: "pre-wrap" }}
            />
          ) : (
            <p>No content available.</p>
          )}
        </article>
      </div>
    </>
  );
}
