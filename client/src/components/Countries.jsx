import React, { useEffect, useState } from 'react';
// import store from '../redux/store';
// import * as actionCreators from '../redux/actions';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import { /* fetchCities, getCountriesByContinent,  */allRoutes } from '../redux/actions';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import Pagination from './Pagination';
import { CTR_PER_PAGE } from "../utils/constants"
import SearchBar from './SearchBar';
import Filters from './Filters';
import Orders from './Orders';
import FilterByActivity from './FilterByActivity';
import axios from 'axios';
import "../styles/countriesGrl.css";
// import "../styles/countriesCard.css";
import Country from './Country';
function Countries() {
    let countries = useSelector(state => state.countries);
    let pages = useSelector(state => state.pages);
    let dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * CTR_PER_PAGE;
    const selectedCtrs = countries.slice(startIndex, startIndex + CTR_PER_PAGE);

    const handlePageChange = (page) => {
        setPage(page);
    }

    const handleForward = () => {
        page + 1 > pages ? setPage(page) : setPage(page + 1)
    }

    const handleBackward = () => {
        page === 1 ? setPage(1) : setPage(page - 1)
    }

    const [composeSearch, setComposeSearch] = useState({
        searchBar: "",
        continent: "",
        param: "",
        order: "",
        activities: ["all"]
    })

    const handleComposeSearch = (e) => {
        console.log(e.target.value)
        if(e.target.value.split("_").length === 2){
            let split = e.target.value.split("_")
            setComposeSearch({
                ...composeSearch,
                param: split[0],
                order: split[1]
            })
        } else {
            setComposeSearch({
                ...composeSearch,
                [e.target.name]: e.target.value
            })
        }
    }
    
    const [activitySt, setActivitySt] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/activities")
        .then(act => {
            let mapped = act.data.map(el => el.name)
            setActivitySt(mapped)
        })
    }, [])
    // console.log(activitySt)

    useEffect(() => {
        let joinedActivities = composeSearch.activities.join("_")
        // console.log(joinedActivities)
        dispatch(allRoutes(composeSearch.searchBar, composeSearch.continent, composeSearch.param, composeSearch.order, joinedActivities))
    }, [composeSearch])

    // const [selectedAct, setSelectedAct] = useState([])
    
    const handleFilterAct = (e) => {
/*         let found2 = composeSearch.activities.find(el => el === e.target.value)
        if(found2){
            // console.log("entre al if");
            let deleted2 = composeSearch.activities.filter(el => el !== e.target.value)
            setComposeSearch({
                ...composeSearch,
                activities: deleted2
            }) */
        setComposeSearch({
            ...composeSearch,
            activities: [e.target.value]
        })
    }
    return (
        <div className="allContainer">
            <div className="ordersContainer">
                <div className="searchContainer">
                    <SearchBar handlePageChange={handlePageChange} handleComposeSearch={handleComposeSearch}/>
                </div>
                <div className="filtersContainer">
                    <Filters /* handleFilter={handleFilter} */ handlePageChange={handlePageChange} handleComposeSearch={handleComposeSearch}/>
                    <Orders handleComposeSearch={handleComposeSearch}/>
                </div>
                <div className="activityContainer">
                    <FilterByActivity activitySt={activitySt} handleFilterAct={handleFilterAct}/>
                </div>
            </div>
            <div className="countriesContainer">
                {
                    selectedCtrs.length > 0 ? selectedCtrs.map(country => {
                        return <Country name={country.name} flag={country.flag} id={country.id} continent={country.continent} key={country.id} population={country.population}/>
                    })
                    : <h4>No countries found</h4>
                }
            </div>
            <div className="paginationContainer">
                <Pagination totalPages={pages} handlePageChange={handlePageChange} handleForward={handleForward} handleBackward={handleBackward}/>
            </div>
        </div>
    )
}

// function mapStateToProps(state){
//     return {
//         cities: state.cities
//     }
// }

// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actionCreators, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Example);
export default Countries