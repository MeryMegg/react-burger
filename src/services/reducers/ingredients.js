
import {
	GET_PRODUCTS_REQUEST,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILED,

	ADD_BUN,
	ADD_FILLINGS,
	DELETE_INGREDIENT,
} from '../actions/ingredients';


const initialState = {
	isLoading: false,
	hasError: false,
	loaded: false,
	allIngredients: {},
	burgerIngredients: {
		bun: null,
		otherIngredients: []
	},
	currentOrder: {},
	currentBurger: {}
};

export const ingredientsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST: {
			return {
				...state,
				isLoading: true,
				feedFailed: false,
			};
		}
		case GET_PRODUCTS_SUCCESS: {
			return { ...state, hasError: false, allIngredients: action.items, isLoading: false, loaded: true };
		}
		case GET_PRODUCTS_FAILED: {
			return { ...state, hasError: true, isLoading: false };
		}
		case ADD_BUN: {
			return {
				...state,
				burgerIngredients: {
					...state.burgerIngredients,
					bun: action.item
				}
			}
		}
		case ADD_FILLINGS: {
			return {
				...state,
				burgerIngredients: {
					...state.burgerIngredients,
					otherIngredients: [...state.burgerIngredients.otherIngredients, action.item]
				}
			}
		}
		case DELETE_INGREDIENT: {
			return {
				...state,
				burgerIngredients: {
					...state.burgerIngredients,
					otherIngredients: [...state.burgerIngredients.otherIngredients].filter(el => el._id !== action._id)
				}
			}
		}
		// case TAB_SWITCH: {
		// 	return {
		// 		...state,
		// 		currentTab: state.currentTab === 'items' ? 'postponed' : 'items'
		// 	};
		// }
		// case GET_RECOMMENDED_ITEMS_REQUEST: {
		// 	return {
		// 		...state,
		// 		recommendedItemsRequest: true
		// 	};
		// }
		// case GET_RECOMMENDED_ITEMS_SUCCESS: {
		// 	return {
		// 		...state,
		// 		recommendedItemsFailed: false,
		// 		recommendedItems: action.items,
		// 		recommendedItemsRequest: false
		// 	};
		// }
		// case GET_RECOMMENDED_ITEMS_FAILED: {
		// 	return { ...state, recommendedItemsFailed: true, recommendedItemsRequest: false };
		// }
		// case INCREASE_ITEM: {
		// 	return {
		// 		...state,
		// 		items: [...state.items].map(item =>
		// 			item.id === action.id ? { ...item, qty: ++item.qty } : item
		// 		)
		// 	};
		// }
		// case DECREASE_ITEM: {
		// 	return {
		// 		...state,
		// 		items: [...state.items].map(item =>
		// 			item.id === action.id ? { ...item, qty: --item.qty } : item
		// 		)
		// 	};
		// }
		// 
		// case APPLY_PROMO_FAILED: {
		// 	return {
		// 		...state,
		// 		promoRequest: false,
		// 		promoFailed: true,
		// 		promoDiscount: null,
		// 		promoCode: ''
		// 	};
		// }
		// case APPLY_PROMO_REQUEST: {
		// 	return {
		// 		...state,
		// 		promoFailed: false,
		// 		promoRequest: true
		// 	};
		// }
		// case APPLY_PROMO_SUCCESS: {
		// 	return {
		// 		...state,
		// 		promoRequest: false,
		// 		promoCode: action.value.code,
		// 		promoDiscount: action.value.discount
		// 	};
		// }
		// case CANCEL_PROMO: {
		// 	return {
		// 		...state,
		// 		promoCode: '',
		// 		promoDiscount: null
		// 	};
		// }
		default: {
			return state;
		}
	}
};


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