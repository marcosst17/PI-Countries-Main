export default function Filters({handleFilter, handlePageChange}){

    const handleFiltering = (e) => {
        handleFilter(e);
        handlePageChange(1)
    }

    return (
        <div>
            <p>Filter Countries By:</p>
            <div>
                <input type="radio" name="continent" value="All" id="all" onClick={(e) => handleFiltering(e.target.value)} defaultChecked/>
                <label htmlFor="all">All</label>
                <input type="radio" name="continent" value="Africa" id="africa" onClick={(e) => handleFiltering(e.target.value)}/>
                <label htmlFor="africa">Africa</label>
                <input type="radio" name="continent" value="Asia" id="asia" onClick={(e) => handleFiltering(e.target.value)}/>
                <label htmlFor="asia">Asia</label>
                <input type="radio" name="continent" value="Antarctica" id="antarctica" onClick={(e) => handleFiltering(e.target.value)}/>
                <label htmlFor="antarctica">Antarctica</label>
                <input type="radio" name="continent" value="South America" id="southAmerica" onClick={(e) => handleFiltering(e.target.value)}/>
                <label htmlFor="southAmerica">South America</label>
                <input type="radio" name="continent" value="North America" id="northAmerica" onClick={(e) => handleFiltering(e.target.value)}/>
                <label htmlFor="northAmerica">North America</label>
                <input type="radio" name="continent" value="Europe" id="europe" onClick={(e) => handleFiltering(e.target.value)}/>
                <label htmlFor="europe">Europe</label>
                <input type="radio" name="continent" value="Oceania" id="oceania" onClick={(e) => handleFiltering(e.target.value)}/>
                <label htmlFor="oceania">Oceania</label>
            </div>
        </div>
    )
}