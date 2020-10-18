import { FETCHING_COMICS, FETCHING_COMICS_SUCCESS, FETCHING_COMICS_FAILURE } from '../actions/types';

const initialState = {
	isFetching: false,
	error: '',
	comicData: []
};

function comicReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_COMICS:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_COMICS_SUCCESS:
			return {
				...state,
				isFetching: false,
				comicData: action.comicData
			};
		case FETCHING_COMICS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default comicReducer;
