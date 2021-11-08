export default function Filters({handlePageChange, handleComposeSearch}){

    const handleFiltering = (e) => {
        handlePageChange(1)
        handleComposeSearch(e)
    }

    return (
        <div>
            <p className="mainText continent">FILTER BY CONTINENT</p>
            <div>
                <input className="input" type="radio" name="continent" value="All" id="all" onClick={(e) => handleFiltering(e)} defaultChecked/>
                <label htmlFor="all" className="label">All</label>
                <input className="input" type="radio" name="continent" value="Africa" id="africa" onClick={(e) => handleFiltering(e)}/>
                <label htmlFor="africa" className="label">Africa</label>
                <input className="input" type="radio" name="continent" value="Asia" id="asia" onClick={(e) => handleFiltering(e)}/>
                <label htmlFor="asia" className="label">Asia</label>
                <input className="input" type="radio" name="continent" value="Antarctica" id="antarctica" onClick={(e) => handleFiltering(e)}/>
                <label htmlFor="antarctica" className="label">Antarctica</label>
                <input className="input" type="radio" name="continent" value="South America" id="southAmerica" onClick={(e) => handleFiltering(e)}/>
                <label htmlFor="southAmerica" className="label">South America</label>
                <input className="input" type="radio" name="continent" value="North America" id="northAmerica" onClick={(e) => handleFiltering(e)}/>
                <label htmlFor="northAmerica" className="label">North America</label>
                <input className="input" type="radio" name="continent" value="Europe" id="europe" onClick={(e) => handleFiltering(e)}/>
                <label htmlFor="europe" className="label">Europe</label>
                <input className="input" type="radio" name="continent" value="Oceania" id="oceania" onClick={(e) => handleFiltering(e)}/>
                <label htmlFor="oceania" className="label">Oceania</label>
            </div>
        </div>
    )
}