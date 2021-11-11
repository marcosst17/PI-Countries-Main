import linkedin from "../styles/linkedin.png"
import github from "../styles/github.png"
import "../styles/about.css"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutSubContainer">
                <div className="titleContainer">
                    <h1 className="aboutTitle gradient">Countries App</h1>
                    <h2>Developed By Marcos Stricker</h2>
                    <h3>This project is part of the Bootcamp of <a href="https://www.soyhenry.com/" className="outLinks" target="_blank" rel="noreferrer">Soy Henry</a></h3>
                </div>
                <div className="aboutProject">
                    <h1 className="gradient">About This Project</h1>
                    <h3>A Single Page Application made with React, it loads a PostgreSQL Database using Sequelize with the information from
                        the <a href="https://restcountries.com/" className="outLinks" target="_blank" rel="noreferrer">RestCountries API</a>. I then add Tourist Activities for each country and display them on the Details Page of that country.
                    </h3>
                </div>
                <div className="aboutMe">
                    <h1 className="gradient">About Me</h1>
                    <h3>Hi, my name is Marcos, i'm a Full Stack Web Developer from Argentina, and currently a Full Stack Teaching Assistant at Henry. If you'd like to contact me, you can do so via my
                        LinkedIn profile.
                    </h3>
                </div>
                <div className="logosContainer">
                    <a href="https://www.linkedin.com/in/marcos-stricker-3301171b7/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                    <a href="https://github.com/marcosst17" target="_blank" rel="noreferrer"><img src={github} alt="Gmail" /></a>
                </div>
            </div>
            <div className="goBackAbout">
                <Link to="/">
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
    )
}