import React, { useEffect, useState } from 'react';
// import store from '../redux/store';
// import * as actionCreators from '../redux/actions';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchCities } from '../redux/actions';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import Country from './Country';
import Pagination from './Pagination';
import { CTR_PER_PAGE } from "../utils/constants"
function Countries() {
    let countries = useSelector(state => state.countries);
    let pages = useSelector(state => state.pages);
    // let dispatch = useDispatch()
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
    console.log(countries.length)

    const handlePageChange = (page) => {
        setPage(page);
    }
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
            <Pagination totalPages={pages} handlePageChange={handlePageChange} />
            {
                selectedCtrs.length > 0 ? selectedCtrs.map(country => {
                    return <Country name={country.name} flag={country.flag} id={country.id} continent={country.continent} key={country.id}/>
                })
                : <h4>No countries found</h4>
            }
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