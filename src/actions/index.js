export const addToFavorite = (product) => {
    console.log('hi!!!', product);
    return {
        type: 'ADD_TO_FAV',
        payload: product
    };
};

