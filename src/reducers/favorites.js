const initialState =[];

export default function favorites( state = initialState, action ) {
    let fav = state;
    switch (action.type) {
    case 'ADD_TO_FAV':
        if (fav.filter( prod => prod.id === action.payload.id).length === 0) {
            // If there is no one element with this id 
            return [
                ...state, 
                action.payload
            ]; 
        } else return state;
    
    default:
        return state;
    }
}
