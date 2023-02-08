import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    paragraphs: [
        { id: "dqwdqwdqwdqwd", title: "w", body: "ww", photo: "" }
    ],
    state: "idel",
    error: ""
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        paragraphAdded: {
            reducer(state, action) {
                state.paragraphs.push(action.payload);
            },
            prepare(
                values
            ) {
                const {
                    photo,
                    title,
                    body
                } = values;
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
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
            return state.paragraphs.filter((paragraph) => paragraph.id !== id);
        }
    },
});

export const getAllPosts = state => state.posts.posts;

export const getAllParagraph = state => state.posts.paragraphs;
export const getParagraphById =
    (state, paragraphId) => state.posts.paragraphs.find(paragraph => paragraph.id === paragraphId);

export const { paragraphAdded, paragraphDeleted, paragraphUpdated } = postSlice.actions;
export default postSlice.reducer;