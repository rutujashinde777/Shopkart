import { createContext, useReducer } from "react";
import { redirectDocument } from "react-router-dom";

export const CartContext=createContext();

const initialState={cart:[]}
export function CartReducer(state,action){
    switch(action.type){
        case "Add_To_Cart":
            alert("Product added in cart")
        return{
            ...state,
            cart:[...state.cart,action.payload]
        }
        case "Remove_From_Cart":
            return{
                ...state,
                cart:state.cart.filter((_,index)=>index !=action.index)
            }
            case"Clear_Cart":
            return initialState;

        default:
            return state;
    }

}
export function CartProvider({children}){
    const [state,dispatch]=useReducer(CartReducer,initialState);

    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}