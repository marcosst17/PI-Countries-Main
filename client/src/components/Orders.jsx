import { useDispatch } from "react-redux";
// import { getCountriesByContinent } from "../redux/actions";


export default function Orders({handleComposeSearch}){

    let dispatch = useDispatch()

    const handleSort = (e) => {
        /* if(e.target.value === "name_ASC" || e.target.value === "name_DESC"){
            dispatch({type: "NAME_ORDER", payload: e.target.value})
        }
        if(e.target.value === "population_ASC" || e.target.value === "population_DESC"){
            dispatch({type: "POPULATION_ORDER", payload: e.target.value})
        } */
        // dispatch(getCountriesByContinent("All"))
        handleComposeSearch(e)
    }

    return (
        <div>
            <p className="mainText">ORDER BY</p>
            <select onChange={e => handleSort(e)} defaultValue="ASC">
                <option value="name_ASC">Name Asc</option>
                <option value="name_DESC">Name Desc</option>
                <option value="population_ASC">Population Asc</option>
                <option value="population_DESC">Population Desc</option>
            </select>
        </div>
    );
}