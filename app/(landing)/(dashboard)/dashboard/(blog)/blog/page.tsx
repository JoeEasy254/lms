"use client";

import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import Article from "./_components/article";
import Category from "./_components/category";
import Link from "next/link";
import Pagination from "./_components/pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { Posts } from "@prisma/client";

export default function Blogpage() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [postSize, setPostSize] = useState<number>(0);

  const batchSize = 2;
  useEffect(() => {
    fetchInitialPosts();
  }, []);

  const fetchInitialPosts = async () => {
    const res = await axios.get(`/api/posts?skip=0&take=${batchSize}`);

    setPostSize(res.data.length);
    setPosts(res.data.results);
  };

  const fetchMoreRecords = async (currentRecordsCount: number) => {
    const res = await axios.get(
      `/api/posts?skip=${currentRecordsCount}&take=${batchSize}`
    );
    // set post size
    setPosts((prevPosts) => [...prevPosts, ...res.data.results]);
  };

  const handleNext = async () => {
    await fetchMoreRecords(posts.length);
  };

  return (
    <>
      <main className="w-full relative md:mx-3">
        <Link href={"/blog/write"}>
          <Button variant="outline" className="mx-2 my-3 absolute right-4">
            <Edit />
            Write
          </Button>
        </Link>

        <section className="py-12 md:py-16">
          <div>
            <div className="mb-8 flex flex-col items-center justify-between">
              <div className="flex justify-between items-center w-full mb-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Recent Posts
                </h2>
                <Category />
              </div>

              <div className="overflow-auto h-[60vh]">
                <div className=" overflow-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
                  {posts.length > 0 &&
                    posts.map((post, i) => <Article post={post} key={i} />)}
                </div>

                <div className="my-2 flex justify-center items-center">
                  <Pagination
                    length={posts.length}
                    postSize={postSize}
                    handleNext={handleNext}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
