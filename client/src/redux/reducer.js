const initialState = {
    cities: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CITIES':
            return (
                fetch("http://localhost:3001/countries")
                .then(res => res.json())
                .then(res => {
                    return {
                        ...state,
                        cities: res
                    }
                })
            )
        default:
            return state
    }
}

export default reducer;