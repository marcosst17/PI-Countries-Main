import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountriesByContinent } from "../redux/actions";


export default function NavBar() {
    let dispatch = useDispatch()

    const handleReset = () => {
        dispatch(getCountriesByContinent("All"))
    }

    return (
        <div>
            <Link to="/">
            <p>Home</p>
            </Link>
            <Link to="/countries" onClick={handleReset}>
            <p>Countries</p>
            </Link>
            <Link to="/activities">
            <p>Activities</p>
            </Link>
        </div>
    )
}