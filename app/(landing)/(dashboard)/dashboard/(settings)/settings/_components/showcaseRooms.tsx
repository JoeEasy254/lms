"use client";

import { useEffect, useState } from "react";
import Room from "./room";
import axios from "axios";
import { Room as RoomType } from "@prisma/client";
import PaginatePages from "@/components/rootComponents/Paginate";

export default function ShowcaseRooms() {
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const roomsPerPage = 3;

  const fetchRooms = async () => {
    try {
      const res = await fetch("/api/room/rooms?myrooms=true");
      const totalRooms = await res.json();

      setTotalPages(Math.ceil(totalRooms.length / roomsPerPage));
      setRooms(totalRooms);
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
    <>
      <div className="md:grid grid-cols-2">
        {currentRooms.map((room: any, index: number) => (
          <Room details={room} key={index} />
        ))}
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
    </>
  );
}
