import { Link } from "react-router-dom"
import "../index.css"
import "../styles/landing.css"

export default function Landing() {
    return <div className="landing">
        <h1 id="landingCountries">COUNTRIES</h1>
        <h1 id="landingApp">APP</h1>
        <Link to="/countries">
            <p>START</p>
        </Link>
    </div>
}