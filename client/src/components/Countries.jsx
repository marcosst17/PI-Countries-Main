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
        // eslint-disable-next-line
    }, [])
    console.log(countries)
    // if(countries.length === 0) return <div>Loading...</div>
     return (
        <div>
            {   
                countries.length > 0 ?
                    countries.map(country => {
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