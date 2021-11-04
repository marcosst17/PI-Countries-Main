import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export default function FilterByActivity({activitySt, handleFilterAct}){
    /* let copyCountries = useSelector(state => state.copiaCountries) */
    /* console.log(copyCountries)
    let test = copyCountries.filter(el => el.activities.find(el => el.name === "Testing"))
    console.log(test) */
    /* const [activitySt, setActivitySt] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/activities")
        .then(act => {
            let mapped = act.data.map(el => el.name)
            setActivitySt(mapped)
        })
    }, []) */
    /* console.log(activitySt) */
    return (
        <div style={{"width": "100%"}}>
            <p className="mainText">FILTER BY ACTIVITY</p>

            {
                activitySt.length > 0 ?
                activitySt.map(el => {
                    return (
                        <div className="checksContainer">
                            <input className="checkBox" type="checkbox" name="activities" value={el} id={el} onChange={handleFilterAct}></input>
                            <label htmlFor={el} className="labelAct">{el}</label>
                            <br/>
                        </div>
                    )
                })
                : <></>
            }
        </div>
    )
}