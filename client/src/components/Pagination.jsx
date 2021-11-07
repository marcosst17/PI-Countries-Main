import React from "react";
import "../styles/pagination.css"

export default function Pagination({ totalPages, handlePageChange, handleForward, handleBackward }){
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    
    return (
        <div className="pagination">
            <button onClick={() => handleBackward()}>Prev</button>
            {
                pages.map(page => {
                    return  <button 
                                onClick={() => handlePageChange(page)}
                                key={page}
                            >{page}</button>
                })
            }
            <button onClick={() => handleForward()}>Next</button>
        </div>
    )
}