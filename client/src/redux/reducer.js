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
        /* case "SEARCH_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                pages: Math.ceil(action.payload.length / CTR_PER_PAGE)
            } */
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
            console.log(action.payload)
            switch(action.payload.order){
                case {"name": "ASC"}:
                    console.log("entre al name: asc")
                    const nameAsc = action.payload.countries.sort((a,b) => {
                        if(a.name < b.name) return -1
                        if(a.name > b.name) return 1
                        return 0
                    })
                    return {
                        ...state,
                        countries: [...nameAsc],
                        pages: Math.ceil(action.payload.countries.length / CTR_PER_PAGE)
                    }
                case {name: "DESC"}:
                    const nameDesc = action.payload.countries.sort((a,b) => {
                        if(a.name > b.name) return -1
                        if(a.name < b.name) return 1
                        return 0
                    })
                    return {
                        ...state,
                        countries: [...nameDesc],
                        pages: Math.ceil(action.payload.countries.length / CTR_PER_PAGE)
                    }
                case {population: "ASC"}:
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
                case {population: "DESC"}:
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
                default: 
                console.log("default")
                const defaultOrder = action.payload.countries.sort((a,b) => {
                    if(a.name < b.name) return -1
                    if(a.name > b.name) return 1
                    return 0
                })
                return {
                    ...state,
                    countries: [...defaultOrder],
                    pages: Math.ceil(action.payload.countries.length / CTR_PER_PAGE)
                }
            }
            /* return {
                ...state,
                countries: action.payload.countries,
                pages: Math.ceil(action.payload.countries.length / CTR_PER_PAGE)
            } */
        /* case "NAME_ORDER":
            const orderByName =
            action.payload === "name_ASC" ?
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
            action.payload === "population_ASC" ?
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
            } */
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

