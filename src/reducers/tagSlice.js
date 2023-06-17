
import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    getAllTags,
    createTag,
    removeTag,
    updateTag,
    handleErrors
} from './services';

const tagAdaptor = createEntityAdapter();
const initialState = tagAdaptor.getInitialState({
    tag_id: []
});

export const fetchTags = createAsyncThunk(
    'tag/fetchTags',
    async () => {
        try {
            const res = await getAllTags();
            return res.data.posts;
        } catch (error) {
            console.error(error);
        }
    },
);

export const addTag = createAsyncThunk(
    'tag/addTag',
    async ({ values, setOpen }) => {
        try {
            const res = await createTag(values);
            if (res.status === 200) {
                setOpen(false);
                toast.success(res.data.message, { position: 'bottom-right' });
                console.log(res);

                return res.data.tag;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const editTag = createAsyncThunk(
    'tag/editTag',
    async ({ values, setOpen, resetForm }) => {
        try {
            const res = await updateTag(values);
            if (res.status === 200) {
                setOpen(false);
                resetForm();
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.tag;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const deleteTag = createAsyncThunk(
    'tag/deleteTag',
    async (tagId) => {
        try {
            const res = await removeTag(tagId);
            if (res.status === 200) {
                toast.success(res.data.message, { position: 'bottom-right' });
                return tagId;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        tagAdded: () => (state, action) => {
            const existingTag = state.tag_id.find(tag => tag.name === action.payload.name);
            console.log(existingTag);
            if (existingTag) {
                toast.error("تگ نمیتواند تکراری باشد");
                return;
            }
            state.tag_id.push(action.payload);
        },
        tagIdAdded: (state, action) => {
            state.tag_id.push(action.payload);
        },
        tagIdDeleted: (state, action) => {
            const tagIndex = state.tag_id.findIndex(tag => tag === action.payload);
            state.tag_id.splice(tagIndex, 1);
        },
        tagDeleted: (state, action) => {
            const tagIndex = state.tag_id.findIndex(tag => tag === action.payload);
            state.tag_id.splice(tagIndex, 1);
        },
        tagIdsCleared: (state, action) => {
            state.tag_id.splice(0, state.tag_id.length);
        },
        tagsIdFinded: (state, action) => {
            const tagTags = action.payload;
            const tagIds = tagTags?.map(tag => tag.id);
            if (tagIds) {
                state.tag_id = tagIds;
            }

        }
    },

    extraReducers: {
        [fetchTags.fulfilled]: tagAdaptor.setAll,
        [addTag.fulfilled]: tagAdaptor.addOne,
        [editTag.fulfilled]: tagAdaptor.setOne,
        [deleteTag.fulfilled]: tagAdaptor.removeOne,
    }
});

export const {
    selectAll: selectAllTags,
    selectById: selectTagById,
} = tagAdaptor.getSelectors((state) => state.tag);

export const selectTag_id = state => state.tag.tag_id;
export const { tagIdDeleted, tagDeleted, tagAdded, tagIdAdded, tagIdsCleared, tagsIdFinded } = tagSlice.actions;
export default tagSlice.reducer;
