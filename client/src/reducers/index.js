import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import comicReducer from './comicReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	comics: comicReducer
});
