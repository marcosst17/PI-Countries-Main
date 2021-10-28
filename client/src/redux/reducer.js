const initialState = {
    countries: [],
    filteredCountries: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function reducer(state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            }
        case "SEARCH_COUNTRIES":
            return {
                ...state,
                countries: action.payload
            }
        case "GET_ALL_COUNTRIES":
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state
    }
}

