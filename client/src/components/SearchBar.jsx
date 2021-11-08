import { useState } from "react";


export default function SearchBar({handlePageChange, handleComposeSearch}){
    const [search, setSearch] = useState("");

    function onSubmit(e){
        e.preventDefault()
    }

    function onInputChange(e){
        setSearch(e.target.value)
        handleComposeSearch(e)
        handlePageChange(1)
    }
    
    return (
        <div className="searchBarDiv">
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onInputChange} value={search} name="searchBar" id="searchBar" required/>
                <label htmlFor="searchBar">Search</label>
            </form>
        </div>
    )
}