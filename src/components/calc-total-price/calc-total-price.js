export const calcTotalPrice = items => items.reduce((acc, product) => acc += product.price, 0)
