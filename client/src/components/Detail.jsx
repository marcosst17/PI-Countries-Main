

export default function Detail({details}) {
    return (
        <>
            <h1 className="nameCountry">{details.name.toUpperCase()}</h1>
            <div className="flagsContainer">
                <img src={details.flag} alt="No Flag on Record"/>
                <img src={details.coatOfArms} alt="No Coat of Arms on Record" className="coat"/>
            </div>
            <div className="infoContainer">
                <div className="infoDivs">
                    <h2>Continent: </h2>
                    <h2 className="theContent">{details.continent}</h2>
                </div>
                <div className="infoDivs">
                    <h2>Subregion: </h2>
                    <h2 className="theContent">{details.subregion}</h2>
                </div>
                <div className="infoDivs">
                    <h2>Capital: </h2>
                    <h2 className="theContent">{details.capital}</h2>
                </div>
                <div className="infoDivs">
                    <h2>Population: </h2>
                    <h2 className="theContent">{details.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h2>
                </div>
                <div className="infoDivs">
                    <h2>Area: </h2>
                    <h2 className="theContent">{details.area}</h2>
                </div>
                <div className="infoDivs">
                    <h2>ID: </h2>
                    <h2 className="theContent">{details.id}</h2>
                </div>
                <div className="infoDivs">
                    <h2>Has access to the ocean: </h2>
                    <h2 className="theContent">{details.landLocked}</h2>
                </div>
                <div className="infoDivs timezoneDiv">
                    <h2>Timezones: </h2>
                    <h2 className="theContent timezone">{details.timezone}</h2>
                </div>
            </div>
        </>
    )
}