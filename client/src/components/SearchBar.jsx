import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCities, searchCountries} from "../redux/actions"
export default function SearchBar(){
    // let countries = useSelector(state => state.countries);
    // let filteredCountries = useSelector(state => state.filteredCountries);
    let dispatch = useDispatch()
    const [search, setSearch] = useState("");

    function onSubmit(e){
        e.preventDefault()
        dispatch(searchCountries(search))
        setSearch("")
    }

    function onInputChange(e){
        setSearch(e.target.value)
        if(e.target.value.length > 0){
            // filteredCountries = countries.filter(country => country.name.includes(e.target.value))
            dispatch(searchCountries(search))
        } else {
            dispatch(fetchCities())
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search" onChange={onInputChange} value={search}/>
            <button type="submit" value="Search">Search</button>
            </form>
        </div>
    )
}