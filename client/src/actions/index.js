import * as types from './types';
import api_key from '../utils/api_key';
import endpoint from '../utils/endpoints';
import regeneratorRuntime from 'regenerator-runtime';
import md5 from 'js-md5';

console.log(api_key);

const ts = Number(new Date());
const hash = md5.create();
hash.update(ts + api_key.PRIVATE_KEY + api_key.PUBLIC_KEY);

export const getComics = () => async (dispatch) => {
	dispatch({ type: types.FETCHING_COMICS });

	try {
		// const response1 = await endpoint.get(
		// 	`characters?ts=${ts}&name=captain%20america&apikey=${api_key.PUBLIC_KEY}&hash=${hash}`
		// );
		const response = await endpoint.get(`comics?ts=${ts}&apikey=${api_key.PUBLIC_KEY}&hash=${hash}`);

		// console.log(response1.data.data.results);

		dispatch({
			type: types.FETCHING_COMICS_SUCCESS,
			comicData: response.data.data.results
		});
	} catch (err) {
		dispatch({
			type: types.FETCHING_COMICS_FAILURE,
			error: err.toString()
		});
	}
};
