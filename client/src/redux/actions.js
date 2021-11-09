import axios from "axios"
import { 
    GET_ALL_COUNTRIES, 
    GET_COUNTRIES_BY_CONTINENT_ORDER_NAME, 
    CREATE_ACTIVITY, 
    GET_COUNTRIES_BY_CONTINENT_ORDER_POPULATION 
} from "../utils/constants"

export function getAllCountries() { // EN EL FORM
    return function (dispatch){
        axios.get("http://localhost:3001/countries/all")
        .then(countries => {
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: countries.data
            })
        })
        .catch(err => console.log(err))
    }
}

export function createActivity(activity){ // EN EL FORM
    return function(dispatch){
        axios.post("http://localhost:3001/activities", activity)
        .then(activity => {
            dispatch({
                type: CREATE_ACTIVITY,
                payload: activity.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}


export function allRoutes(search, continent, param, order, activities) {
    return function(dispatch){
        axios.get(`http://localhost:3001/countries?continent=${continent}&param=${param}&order=${order}&search=${search}&activities=${activities}`)
        .then(countries => {
            if(param === "population"){
                dispatch({
                    type: GET_COUNTRIES_BY_CONTINENT_ORDER_POPULATION,
                    payload: {countries: countries.data, order: {[param]: order}}
                })
            } else {
                dispatch({
                    type: GET_COUNTRIES_BY_CONTINENT_ORDER_NAME,
                    payload: {countries: countries.data, order: {[param]: order}}
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}