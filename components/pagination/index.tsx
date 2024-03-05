import React, { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

export function Pagination({ totalPages, offset, limit, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(1);
    
    function handlePageChange(page) {
        const newOffset = (page - 1) * limit;
        setCurrentPage(page);
        onPageChange(newOffset)
        console.log("New Offset:", newOffset);
    }

    return (
        <ResponsivePagination
            total={totalPages}
            current={currentPage}
            onPageChange={page => handlePageChange(page)}
        />
    );
}