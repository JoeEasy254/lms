"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Room from "./_components/room";
import { db } from "@/utils/db";
import ActiveRooms from "./_components/rooms-active";
import PaginatePages from "@/components/rootComponents/Paginate";
import { useEffect, useState } from "react";
import { Room as RoomType, User } from "@prisma/client";
import axios from "axios";

export default function RoomPage() {
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const roomsPerPage = 3;

  const fetchRooms = async () => {
    try {
      const res = await axios.get("/api/room/rooms");
      const totalRooms = res.data.length;
      setTotalPages(Math.ceil(totalRooms / roomsPerPage));
      setRooms(res.data);
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

  return (
    <div className="py-6 md:px-6">
      <div className="">
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between mb-6">
          <h1 className="text-2xl font-bold">Explore Courses</h1>
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm dark:bg-gray-950"
              placeholder="Search rooms..."
              type="search"
            />
          </div>
        </div>

        <div>
          <ActiveRooms />
        </div>
        <div className="flex flex-wrap md:grid grid-cols-3 w-full md:gap-x-4">
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
