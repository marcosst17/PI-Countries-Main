import axios from "axios"
export function getAllCountries() {
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

export function fetchCities(){
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
}

export function searchCountries(search){
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
}

export function createActivity(activity){
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