const initialState = {
    countries: [],
    filteredCountries: [],
    activities: [],
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
        case "CREATE_ACTIVITY":
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        default:
            return state
    }
}

