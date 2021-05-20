import { getProducts } from '../../utils/api';
import { filterArray } from '../../utils/functions';
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

export const INCREASE_INGREDIENT = 'INCREASE_INGREDIENT';
export const DECREASE_INGREDIENT = 'DECREASE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const ADD_BUN = 'ADD_BUN';
export const ADD_FILLINGS = 'ADD_FILLINGS';


export const TAB_SWITCH = 'TAB_SWITCH';

export const getIngredients = () => {
	return function (dispatch) {
		dispatch({
			type: GET_PRODUCTS_REQUEST
		})
		getProducts().then((res) => {
			const ingredientsObj = filterArray(res.data);
			if (res && res.success) {
				dispatch({
					type: GET_PRODUCTS_SUCCESS,
					items: ingredientsObj
				});
			} else {
				dispatch({
					type: GET_PRODUCTS_FAILED
				});
			}
		}).catch(err => {
			console.log(err)
			dispatch({
				type: GET_PRODUCTS_FAILED
			})
		})
	};
}

// setState({ ...state, hasError: false, isLoading: true });
// 	getProducts()
// 		.then((data) => {
// 			const lengthArray = data.data.length()
// 			const ingredientsObj = filterArray(data.data);
// 			setState({ ...state, allIngredients: ingredientsObj, isLoading: false, loaded: !!lengthArray })
// 		})
// 		.catch((err) => {
// 			setState({ ...state, hasError: true, isLoading: false });
// 		})
// }