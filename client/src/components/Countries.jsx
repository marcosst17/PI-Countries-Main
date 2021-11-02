import React, { useEffect, useState } from 'react';
// import store from '../redux/store';
// import * as actionCreators from '../redux/actions';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchCities, getCountriesByContinent, testing } from '../redux/actions';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import Country from './Country';
import Pagination from './Pagination';
import { CTR_PER_PAGE } from "../utils/constants"
import SearchBar from './SearchBar';
import Filters from './Filters';
import Orders from './Orders';
import FilterByActivity from './FilterByActivity';
import axios from 'axios';
function Countries() {
    let countries = useSelector(state => state.countries);
    let pages = useSelector(state => state.pages);
    let dispatch = useDispatch()
    const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(0);
    // componentWillMount()
    // useEffect(() => {
    //     // dispatch(fetchCities())
    //     // setTotalPages(Math.ceil(countries.length / 10))
    //     // eslint-disable-next-line
    // }, [])
    // const ctrPerPage = 9;
    const startIndex = (page - 1) * CTR_PER_PAGE;
    const selectedCtrs = countries.slice(startIndex, startIndex + CTR_PER_PAGE);
    // console.log(countries.length)

    const handlePageChange = (page) => {
        setPage(page);
    }

    /* const handleFilter = (filter) => {
        dispatch(getCountriesByContinent(filter))
    } */

    const [composeSearch, setComposeSearch] = useState({
        searchBar: "",
        continent: "",
        param: "",
        order: "",
        activities: []
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
    
    // let copyCountries = useSelector(state => state.copiaCountries)
    /* console.log(copyCountries)
    let test = copyCountries.filter(el => el.activities.find(el => el.name === "Testing"))
    console.log(test) */
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
        dispatch(testing(composeSearch.searchBar, composeSearch.continent, composeSearch.param, composeSearch.order, joinedActivities))
    }, [composeSearch])

    // const [selectedAct, setSelectedAct] = useState([])
    
    const handleFilterAct = (e) => {
        /* let found = selectedAct.find(el => el === e.target.value)
        if(found){
            let deleted = selectedAct.filter(el => el !== e.target.value)
            setSelectedAct(deleted)
        } else {
            setSelectedAct([...selectedAct, e.target.value])
        } */
        let found2 = composeSearch.activities.find(el => el === e.target.value)
        if(found2){
            console.log("entre al if");
            let deleted2 = composeSearch.activities.filter(el => el !== e.target.value)
            setComposeSearch({
                ...composeSearch,
                activities: deleted2
            })
        } else {
            console.log("entre al else")
            setComposeSearch({
                ...composeSearch,
                activities: [...composeSearch.activities, e.target.value]
            })
        }
        // setComposeSearch({
        //     ...composeSearch,
        //     activities: [...composeSearch.activities, found2]
        // })
    }
    // const handleSort = () => {
    //     countries.sort((a, b) => {
    //         if (a.name > b.name) {
    //             return 1;
    //         }
    //         if (a.name < b.name) {
    //             return -1;
    //         }
    //         return 0;
    //     })
    // }
    // if(countries.length === 0) return <div>Loading...</div>
    //  return (
    //     <div>
    //         {   
    //             countries.length > 0 ?
    //                 countries.map(country => {
    //                     return <Country name={country.name} flag={country.flag} id={country.id} continent={country.continent} key={country.id}/>
    //                 })
    //             : <h4>No countries found</h4>
    //         }
    //     </div>
    // )
    return (
        <div>
            <SearchBar handlePageChange={handlePageChange} handleComposeSearch={handleComposeSearch}/>
            <Filters /* handleFilter={handleFilter} */ handlePageChange={handlePageChange} handleComposeSearch={handleComposeSearch}/>
            <Orders handleComposeSearch={handleComposeSearch}/>
            <FilterByActivity activitySt={activitySt} handleFilterAct={handleFilterAct}/>
            <div>
            <Pagination totalPages={pages} handlePageChange={handlePageChange} />
            {
                selectedCtrs.length > 0 ? selectedCtrs.map(country => {
                    return <Country name={country.name} flag={country.flag} id={country.id} continent={country.continent} key={country.id}/>
                })
                : <h4>No countries found</h4>
            }
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