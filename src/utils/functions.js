export const filterArray = (arr) => {
	return arr.reduce((acc, curr) =>
	({
		...acc, [curr.type]: [...acc[curr.type] || [], curr]
	}), {})
}

export const calculationCost = (bun, arrOtherIngredients) => {
	return bun.price + arrOtherIngredients.reduce((acc, curr) => acc += curr.price, 0)
}