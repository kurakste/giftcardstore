const initialState =[
  'Набережные Челны',
];

export default function city( state = initialState, action ) {
  
  switch (action.type) {
  case 'CHANGE_CITY':
    return [
      action.payload
    ]; 
      
  default:
    return state;
  }
}
