import React from "react";
import "../styles/pagination.css"

export default function Pagination({ totalPages, handlePageChange, handleForward, handleBackward, currentPage }){
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    const pageNumbers = [];
    for (let i = 1; i <= pages.length; i++) {
        if (i <= 3 || //the first five pages
            i === pages.length || //the last page
            Math.abs(currentPage - i) <= 1 //the current page and the one before and after
           )
            pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <button onClick={() => handleBackward()} className="prev">Prev</button>
            {
                pageNumbers.map(number => {
                    return  <button 
                                onClick={() => handlePageChange(number)}
                                key={number}
                                className={number === currentPage ? "active" : ""}
                            >{number}</button>
                })
            }
            <button onClick={() => handleForward()} className="next">Next</button>
        </div>
    )
}