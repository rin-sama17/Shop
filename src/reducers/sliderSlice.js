import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
    createSelector,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    getAllSliders,
    createSlider,
    removeSlider,
    updateSlider,
    convertToForm,
} from './services';

const sliderAdaptor = createEntityAdapter();
const initialState = sliderAdaptor.getInitialState();

export const fetchSliders = createAsyncThunk(
    'slider/fetchSliders',
    async () => {
        try {
            const res = await getAllSliders();
            return res.data.slider;
        } catch (error) {
            console.error(error);
        }
    },
);

export const addSlider = createAsyncThunk(
    'slider/addSlider',
    async ({ values, setOpen, resetForm }) => {
        const formData = convertToForm(values);
        try {
            const res = await createSlider(formData);
            if (res.status === 200) {
                setOpen(false);
                resetForm();
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.slider;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const editSlider = createAsyncThunk(
    'slider/editSlider',
    async ({ values, setOpen, resetForm }) => {
        const formData = convertToForm(values);
        try {
            const res = await updateSlider(formData);
            if (res.status === 200) {
                setOpen(false);
                resetForm();
                toast.success(res.data.message, { position: 'bottom-right' });
                console.log(res);
                return res.data.slider;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const deleteSlider = createAsyncThunk(
    'slider/deleteSlider',
    async (sliderId) => {
        try {
            const res = await removeSlider(sliderId);
            if (res.status === 200) {
                toast.success(res.data.message, { position: 'bottom-right' });
                return sliderId;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSliders.fulfilled]: sliderAdaptor.setAll,
        [addSlider.fulfilled]: sliderAdaptor.addOne,
        [editSlider.fulfilled]: sliderAdaptor.setOne,
        [deleteSlider.fulfilled]: sliderAdaptor.removeOne,
    },
});

export const {
    selectAll: selectAllSliders,
    selectById: selectSliderById,
} = sliderAdaptor.getSelectors((state) => state.slider);


export default sliderSlice.reducer;
