"use client";

import { Input } from "@/components/ui/input";
import Room from "./_components/room";
import ActiveRooms from "./_components/rooms-active";
import PaginatePages from "@/components/rootComponents/Paginate";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/rootComponents/loading";
import { Button } from "@/components/ui/button";
import { CategoryDropdownMenu } from "./_components/category-dropdown-menu";
import { Room as RoomType } from "@prisma/client";

export default function RoomPage() {
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const roomsPerPage = 3;

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/room/rooms");
      const data = await res.json();
      const totalRooms = data.length;
      setTotalPages(Math.ceil(totalRooms / roomsPerPage));
      setRooms(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentRooms = rooms.slice(
    (currentPage - 1) * roomsPerPage,
    currentPage * roomsPerPage
  );

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="py-6 md:px-6">
      <div className="">
        <div className="flex flex-col md:space-y-3 md:flex-col space-y-3 lg:space-y-0 lg:flex-row justify-between mb-6">
          <h1 className="text-2xl font-bold">Explore Courses</h1>
          <div className="">
            <div className="flex items-center space-x-2">
              <CategoryDropdownMenu />
              <div className="relative w-full max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm dark:bg-gray-950"
                  placeholder="Search rooms..."
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <ActiveRooms />
        </div>
        <div className="flex flex-wrap md:grid grid-cols-1 w-full md:gap-x-4 lg:grid-cols-3">
          {currentRooms.map(
            (
              room: {
                id: string;
                name: string;
                title: string;
                description: string;
                date: string;
                price: number;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                imageUrl: string;
                Category: string;
                SubCategory: string;
              } & { participants: any },
              index: number
            ) => (
              <Room room={room} key={room.id} />
            )
          )}
        </div>

        <div className="flex items-center justify-center mt-4">
          <PaginatePages
            currentPage={currentPage}
            handleNext={handleNext}
            handlePageChange={handlePageChange}
            handlePrevious={handlePrevious}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
