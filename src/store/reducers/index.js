
export const initialState = {
    favourites: []
}

export default function mainReducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case 'ADD_TO_FAVOURITE': 
        return {
            ...state,
            favourites: [...state.favourites, payload]
        }
        case 'REMOVE_FROM_FAVOURITE':
        return {
            ...state,
            favourites: state.favourites.filter(job => job !== payload)
        }
        default: return state
    }
}