import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    getAllPosts,
    createPost,
    removePost,
    updatePost,
    convertToForm,
    getOnePost,
} from './services';

const postAdaptor = createEntityAdapter();
const initialState = postAdaptor.getInitialState({
    loading: false,
    access: false
});

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const res = await getAllPosts();
            return res.data.data[0];
        } catch (error) {
            console.error(error);
            if (error.response.status === 403) {
                return rejectWithValue(error.response.data);
            }
        }
    },
);



export const addPost = createAsyncThunk(
    'post/addPost',
    async ({ values, setOpen, resetForm }) => {
        const formData = convertToForm(values);
        try {
            const res = await createPost(formData);
            if (res.status === 200) {
                setOpen(false);
                resetForm();
                toast.success(res.data.data.message, { position: 'bottom-right' });
                return res.data.data.post;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const editPost = createAsyncThunk(
    'post/editPost',
    async ({ values, setOpen, resetForm }) => {
        console.log(values);
        const formData = convertToForm(values);
        try {
            const res = await updatePost(formData, values.id);
            if (res.status === 200) {
                if (setOpen && resetForm) {
                    setOpen(false);
                    resetForm();
                }
                console.log(res);
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const deletePost = createAsyncThunk(
    'post/deletePost',
    async (postId) => {
        try {
            const res = await removePost(postId);
            if (res.status === 200) {
                toast.success(res.data.message, { position: 'bottom-right' });
                return postId;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.loading = true;
        },
        [fetchPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.access = true;
            postAdaptor.setAll(state, payload);
        },
        [fetchPosts.rejected]: (state, action) => {
            state.loading = false;
            state.access = false;
        },
        [addPost.fulfilled]: postAdaptor.addOne,
        [editPost.fulfilled]: (state, { payload }) => {
            const post = payload.post;
            const tags = payload.tags;
            const editedPost = {
                ...post,
                tags
            };
            postAdaptor.setOne(state, editedPost);
        },
        [deletePost.fulfilled]: postAdaptor.removeOne,

    },
});

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
} = postAdaptor.getSelectors((state) => state.post);


export const selectPostDetails = state => state.post;

export default postSlice.reducer;
