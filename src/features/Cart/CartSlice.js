import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState :{
    showMiniCart: false,
        cartItems: [],
       
},
    reducers: {
         showMiniCart(state) {
            state.showMiniCart = true;
        },

        hideMiniCart(state) {
            state.showMiniCart = false;
        },
        addToCart(state, action) {
            const newItem = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);
            if (index >= 0) {
                state.cartItems[index].quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem)
            }
        },
        setQuantity(state, action) {
            const { id, quantity } = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === id)
            if (index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },
        removeFromCart(state, action) {
            
            const {id} = action.payload;
            state.cartItems = state.cartItems.filter((x) => x.id !== id)
        },
        decreaseQuantity(state, action) {
            const itemQuantity = action.payload;
            const itemIndex = state.cartItems.findIndex((x) => x.id === itemQuantity.id)
            if(state.cartItems[itemIndex].quantity > 1){
               state.cartItems[itemIndex].quantity -= 1; 
            }
        },
         increaseQuantity(state, action) {
            const itemQuantity = action.payload;
            const itemIndex = state.cartItems.findIndex((x) => x.id === itemQuantity.id)
            if(state.cartItems[itemIndex].quantity >= 1){
               state.cartItems[itemIndex].quantity += 1; 
            }
        },

    },
});
const { actions, reducer } = cartSlice;
export const {showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart, decreaseQuantity, increaseQuantity} = actions;
export default reducer