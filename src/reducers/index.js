import { combineReducers } from 'redux';
import favorites from './favorites.js';
import city from './city.js';

export default combineReducers({
  favorites,
  city
})
