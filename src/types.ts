import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from './store';
import { TAuthActions } from './services/actions/auth';
import { TIngredientsActions } from './services/actions/ingredients';
import { TWSActionsAuthActions } from './services/actions/ws-actions-auth';
import { TWSActionsActions } from './services/actions/ws-actions';

type TApplicationActions = TAuthActions | TIngredientsActions | TWSActionsAuthActions | TWSActionsActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
	ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;


export type TIngredient = {
	readonly _id: string;
	readonly name: string;
	readonly type: string;
	readonly proteins: number;
	readonly fat: number;
	readonly carbohydrates: number;
	readonly calories: number;
	readonly price: number;
	readonly image: string;
	readonly image_mobile: string;
	readonly image_large: string;
	readonly __v?: number;
}

export type TOrder = {
	createdAt: string;
	ingredients: Array<string>;
	name: string;
	number: number;
	status: string;
	updatedAt: string;
	_id: string;
}

export type TOrderInfo = {
	name: string;
	order: { number: number };
	success: boolean;
}

export type TUserData = {
	email: string;
	name?: string;
	password: string
}

export type TResetPassword = {
	password: string;
	token: string
}

type TInputName = 'name' | 'email' | 'password';

export type TUpdateUserData = {
	[fw in TInputName]: string;
}

export type TIngredientWithProductId = TIngredient
	& { productId: string }

export type TError = {
	success: boolean;
	message?: string
}

export type TUser = {
	name: string;
	email: string;
	password?: string;
}

export type TCountsIngredients = {
	[name: string]: number;
}

export type TBurgerIngredients = {
	bun: null | TIngredientWithProductId;
	otherIngredients: Array<TIngredientWithProductId>;
	counts: TCountsIngredients
}

