import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Details(props){
    let params = useParams()
    const [details, setDetails] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3001/countries/" + params.id + "/details")
        .then(r => setDetails(r.data))
        // eslint-disable-next-line
    }, [])
    console.log(details)
    return (
        <div>
            {
                details.length > 0 ?
                <>
                    <h1>{details[0].name}</h1>
                    <img src={details[0].flag} alt="a"/>
                    <h2>Continent: {details[0].continent}</h2>
                    <h2>Subregion: {details[0].subregion}</h2>
                    <h2>Capital: {details[0].capital}</h2>
                    <h2>Population: {details[0].population}</h2>
                    <h2>Area: {details[0].area}</h2>
                    <h2>ID: {details[0].id}</h2>
                    {/* <h3>Activities : {details[0].activities[0].name}</h3> */}
                    {details[0].activities.map(el => <h3 key={el.id}>{el.name}</h3>)}
                </>
                : <div>Loading...</div>
            }
        </div>
    )
}