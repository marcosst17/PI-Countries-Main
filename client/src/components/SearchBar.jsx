import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {searchCountries} from "../redux/actions"
export default function SearchBar(){
    // let countries = useSelector(state => state.countries);
    let dispatch = useDispatch()
    const [search, setSearch] = useState("");

    function onSubmit(e){
        e.preventDefault()
        dispatch(searchCountries(search))
        setSearch("")
    }

    function onInputChange(e){
        setSearch(e.target.value)
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