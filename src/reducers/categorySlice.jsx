import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const categoryAdaptor = createEntityAdapter()
const initialState = categoryAdaptor.getInitialState({
  prents: [],
})

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/admin/categories')
      return res.data.data
    } catch (error) {
      console.error(error)
    }
  },
)

export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async ({ category, setOpen }) => {
    try {
      const res = await axios.post(
        'http://localhost:8000/api/admin/categories/store',
        { ...category, lang: 'fa' },
        { headers: { Accept: 'application/json' } },
      )
      if (res.status === 200) {
        setOpen(false)
        toast.success(res.data.message, { position: 'bottom-right' })
        return res.data.category
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message, { position: 'bottom-left' })
    }
  },
)

export const editCategory = createAsyncThunk(
  'categories/editCategory',
  async ({ category, setOpen }) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/api/admin/categories/update/${category.id}`,
        { ...category, lang: 'fa' },
        { headers: { Accept: 'application/json' } },
      )
      if (res.status === 200) {
        setOpen(false)
        toast.success(res.data.message, { position: 'bottom-right' })
        return res.data.category
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message, { position: 'bottom-left' })
    }
  },
)

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (categoryId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/admin/categories/delete/${categoryId}`,
        { categoryId, lang: 'fa' },
      )
      if (res.status === 200) {
        toast.success(res.data.message, { position: 'bottom-right' })
        return categoryId
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message, { position: 'bottom-left' })
    }
  },
)

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.fulfilled]: categoryAdaptor.setAll,
    [addCategory.fulfilled]: categoryAdaptor.addOne,
    [editCategory.fulfilled]: categoryAdaptor.setOne,
    [deleteCategory.fulfilled]: categoryAdaptor.removeOne,
  },
})

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
} = categoryAdaptor.getSelectors((state) => state.category)

export const { getChildren } = categorySlice.actions

export default categorySlice.reducer
