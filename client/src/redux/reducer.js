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
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                copiaCountries: action.payload,
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
                copiaCountries: action.payload,
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
                copiaCountries: action.payload,
                pages: Math.ceil(action.payload.length / CTR_PER_PAGE)
            }
        case "NAME_ORDER":
            const orderByName =
            action.payload === "name_asc" ?
            state.copiaCountries.sort((a,b) => {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0
            })
            :
            state.copiaCountries.sort((a, b) => {
                if(a.name > b.name) return -1
                if(a.name < b.name) return 1
                return 0
            })
            return {
                ...state,
                countries: [...orderByName]
            }
        case "POPULATION_ORDER":
            const orderByPopulation =
            action.payload === "pop_asc" ?
            state.copiaCountries.sort((a,b) => {
                if(a.population < b.population) return -1
                if(a.population > b.population) return 1
                return 0
            })
            :
            state.copiaCountries.sort((a, b) => {
                if(a.population > b.population) return -1
                if(a.population < b.population) return 1
                return 0
            })
            return {
                ...state,
                countries: [...orderByPopulation]
            }
        /* case "ORDER_NAME_ASC":
            return {
                ...state,
                countries: state.copiaCountries.sort((a, b) => a.name.localeCompare(b.name)),
                pages: Math.ceil(state.copiaCountries.length / CTR_PER_PAGE)
            }
        case "ORDER_NAME_DESC":
            return {
                ...state,
                countries: state.copiaCountries.sort((a, b) => b.name.localeCompare(a.name)),
                pages: Math.ceil(state.copiaCountries.length / CTR_PER_PAGE)
            } */
        default:
            return state
    }
}

