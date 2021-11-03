import { Link } from 'react-router-dom';
function Country({name, flag, id, continent}){

    return (
        <Link to={`/countries/${id}/details`} className="link">
        <div key={id}>
            <h1>{name}</h1>
            <h2>Continent: {continent}</h2>
            <img src={flag} alt="imagen"></img>
        </div>
        </Link>
    )
}

export default Country