import React from "react";

export default function Pagination({ totalPages }){
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    return (
        <div>
            {
                pages.map(page => {
                    return <button key={page}>{page}</button>
                })
            }
        </div>
    )
}