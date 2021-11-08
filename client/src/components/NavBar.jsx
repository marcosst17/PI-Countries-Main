import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allRoutes, getCountriesByContinent } from "../redux/actions";
import "../styles/navbar.css"


export default function NavBar() {
    let dispatch = useDispatch()

    const handleReset = () => {
        dispatch(getCountriesByContinent("All"))
    }

    return (
        <div className="navBar">
            <Link to="/" className="navLinks">
                <p>HOME</p>
            </Link>
            <Link to="/countries" /* onClick={handleReset} */ className="navLinks">
                <p className="navCountries">COUNTRIES</p>
            </Link>
            <Link to="/activities" className="navLinks">
                <p>CREATE ACTIVITY</p>
            </Link>
        </div>
    )
}