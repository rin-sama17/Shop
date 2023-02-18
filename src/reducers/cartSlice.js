import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdaptor = createEntityAdapter();
const initialState = cartAdaptor.getInitialState();



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartItemAdded: cartAdaptor.addOne,
        cartItemDeleted: cartAdaptor.removeOne,
        cartItemUpdated: cartAdaptor.updateOne,
        cartItemsSeted: (state, action) => {
            cartAdaptor.upsertMany(state, action.payload);
        },

    },

});



export const {
    selectAll: selectCartProducts,
    selectById: selectCartProduct,
} = cartAdaptor.getSelectors(state => state.cart);


export const selectCartId = state => state.cart.cartId;
export const { cartItemAdded, cartItemDeleted, cartItemUpdated, cartItemsSeted } = cartSlice.actions;
export default cartSlice.reducer;