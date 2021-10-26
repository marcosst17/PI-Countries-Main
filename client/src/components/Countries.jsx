import React, { useEffect } from 'react';
// import store from '../redux/store';
// import * as actionCreators from '../redux/actions';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchCities } from '../redux/actions';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import Country from './Country';
function Countries() {
    let countries = useSelector(state => state.countries);
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCities())
    }, [])
    console.log(countries)
     return (
        <div>
        <h1>Example</h1>
            {
                countries.map(country => {
                    return <Country name={country.name} flag={country.flag} id={country.id}/>
                })
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