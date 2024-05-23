import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationData({
  handleNext,
  postSize,
  length,
}: {
  handleNext: () => void;
  postSize: number;
  length: number;
}) {
  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button disabled={postSize === length} onClick={handleNext}>
        Load More
      </Button>
    </div>
  );
}
