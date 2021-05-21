import { v4 as uuidv4 } from 'uuid';
import {
	GET_PRODUCTS_REQUEST,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILED,

	ADD_BUN,
	ADD_FILLINGS,
	DELETE_INGREDIENT,
	CURRENT_BURGER,
	INCREASE_INGREDIENT,
	DECREASE_INGREDIENT,

	CREATE_ORDER_REQUEST,
	CREATE_ORDER_SUCCESS,
	CREATE_ORDER_FAILED,

} from '../actions/ingredients';


const initialState = {
	isLoading: false,
	hasError: false,
	loaded: false,
	allIngredients: {},
	burgerIngredients: {
		bun: null,
		otherIngredients: [],
		counts: {}
	},
	currentOrder: null,
	currentBurger: null,
	orderRequest: false,
	orderFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST: {
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		}
		case GET_PRODUCTS_SUCCESS: {
			return { ...state, hasError: false, allIngredients: action.items, isLoading: false, loaded: true };
		}
		case GET_PRODUCTS_FAILED: {
			return { ...state, hasError: true, isLoading: false };
		}
		case CREATE_ORDER_REQUEST: {
			return {
				...state,
				orderRequest: true,
				orderFailed: false,
			};
		}
		case CREATE_ORDER_SUCCESS: {
			return { ...state, orderFailed: false, currentOrder: action.order, orderRequest: false };
		}
		case CREATE_ORDER_FAILED: {
			return { ...state, orderFailed: true, orderRequest: false };
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
			const newItem = { ...action.item, productId: uuidv4() }
			return {
				...state,
				burgerIngredients: {
					...state.burgerIngredients,
					otherIngredients: [...state.burgerIngredients.otherIngredients, newItem]
				}
			}
		}
		case DELETE_INGREDIENT: {
			return {
				...state,
				burgerIngredients: {
					...state.burgerIngredients,
					otherIngredients: [...state.burgerIngredients.otherIngredients].filter(el => el.productId !== action.id)
				}
			}
		}

		case CURRENT_BURGER: {
			return {
				...state,
				currentBurger: action.item
			}
		}
		case INCREASE_INGREDIENT: {
			return {
				...state,
				burgerIngredients: {
					...state.burgerIngredients,
					counts: {
						...state.burgerIngredients.counts,
						[action.key]: (state.burgerIngredients.counts[action.key] || 0) + 1

					}
				}
			}
		}
		case DECREASE_INGREDIENT: {
			return {
				...state,
				burgerIngredients: {
					...state.burgerIngredients,
					counts: {
						...state.burgerIngredients.counts,
						[action.key]: state.burgerIngredients.counts[action.key] - 1

					}
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
		// 
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