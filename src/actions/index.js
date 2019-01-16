const addToFavorite = (product) => {
    return {
        type: 'ADD_TO_FAV',
        payload: product
    };
};


const removeFromFavorite = (product) => {
    return {
        type: 'REMOVE_FROM_FAV',
        payload: product
    };
};

export { addToFavorite, removeFromFavorite };