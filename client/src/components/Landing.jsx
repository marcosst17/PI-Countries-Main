import { Link } from "react-router-dom"
import "../index.css"
import "../styles/landing.css"

export default function Landing() {
    return <div className="landing">
        <h1>COUNTRIES APP</h1>
        <Link to="/countries">
            <p>Home</p>
        </Link>
    </div>
}