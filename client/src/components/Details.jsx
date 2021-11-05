import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import "../styles/details.css"
export default function Details(){
    let params = useParams()
    const [details, setDetails] = useState({})
    const [borders, setBorders] = useState([])
    useEffect(() => {
        async function fetchDetailsAndBorders(){
            let response = await axios.get("http://localhost:3001/countries/" + params.id + "/details")
            let data = response.data
            setDetails(data)
            let queries = data[0].borders[0] !== "No Borders" ? data[0].borders.join("_") : ""
            let response2 = await axios.get("http://localhost:3001/countries/borders?borders="+queries)
            let borderResponse = response2.data
            console.log(borderResponse)
            setBorders(borderResponse)
        }
        fetchDetailsAndBorders()
        // eslint-disable-next-line
    }, [])


    const handleBorders = (e) => {
        console.log(e.target)
        axios.get("http://localhost:3001/countries/"+e.target.id+"/details")
        .then(r => {
            setDetails(r.data)
            let queries = r.data[0].borders[0] !== "No Borders" ? r.data[0].borders.join("_") : ""
            axios.get("http://localhost:3001/countries/borders?borders="+queries)
            .then(re => setBorders(re.data))
        })
    }

    return (
        <div className="detailsMain">
            <div className="detailsContainer">
                
                <h2 className="fixedD">DETAILS</h2>
                {
                    details.length > 0 ?
                    <>
                        <h1 className="nameCountry">{details[0].name}</h1>
                        <div className="flagsContainer">
                            <img src={details[0].flag} alt="No Flag on Record"/>
                            <img src={details[0].coatOfArms} alt="No Coat of Arms on Record" className="coat"/>
                        </div>
                        <div className="infoContainer">
                            <div className="infoDivs">
                                <h2>Continent: </h2>
                                <h2 className="theContent">{details[0].continent}</h2>
                            </div>
                            <div className="infoDivs">
                                <h2>Subregion: </h2>
                                <h2 className="theContent">{details[0].subregion}</h2>
                            </div>
                            <div className="infoDivs">
                                <h2>Capital: </h2>
                                <h2 className="theContent">{details[0].capital}</h2>
                            </div>
                            <div className="infoDivs">
                                <h2>Population: </h2>
                                <h2 className="theContent">{details[0].population}</h2>
                            </div>
                            <div className="infoDivs">
                                <h2>Area: </h2>
                                <h2 className="theContent">{details[0].area}</h2>
                            </div>
                            <div className="infoDivs">
                                <h2>ID: </h2>
                                <h2 className="theContent">{details[0].id}</h2>
                            </div>
                            <div className="infoDivs">
                                <h2>Has access to the ocean: </h2>
                                <h2 className="theContent">{details[0].landLocked}</h2>
                            </div>
                            <div className="infoDivs timezoneDiv">
                                <h2>Timezones: </h2>
                                <h2 className="theContent timezone">{details[0].timezone}</h2>
                            </div>
                        </div>
                        <div className="borderContainer">
                            <h2>Borders: {
                                borders.length > 0 ?
                                borders.map(el => {
                                    return (
                                        <Link to={`/countries/${el.id}/details`} onClick={(e) => handleBorders(e)} key={el.id} id={el.id}>
                                            <p id={el.id}>{el.name}</p>
                                        </Link>
                                    )
                                })
                                : <p>No Borders</p>
                            }
                            </h2>
                        </div>

                        
                    </>
                    : <div>Loading...</div>
                }
            </div>
            {/* <hr/> */}
            <div className="activitiesContainer">
                {/* <h3>Activities : {details[0].activities[0].name}</h3> */}
                <h2 className="fixedA">ACTIVITIES</h2>
                {
                    details.length > 0 ?
                    details[0].activities.map(el => {
                        return (
                            <div>
                                <h3 key={el.id}>{el.name}</h3>
                            </div>
                        )
                    })
                    : <div>Loading...</div>
                }
            </div>
        </div>
    )
}