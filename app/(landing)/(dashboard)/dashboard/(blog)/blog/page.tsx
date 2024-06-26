"use client";

import Article from "./_components/article";
import Category from "./_components/category";
import { useEffect, useState } from "react";
import axios from "axios";
import { Posts } from "@prisma/client";
import PaginatePages from "@/components/rootComponents/Paginate";

export default function Blogpage() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const postsPerPage = 3;

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const { results } = await response.json();
      const totalPosts = results.length;
      setTotalPages(Math.ceil(totalPosts / postsPerPage));
      setPosts(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      <main className=" relative md:mx-3">
        <section className="py-12 md:py-16">
          <div>
            <div className="mb-8 flex flex-col md:items-center justify-between">
              <div className="flex justify-between items-center w-full mb-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Recent Posts
                </h2>
                <Category />
              </div>

              <div className="overflow-auto  overflow-x-hidden">
                <div className="mx-2 overflow-auto  grid grid-cols-1 gap-8 transition-all">
                  {currentPosts.length > 0 &&
                    currentPosts.map((post, i) => (
                      <Article post={post} key={i} />
                    ))}
                </div>

                <div className="flex items-center justify-center mt-4">
                  <PaginatePages
                    currentPage={currentPage}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    handlePageChange={handlePageChange}
                    totalPages={totalPages}
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
