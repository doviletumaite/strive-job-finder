export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'

export const addToFavourite = (job) => ({
    type: ADD_TO_FAVOURITE,
    payload: job
})

export const removeFromFavourite = (job) => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: job
})