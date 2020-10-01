import { combineReducers } from 'redux';
import users from './users';
import products from './products';


export default combineReducers({
  products,
  users,
});
