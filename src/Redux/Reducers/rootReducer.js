import { combineReducers } from 'redux';
import bagReducer from './bagReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  bag: bagReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
