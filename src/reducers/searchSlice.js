import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import {
    searchQuery
} from './services';

const searchAdaptor = createEntityAdapter();
const initialState = searchAdaptor.getInitialState({
    loading: false
});


export const fetchSearchResult = createAsyncThunk(
    'search/fetchSearchProduct',
    async ({ query, base }) => {
        try {
            const res = await searchQuery(query, base);
            console.log(res);
            if (res.status === 200) {
                return res.data.product;
            }
        } catch (error) {
            console.log(error);
        }

    }
);


const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSearchResult.pending]: state => { state.loading = true; },
        [fetchSearchResult.fulfilled]: (state, action) => {
            state.loading = false;
            searchAdaptor.setAll(state, action.payload);
        },
    }
});

export const {
    selectAll: selectSearchResults,
} = searchAdaptor.getSelectors((state) => state.search);


export const selectSearchLoading = state => state.search.loading;

export default searchSlice.reducer;
