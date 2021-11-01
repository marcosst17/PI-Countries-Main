import { useDispatch } from "react-redux";
import { getCountriesByContinent } from "../redux/actions";


export default function Orders(){

    let dispatch = useDispatch()

    const handleSort = (e) => {
        console.log(e.target.value)
        if(e.target.value === "name_asc" || e.target.value === "name_desc"){
            dispatch({type: "NAME_ORDER", payload: e.target.value})
        }
        if(e.target.value === "pop_asc" || e.target.value === "pop_desc"){
            dispatch({type: "POPULATION_ORDER", payload: e.target.value})
        }
        // dispatch(getCountriesByContinent("All"))
    }

    return (
        <div>
            <p>Order By:</p>
            <select onChange={e => handleSort(e)} defaultValue="asc">
                <option value="name_asc">Name Asc</option>
                <option value="name_desc">Name Desc</option>
                <option value="pop_asc">Population Asc</option>
                <option value="pop_desc">Population Desc</option>
            </select>
        </div>
    );
}