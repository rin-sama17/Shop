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
} from './services';

const postAdaptor = createEntityAdapter();
const initialState = postAdaptor.getInitialState();

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async () => {
        try {
            const res = await getAllPosts();
            return res.data.posts;
        } catch (error) {
            console.error(error);
        }
    },
);

export const addPost = createAsyncThunk(
    'post/addPost',
    async ({ values, setOpen }) => {
        const formData = convertToForm(values);
        try {
            console.log(formData);
            const res = await createPost(formData);
            if (res.status === 200) {
                setOpen(false);
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.post;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const editPost = createAsyncThunk(
    'post/editPost',
    async ({ values, setOpen }) => {
        try {
            const res = await updatePost(values);
            if (res.status === 200) {
                setOpen(false);
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.post;
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
        [fetchPosts.fulfilled]: postAdaptor.setAll,
        // [addPost.fulfilled]: postAdaptor.addOne,
        [editPost.fulfilled]: postAdaptor.setOne,
        [deletePost.fulfilled]: postAdaptor.removeOne,
    },
});

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
} = postAdaptor.getSelectors((state) => state.post);


export default postSlice.reducer;
