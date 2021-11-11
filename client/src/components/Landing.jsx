import { Link } from "react-router-dom"
import "../index.css"
import "../styles/landing.css"

export default function Landing() {
    return <div className="landing">
        <div className="aboutNav">
        <Link to="/about" className="link">
            <h3 className="about">ABOUT</h3>
        </Link>
        </div>
        <h1 id="landingCountries">COUNTRIES</h1>
        <h1 id="landingApp">APP</h1>
        <Link to="/countries">
            <div className="neonWrapper">
                <p>START</p>
                <span className="span"></span>
                <span className="dodge"></span>
            </div>
        </Link>
    </div>
}