export const addToFavorite = (product) => {
    return {
        type: 'ADD_TO_FAV',
        payload: product
    };
};

