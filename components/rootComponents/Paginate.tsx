import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginatePagesProps {
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrevious: () => void;
  handlePageChange: (page: number) => void; // Added handlePageChange as a prop
}

export default function PaginatePages({
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
  handlePageChange,
}: PaginatePagesProps) {
  const getPageNumbers = () => {
    const pages = [];
    const maxPageNumbersToShow = 5;

    if (totalPages <= maxPageNumbersToShow) {
      // Show all pages if totalPages is less than or equal to maxPageNumbersToShow
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push("ellipsis");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("ellipsis");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={currentPage === 1 ? undefined : handlePrevious}
          />
        </PaginationItem>
        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page === "ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                className={page === currentPage ? "bg-green-400" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  if (page !== currentPage) {
                    handlePageChange(Number(page));
                  }
                }}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
         
            onClick={currentPage === totalPages ? undefined : handleNext}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
