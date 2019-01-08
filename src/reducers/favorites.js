const initialState =[
  ];

export default function favorites( state = initialState, action ) {
  console.log(action);
  
  switch (action.type) {
    case 'ADD_TO_FAV':
      let fav = state;
      if (fav.filter( prod => prod.id === action.payload.id).length === 0) {
        // If there is no one element with this id 
        return [
          ...state, 
          action.payload
        ] 
      } else return state
      
    default:
      return state
  }
}
