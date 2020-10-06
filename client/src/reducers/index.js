import { combineReducers } from 'redux';
import users from './users';
import products from './products';
import images from './images';


export default combineReducers({
  products,
  users,
  images,
});
