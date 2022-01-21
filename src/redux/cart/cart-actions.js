import cartTypes from "./cart-types"

export const toggleCartDropdown = () => ({
    type: cartTypes.TOGGLE_CART_DROPDOWN
})

export const addItem = item => ({
    type: cartTypes.ADD_ITEMS,
    payload: item,
})

export const clearItem = item => ({
    type: cartTypes.CLEAR_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartTypes.REMOVE_ITEM,
    payload: item
})