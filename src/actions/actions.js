


export const addFeature = (addedFeat) => {
    return { type: 'ADD_FEATURE', payload: addedFeat }
}


export const removeFeature = (rf) => {
    return { type: 'REMOVE_FEATURE' , payload: rf}
}