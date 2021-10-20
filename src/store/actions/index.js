export const addToFavourite = (job) => ({
    type: 'ADD_TO_FAVOURITE',
    payload: job
})

export const removeFromFavourite = (job) => ({
    type: 'REMOVE_FROM_FAVOURITE',
    payload: job
})