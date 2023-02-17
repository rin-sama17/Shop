import { createSlice, nanoid, createEntityAdapter } from '@reduxjs/toolkit';

{/*
entitys:{
"jfijjwrjofj": { productId: "jfijjwrjofj", count: 5; },
"fwoeuiofrruio": { productId: "fwoeuiofrruio", count: 3; },
}
*/}

const cartAdaptor = createEntityAdapter({
    sortComparer: (a, b) => b.productId.localeCompare(a.productId)
});
const initialState = cartAdaptor.getInitialState({
    cartId: nanoid(),
});
// const initialState = {
//     cartId: nanoid(),
//     cart: []
// };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartItemAdded: cartAdaptor.addOne,
        cartItemDeleted: cartAdaptor.removeOne,
        cartItemUpdated: cartAdaptor.updateOne,
    }
});


export const {
    selectAll: selectCartProducts,
    selectById: selectCartProduct,
} = cartAdaptor.getSelectors(state => state.cart);


export const { cartItemAdded, cartItemDeleted, cartItemUpdated } = cartSlice.actions;
export default cartSlice.reducer;