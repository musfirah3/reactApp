export const CartReducer=(state,action)=>{
    switch (action.type) {
        case "AddToCart":
            return {...state}
            
    
        default:
           return {state};
    }
}