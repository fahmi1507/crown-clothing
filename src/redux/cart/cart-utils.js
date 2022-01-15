export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => (item.id === itemToAdd.id));

    if (existingItem) {
        return cartItems.map(item => (
            item.id === itemToAdd.id ?
            { ...item, qty: item.qty + 1 } 
            : item
        ))
    }

    return [...cartItems, { ...itemToAdd, qty: 1 }]
}