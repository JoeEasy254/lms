import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationData({
  handleNext,
  handlePrevious,
  indexOfLastPost,
  postsLength,
  currentPage,
  postsPerPage,
}: {
  handleNext: () => void;
  handlePrevious: () => void;
  indexOfLastPost: number;
  postsLength: number;
  currentPage: number;
  postsPerPage: number;
}) {
  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button disabled={currentPage === 1} onClick={handlePrevious}>
        Previous <ChevronRight />
      </Button>
      <Button
        disabled={
          indexOfLastPost >= postsLength && postsLength % postsPerPage !== 0
        }
        onClick={handleNext}
      >
        Next Page
      </Button>
    </div>
  );
}
