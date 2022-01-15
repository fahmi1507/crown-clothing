import cartTypes from "./cart-types"

export const toggleCartDropdown = () => ({
    type: cartTypes.TOGGLE_CART_DROPDOWN
})

export const addItem = item => ({
    type: cartTypes.ADD_ITEMS,
    payload: item,
})