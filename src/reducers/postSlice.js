import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import { createPost, getAllPosts } from '../../services/shopService';

const initialState = {
    posts: [],
    paragraphs: [],
    status: "idel",
    error: null
};


export const fetchPosts = createAsyncThunk(
    "/posts/fetchPosts",
    async () => {
        const response = await getAllPosts();
        return response.data;
    }
);

export const addNewPost = createAsyncThunk(
    "/posts/addPost",
    async (initialPost) => {
        const response = await createPost(initialPost);
        return response.data;
    }
);


const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        paragraphAdded: {
            reducer(state, action) {
                state.paragraphs.push(action.payload);
            },
            prepare(values) {
                const {
                    photo,
                    title,
                    body
                } = values;
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, _) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "completed";
                state.posts.push(action.payload);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            });
    }
});

export const selectAllPosts = state => state.posts.posts;

export const selectAllParagraph = state => state.posts.paragraphs;

export const selectParagraphById =
    (state, paragraphId) => state.posts.paragraphs.find(paragraph => paragraph.id === paragraphId);

export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId);

export const { paragraphAdded, paragraphDeleted, paragraphUpdated, postAdded } = postSlice.actions;

export default postSlice.reducer;