import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import {
    searchQuery
} from './services';

const searchAdaptor = createEntityAdapter();
const initialState = searchAdaptor.getInitialState();


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
        [fetchSearchResult.fulfilled]: searchAdaptor.setAll,
    }
});

export const {
    selectAll: selectSearchResults,
} = searchAdaptor.getSelectors((state) => state.search);

export default searchSlice.reducer;
