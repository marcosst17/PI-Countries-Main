import axios from "axios"
export function getAllCountries() { // EN EL FORM
    return function (dispatch){
        axios.get("http://localhost:3001/countries/all")
        .then(countries => {
            dispatch({
                type: "GET_ALL_COUNTRIES",
                payload: countries.data
            })
        })
        .catch(err => console.log(err))
    }
}

/* export function fetchCities(){
    return function (dispatch){
        axios.get("http://localhost:3001/countries")
        .then(countries => {
            dispatch({
                type: "GET_COUNTRIES",
                payload: countries.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
} */

export function getCountriesByContinent(continent){  // EN APP
    return function (dispatch){
        if(continent === "All"){
            axios.get("http://localhost:3001/countries/all")
            .then(countries => {
                dispatch({
                    type: "GET_ALL_COUNTRIES",
                    payload: countries.data
                })
            })
        } else {
            axios.get(`http://localhost:3001/countries/continent/${continent}`)
            .then(countries => {
                dispatch({
                    type: "GET_COUNTRIES_BY_CONTINENT_ORDER_NAME",
                    payload: countries.data
                })
            })
            .catch(err => console.log(err))
        }
    }
}

/* export function searchCountries(search){  // NUNCA
    return function(dispatch){
        axios.get("http://localhost:3001/countries?name="+search)
        .then(countries => {
            dispatch({
                type: "SEARCH_COUNTRIES",
                payload: countries.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
} */

export function createActivity(activity){ // EN EL FORM
    return function(dispatch){
        axios.post("http://localhost:3001/activities", activity)
        .then(activity => {
            dispatch({
                type: "CREATE_ACTIVITY",
                payload: activity.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}


export function testing(search, continent, param, order, activities) {
    return function(dispatch){
        axios.get(`http://localhost:3001/countries/testing?continent=${continent}&param=${param}&order=${order}&search=${search}&activities=${activities}`)
        .then(countries => {
            if(param === "population"){
                dispatch({
                    type: "GET_COUNTRIES_BY_CONTINENT_ORDER_POPULATION",
                    payload: {countries: countries.data, order: {[param]: order}}
                })
            } else {
                dispatch({
                    type: "GET_COUNTRIES_BY_CONTINENT_ORDER_NAME",
                    payload: {countries: countries.data, order: {[param]: order}}
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}