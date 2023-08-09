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
    handleErrors,
} from './services';

const sliderAdaptor = createEntityAdapter();
const initialState = sliderAdaptor.getInitialState({
    headerPhoto: null,
    loading: false,
    access: false,
});

export const fetchSliders = createAsyncThunk(
    'slider/fetchSliders',
    async (_, { rejectWithValue }) => {
        try {
            const res = await getAllSliders();
            return res.data.data.sliders;
        } catch (error) {
            console.error(error);
            if (error.response.status === 403) {
                return rejectWithValue(error.response.data);
            }
        }
    },
);

export const addSlider = createAsyncThunk(
    'slider/addSlider',
    async ({ values, setOpen, resetForm, setErrors, isHeader }) => {
        const formData = convertToForm(values);
        try {
            const res = await createSlider(formData);
            if (res.status === 200) {
                setOpen(false);
                resetForm();
                toast.success(res.data.data.message, { position: 'bottom-right' });
                if (isHeader) {
                    return {
                        isHeader,
                        data: res.data.data.slider
                    };
                }
                return res.data.data.slider;
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
            handleErrors(error, setErrors);
        }
    },
);

export const editSlider = createAsyncThunk(
    'slider/editSlider',
    async ({ values, setOpen, resetForm, isHeader }) => {
        const formData = convertToForm(values);
        try {
            const res = await updateSlider(formData, values.id);
            if (res.status === 200) {
                if (setOpen && resetForm) {
                    setOpen(false);
                    resetForm();
                }
                toast.success(res.data.message, { position: 'bottom-right' });
                if (isHeader) {
                    return {
                        isHeader,
                        data: res.data.post
                    };
                }
                return res.data.post;
            }
        } catch (error) {
            console.error(error);
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
            console.error(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSliders.pending]: state => { state.loading = true; },
        [fetchSliders.fulfilled]: (state, action) => {
            const sliders = action.payload?.filter(slider => slider.type != 3);
            const headerPhoto = action.payload?.find(slider => slider.type == 3);
            sliderAdaptor.setAll(state, sliders);
            state.headerPhoto = headerPhoto;

            state.access = true;
            state.loading = false;
        },
        [fetchSliders.rejected]: (state, action) => {
            state.loading = false;
            state.access = false;
        },
        [addSlider.fulfilled]: (state, { payload }) => {
            if (payload.isHeader) {
                state.headerPhoto = payload.data;
            } else {
                sliderAdaptor.addOne(state, payload);
            }
        },
        [editSlider.fulfilled]: (state, { payload }) => {
            if (payload.isHeader) {
                state.headerPhoto = payload.data;
            } else {
                sliderAdaptor.setOne(state, payload);
            }
        },
        [deleteSlider.fulfilled]: (state, action) => {
            const sliderId = action.payload;
            const headerPhoto = state.headerPhoto;
            if (headerPhoto && headerPhoto.id == sliderId) {
                state.headerPhoto = null;
            } else {
                sliderAdaptor.removeOne(state, action.payload);
            }
        },
    },
});

export const {
    selectAll: selectAllSliders,
    selectById: selectSliderById,
} = sliderAdaptor.getSelectors((state) => state.slider);

export const selectHeaderPhoto = state => state.slider.headerPhoto;

export const selectSliderDetails = state => state.slider;

export default sliderSlice.reducer;
