import { Link } from "react-router-dom";
import "../styles/navbar.css"


export default function NavBar() {

    return (
        <div className="navBar">
            <Link to="/" className="navLinks">
                <p>HOME</p>
            </Link>
            <Link to="/countries" className="navLinks">
                <p className="navCountries">COUNTRIES</p>
            </Link>
            <Link to="/activities" className="navLinks">
                <p>CREATE ACTIVITY</p>
            </Link>
        </div>
    )
}