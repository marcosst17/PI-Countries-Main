import React from "react";

export default function Pagination({ totalPages, handlePageChange }){
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    
    return (
        <div>
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