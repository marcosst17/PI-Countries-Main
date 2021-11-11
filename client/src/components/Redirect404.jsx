import { Link } from "react-router-dom"
import "../styles/404.css"
import gif from "../styles/404.gif"

export default function Redirect404() {
    return (
        <div className="div404">
            <h1 className="text404">404 .. Better run !</h1>
            <Link to="/">
                <img src={gif} alt="soy el gif" />
            </Link>
            <Link to="/" className="link">
                <h1 className="goBack">Go Back</h1>
            </Link>
        </div>
    )
}