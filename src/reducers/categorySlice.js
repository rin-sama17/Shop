import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  createCategory,
  getAdminCategories,
  getAllCategories,
  handleErrors,
  removeCategory,
  updateCategory,
} from './services';

const categoryAdaptor = createEntityAdapter();
const initialState = categoryAdaptor.getInitialState({
  useAbleCategories: [],
  access: false,
  loading: false
});

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    try {
      const res = await getAllCategories();
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  },
);

export const fetchAdminCategories = createAsyncThunk(
  'categories/fetchAdminCategories',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAdminCategories();
      return res.data.data;
    } catch (error) {
      console.error(error);
      if (error.response.status === 403) {
        return rejectWithValue(error.response.data);
      }
    }
  },
);

export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async ({ values, setOpen, resetForm, setErrors }) => {
    try {
      const res = await createCategory(values);
      if (res.status === 200) {
        setOpen(false);
        resetForm();
        toast.success(res.data.message, { position: 'bottom-right' });
        return res.data.category;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
      handleErrors(error, setErrors);
    }
  },
);

export const editCategory = createAsyncThunk(
  'categories/editCategory',
  async ({ values, setOpen, resetForm }) => {
    try {
      const res = await updateCategory(values);
      if (res.status === 200) {
        if (setOpen && resetForm) {
          setOpen(false);
          resetForm();
        }
        toast.success(res.data.message, { position: 'bottom-right' });
        return res.data.category;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
    }
  },
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (categoryId) => {
    try {
      const res = await removeCategory(categoryId);
      if (res.status === 200) {
        toast.success(res.data.message, { position: 'bottom-right' });
        return categoryId;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
    }
  },
);

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getChildren: (state, action) => {
      state.entities.filter(c => c.id === action.payload);
    }
  },
  extraReducers: {
    [fetchAdminCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAdminCategories.fulfilled]: (state, action) => {
      state.access = true;
      state.loading = false;
      categoryAdaptor.setAll(state, action.payload);
    },
    [fetchAdminCategories.rejected]: (state, action) => {
      state.loading = false;
      state.access = false;
    },
    [fetchCategories.fulfilled]: (state, action) => {

      const categories = action.payload ?? [];
      let parentCategories = categories.filter(category => category.category_id === null);
      const parentIds = parentCategories.map(category => category.id);
      let childCategories = categories.filter(category => parentIds.includes(category.category_id));
      const childIds = childCategories.map(category => category.id);


      const useAbleCategoriesIds = [...parentIds, ...childIds];
      const filtredCategories = categories.filter(category => useAbleCategoriesIds.includes(category.id));

      state.useAbleCategories = filtredCategories;
      categoryAdaptor.setAll(state, categories);
    },
    [addCategory.fulfilled]: categoryAdaptor.addOne,
    [editCategory.fulfilled]: categoryAdaptor.setOne,
    [deleteCategory.fulfilled]: categoryAdaptor.removeOne,
  },
});

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
} = categoryAdaptor.getSelectors((state) => state.category);

export const selectUseAbleCategories = state => state.category.useAbleCategories;

export const selectCategoryLoading = state => state.category.loading;
export const selectCategoryAccess = state => state.category.access;

export const { getChildren } = categorySlice.actions;

export default categorySlice.reducer;
