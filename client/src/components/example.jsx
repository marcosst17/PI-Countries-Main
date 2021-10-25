import React, { useEffect } from 'react';
// import store from '../redux/store';
// import * as actionCreators from '../redux/actions';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchCities } from '../redux/actions';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
function Example() {
    let countries = useSelector(state => state.countries);
    console.log(countries)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCities())
    }, [])
    console.log(countries)
     return (
        <div>
        <h1>Example</h1>
            <div>
                {countries.map(ciudad => {
                    return (
                        <div key={ciudad.id}>
                            <h2>{ciudad.name}</h2>
                            <h3>{ciudad.id}</h3>
                            {/* <p>{ciudad.flag}</p> */}
                            <img alt="a" src={ciudad.flag}></img>
                        </div>
                    )
                })}
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
export default Example