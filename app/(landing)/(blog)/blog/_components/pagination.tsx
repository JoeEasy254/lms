import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationData({
  handleNext,


}: {
  handleNext: () => void;
}) {

  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button onClick={handleNext}>
        Load More
      </Button>
    </div>
  );
}
