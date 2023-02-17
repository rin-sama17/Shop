import { createAsyncThunk, createSlice, nanoid, createEntityAdapter } from '@reduxjs/toolkit';



const postAdaptor = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
});

const initialState = postAdaptor.getInitialState({
    paragraphs: [],
});





const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        paragraphAdded: {
            reducer(state, action) {
                state.paragraphs.push(action.payload);
            },
            prepare(values) {
                const { photo, title, body } = values;
                return {
                    payload: {
                        id: nanoid(),
                        photo,
                        title,
                        body
                    },
                };
            },
        },
        paragraphUpdated: (state, action) => {
            const { id, title, body, photo } = action.payload;
            const existingParagraph = state.paragraphs.find((paragraph) => paragraph.id === id);

            if (existingParagraph) {
                existingParagraph.title = title;
                existingParagraph.body = body;
                existingParagraph.photo = photo;
            }

        },
        paragraphDeleted: (state, action) => {
            const { id } = action.payload;
            state.paragraphs = state.paragraphs.filter((paragraph) => paragraph.id !== id);
        }
    },

});


export const selectAllParagraph = state => state.posts.paragraphs;
export const selectParagraphById =
    (state, paragraphId) => state.posts.paragraphs.find(paragraph => paragraph.id === paragraphId);


export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
} = postAdaptor.getSelectors(state => state.posts);


export const { paragraphAdded, paragraphDeleted, paragraphUpdated, postAdded } = postSlice.actions;

export default postSlice.reducer;