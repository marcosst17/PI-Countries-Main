import axios from "axios"
export function getCountries() {
    return {
        type: "GET_COUNTRIES",
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