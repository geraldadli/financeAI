import React from 'react';
import Button from '../ui/Button';

interface PaginationControlsProps {
  page: number;
  pageCount: number;
  onPageChange: (p: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  page, pageCount, onPageChange
}) => (
  <nav className="flex justify-center space-x-2" aria-label="Pagination">
    <Button
      size="sm"
      variant="outline"
      onClick={() => onPageChange(page - 1)}
      disabled={page <= 1}
    >
      Previous
    </Button>
    <span className="px-3 py-1 bg-white border rounded">{page} / {pageCount}</span>
    <Button
      size="sm"
      variant="outline"
      onClick={() => onPageChange(page + 1)}
      disabled={page >= pageCount}
    >
      Next
    </Button>
  </nav>
);

export default PaginationControls;
