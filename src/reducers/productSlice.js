import { createSlice, nanoid, createEntityAdapter } from '@reduxjs/toolkit';

const productAdaptor = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
});
const initialState = productAdaptor.getInitialState({
    status: "idel",
    error: null
});
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // productAdded: {
        //     reducer(state, action) {
        //         state.products.push(action.payload);
        //     },
        //     prepare(
        //         values
        //     ) {
        //         const {
        //             name,
        //             price,
        //             discount,
        //             details,
        //             stock,
        //             thumbnail,
        //             photos,
        //             category,
        //             tags,
        //         } = values;
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 date: new Date().toISOString(),
        //                 name,
        //                 price,
        //                 discount,
        //                 details,
        //                 stock,
        //                 thumbnail,
        //                 photos,
        //                 category,
        //                 tags,
        //             },
        //         };
        //     },
        // },
    },
});


export const getProductComments = (state, productId) =>
    state.comments.comments.filter(comment => comment.peoductId === productId);


export const {
    selectAll: getAllProduct,
    selectById: getProductById,
    selectIds: getProductIds
} = productAdaptor.getSelectors(state => state.products);
export const { productAdded } = productSlice.actions;
export default productSlice.reducer;