import { CTR_PER_PAGE } from "../utils/constants"
const initialState = {
    countries: [],
    filteredCountries: [],
    activities: [],
    pages: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function reducer(state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                pages: Math.ceil(action.payload.length / CTR_PER_PAGE)
            }
        case "SEARCH_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                pages: Math.ceil(action.payload.length / CTR_PER_PAGE)
            }
        case "GET_ALL_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                pages: Math.ceil(action.payload.length / CTR_PER_PAGE)
            }
        case "CREATE_ACTIVITY":
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case "GET_COUNTRIES_BY_CONTINENT":
            return {
                ...state,
                countries: action.payload,
                pages: Math.ceil(action.payload.length / CTR_PER_PAGE)
            }
        default:
            return state
    }
}

