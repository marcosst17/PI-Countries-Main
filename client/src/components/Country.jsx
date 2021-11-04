import { Link } from 'react-router-dom';
import "../styles/countriesCard.css";
function Country({name, flag, id, continent, population}){

    return (
        <div className="card">
            <Link to={`/countries/${id}/details`} className="link">
                <div key={id} >
                    <h1>{name}</h1>
                    <h2 className="content">Continent: {continent}</h2>
                    <h3 className="content">Population: {population}</h3>
                    <img src={flag} alt="imagen"></img>
                </div>
            </Link>
        </div>
    )
}

export default Country