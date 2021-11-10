import React, { useEffect, useState } from 'react';
import { allRoutes } from '../redux/actions';
import { useDispatch, useSelector } from "react-redux"
import Pagination from './Pagination';
import { CTR_PER_PAGE } from "../utils/constants"
import SearchBar from './SearchBar';
import Filters from './Filters';
import Orders from './Orders';
import FilterByActivity from './FilterByActivity';
import axios from 'axios';
import "../styles/countriesGrl.css";
import Country from './Country';

function Countries() {
    let countries = useSelector(state => state.countries);
    let pages = useSelector(state => state.pages);
    let dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * CTR_PER_PAGE;
    const selectedCtrs = countries.slice(startIndex, startIndex + CTR_PER_PAGE);

    const scrollTop = () => {
        let container = document.querySelector(".countriesContainer")
        container.scrollTo(0, 0)
    }

    const handlePageChange = (page) => {
        setPage(page);
        scrollTop()
    }

    const handleForward = () => {
        page + 1 > pages ? setPage(page) : setPage(page + 1)
        scrollTop()
    }

    const handleBackward = () => {
        page === 1 ? setPage(1) : setPage(page - 1)
        scrollTop()
    }

    const [composeSearch, setComposeSearch] = useState({
        searchBar: "",
        continent: "",
        param: "",
        order: "",
        activities: ["all"]
    })

    const handleComposeSearch = (e) => {
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

    useEffect(() => {
        let joinedActivities = composeSearch.activities.join("_")
        dispatch(allRoutes(composeSearch.searchBar, composeSearch.continent, composeSearch.param, composeSearch.order, joinedActivities))
        //eslint-disable-next-line
    }, [composeSearch])
    
    const handleFilterAct = (e) => {
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
                    <Filters handlePageChange={handlePageChange} handleComposeSearch={handleComposeSearch}/>
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
                <Pagination totalPages={pages} handlePageChange={handlePageChange} handleForward={handleForward} handleBackward={handleBackward} currentPage={page}/>
            </div>
        </div>
    )
}

export default Countries