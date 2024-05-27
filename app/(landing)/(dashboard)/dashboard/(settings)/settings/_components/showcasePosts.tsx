"use client";

import React, { useEffect, useState } from "react";
import Post from "./post";
import { Posts } from "@prisma/client";
import axios from "axios";
import PaginatePages from "@/components/rootComponents/Paginate";

export default function ShowcasePosts() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const postsPerPage = 3;

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/api/posts");

      const totalPosts = res.data.results.length;
      setTotalPages(Math.ceil(totalPosts / postsPerPage));
      setPosts(res.data.results);
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
    <div className="flex flex-col gap-y-3">
      {currentPosts.length > 0 &&
        currentPosts.map((post, i) => <Post post={post} key={i} />)}

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
  );
}
