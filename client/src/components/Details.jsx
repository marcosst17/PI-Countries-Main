import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import "../styles/details.css"
import ActivityDetails from "./ActivitiesDetails";
import Detail from "./Detail";

export default function Details(){
    let params = useParams()

    const [details, setDetails] = useState({})
    const [borders, setBorders] = useState([])

    useEffect(() => {
        async function fetchDetailsAndBorders(){
            let response = await axios.get("http://localhost:3001/countries/" + params.id + "/details")
            let data = response.data
            setDetails(data)
            let queries = data[0]?.borders[0] !== "No Borders" ? data[0].borders.join("_") : ""
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
            let queries = r.data[0]?.borders[0] !== "No Borders" ? r.data[0].borders.join("_") : ""
            axios.get("http://localhost:3001/countries/borders?borders="+queries)
            .then(re => setBorders(re.data))
        })
        const start = document.querySelector(".detailsContainer")
        start.scrollTo(0,0)
    }

    return (
        <div className="detailsMain">
            <div className="detailsContainer">
                <h2 className="fixedD">DETAILS</h2>
                {
                    details.length > 0 ?
                    <>
                        <Detail details={details[0]}/>
                        {/* <div className="borderContainer">
                            <h2 id="borders">Borders: </h2>
                            
                            {
                                borders.length > 0 ?
                                borders.map(el => {
                                    return (
                                        <div className="singleBorderDiv">
                                        <Link to={`/countries/${el.id}/details`} onClick={(e) => handleBorders(e)} key={el.id} id={el.id} className="links">
                                                <h2 id={el.id} className="border">{el.name}</h2>
                                                <img src={el.flag} alt="Flag" className="border" id={el.id}/>
                                        </Link>
                                        </div>
                                    )
                                })
                                : <h2>No Borders</h2>
                            }
                            
                        </div> */}
                    </>
                    : <div>Loading...</div>
                }
            </div>
            <div className="borderAct">
            <div className="borderContainer">
                <h2 className="fixedA" /* id="borders" */>BORDERS</h2>
                <p className="space"/>
                {
                    borders.length > 0 ?
                    borders.map(el => {
                        return (
                            <div className="singleBorderDiv">
                            <Link to={`/countries/${el.id}/details`} onClick={(e) => handleBorders(e)} key={el.id} id={el.id} className="links">
                                    <h2 id={el.id} className="border">{el.name}</h2>
                                    <img src={el.flag} alt="Flag" className="border" id={el.id}/>
                            </Link>
                            </div>
                        )
                    })
                    : <h2>No Borders</h2>
                }
                
            </div>
            <div className="activitiesContainer">
                <h2 className="fixedA">ACTIVITIES</h2>
                <p className="space"/>
                {
                    details.length > 0 ?
                    <ActivityDetails details={details[0].activities}/>
                    : <></>
                }
            </div>
            </div>
        </div>
    )
}