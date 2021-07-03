import { TIngredient } from '../../types'

export type TCountsIngredients = {
	[name: string]: number;
}

export type TIngredientWithProductId = TIngredient & { productId: string }

export type TBurgerIngredients = {
	bun: null | TIngredient;
	otherIngredients: Array<TIngredient>;
	counts: TCountsIngredients
}

export type TStoreIngredients = {
	isLoading: boolean;
	hasError: boolean;
	loaded: boolean;
	allIngredients: Array<TIngredient>;
	burgerIngredients: TBurgerIngredients;
	currentOrder: null | TIngredient;
	orderRequest: boolean;
	orderFailed: boolean
};

export type TProps = {
	onDropHandler: (item: TIngredient)
		=> void;
}