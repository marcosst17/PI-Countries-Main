import { CTR_PER_PAGE } from "../utils/constants"
const initialState = {
    countries: [],
    copiaCountries: [],
    activities: [],
    pages: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function reducer(state = initialState, action){
    switch(action.type){
        case "GET_ALL_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                copiaCountries: action.payload,
                pages: Math.ceil(action.payload.length / CTR_PER_PAGE)
            }
        case "CREATE_ACTIVITY":
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case "GET_COUNTRIES_BY_CONTINENT_ORDER_NAME":
            if(action.payload.order.name === "DESC"){
                console.log("entre al order name desc")
                const nameDesc = action.payload.countries.sort((a,b) => {
                    if(a.name < b.name) return 1
                    if(a.name > b.name) return -1
                    return 0
                })
                return {
                    ...state,
                    countries: [...nameDesc],
                    pages: Math.ceil(action.payload.countries.length / CTR_PER_PAGE)
                }
            } else {
                console.log("entre al order name asc");
                const nameAsc = action.payload.countries.sort((a,b) => {
                    if(a.name > b.name) return 1
                    if(a.name < b.name) return -1
                    return 0
                })
                return {
                    ...state,
                    countries: [...nameAsc],
                    pages: Math.ceil(action.payload.countries.length / CTR_PER_PAGE)
                }
            }
        case "GET_COUNTRIES_BY_CONTINENT_ORDER_POPULATION":
            if(action.payload.order.population === "ASC"){
                console.log("entre al order pop asc");
                const popAsc = action.payload.countries.sort((a,b) => {
                    if(a.population < b.population) return -1
                    if(a.population > b.population) return 1
                    return 0
                })
                return {
                    ...state,
                    countries: [...popAsc],
                    pages: Math.ceil(action.payload.countries.length / CTR_PER_PAGE)
                }
            } else {
                console.log("entre al order pop desc");
                const popDesc = action.payload.countries.sort((a,b) => {
                    if(a.population > b.population) return -1
                    if(a.population < b.population) return 1
                    return 0
                })
                return {
                    ...state,
                    countries: [...popDesc],
                    pages: Math.ceil(action.payload.countries.length / CTR_PER_PAGE)
                }
            }
        default:
            return state
    }
}

