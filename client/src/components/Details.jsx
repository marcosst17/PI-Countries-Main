import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import "../styles/details.css"
export default function Details(){
    let params = useParams()
    const [details, setDetails] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3001/countries/" + params.id + "/details")
        .then(r => setDetails(r.data))
        // eslint-disable-next-line
    }, [])

    const handleBorders = (e) => {
        console.log(e)
        axios.get("http://localhost:3001/countries/"+e.target.innerHTML+"/details")
        .then(r => setDetails(r.data))
    }
    // console.log(details)
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
                        <h2>Continent: {details[0].continent}</h2>
                        <h2>Subregion: {details[0].subregion}</h2>
                        <h2>Capital: {details[0].capital}</h2>
                        <h2>Population: {details[0].population}</h2>
                        <h2>Area: {details[0].area}</h2>
                        <h2>ID: {details[0].id}</h2>
                        <h2>Timezones: {details[0].timezone}</h2>
                        <div>
                            <h2>Borders: {
                                details[0].borders.length > 0 ?
                                details[0].borders.map(el => {
                                    return (
                                        el === "No Borders" ? 
                                        <p>No borders</p>
                                        :
                                        <Link to={`/countries/${el}/details`} onClick={(e) => handleBorders(e)} key={el}>
                                            <p>{el}</p>
                                        </Link>
                                    )
                                })
                                : <></>
                            }
                            </h2>
                        </div>
                        <h2>Has access to the sea: {details[0].landLocked}</h2>
                        
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