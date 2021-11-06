import React from "react";
import "../styles/pagination.css"

export default function Pagination({ totalPages, handlePageChange }){
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    
    return (
        <div className="pagination">
            {
                pages.map(page => {
                    return  <button 
                                onClick={() => handlePageChange(page)}
                                key={page}
                            >{page}</button>
                })
            }
        </div>
    )
}