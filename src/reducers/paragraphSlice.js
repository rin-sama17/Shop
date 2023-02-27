import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';



const paragraphAdaptor = createEntityAdapter();
const initialState = paragraphAdaptor.getInitialState();

const paragraphSlice = createSlice({
    name: "paragraphs",
    initialState,
    reducers: {
        paragraphsSeted: paragraphAdaptor.setAll,
        paragraphsRemoved: paragraphAdaptor.removeAll,
        paragraphAdded: paragraphAdaptor.upsertOne,
        paragraphUpdated: paragraphAdaptor.updateOne,
        paragraphDeleted: paragraphAdaptor.removeOne
    },

});



export const {
    selectAll: selectAllParagraph,
    selectById: selectParagraphById,
} = paragraphAdaptor.getSelectors(state => state.paragraphs);


export const { paragraphAdded, paragraphDeleted, paragraphUpdated, paragraphsSeted, paragraphsRemoved } = paragraphSlice.actions;

export default paragraphSlice.reducer;