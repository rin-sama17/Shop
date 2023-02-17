import { createSlice, nanoid, createEntityAdapter, createAction } from '@reduxjs/toolkit';

const cartAdaptor = createEntityAdapter();

const setNewCart = () => {
    const id = nanoid();
    localStorage.setItem("cartId", id);
    return id;
};
const cartId = localStorage.getItem("cartId") ? localStorage.getItem("cartId") : setNewCart();
const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));


const initialState = cartAdaptor.getInitialState({
    cartId,
});

if (cartProducts) {

    console.log(cartProducts);
    console.log(cartAdaptor);

}


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




export const { cartItemAdded, cartItemDeleted, cartItemUpdated, cartItemsSeted } = cartSlice.actions;
export default cartSlice.reducer;