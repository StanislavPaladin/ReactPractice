const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
}

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_DELETED_FROM_CART',
        payload: id
    }
}

const searchInCart = (value) => {
    return {
        type: 'ITEM_SEARCH',
        payload: value
    }
}



export {
    menuLoaded,
    menuRequested,
    addedToCart,
    deleteFromCart,
    searchInCart
};