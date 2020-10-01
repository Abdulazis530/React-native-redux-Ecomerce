import { combineReducers } from 'redux';
import chats from './chats';
import products from './products';


export default combineReducers({
  chats,
  products
});
