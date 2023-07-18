export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload] };

        case "CLEAR_CART":
            return { ...state , cart : []}

        case "DELETE_PRODUCT":
            return {...state,cart:[state?.cart?.filter((item) => item !== action.payload)]}
        default:
            return state
    }

}