import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    comments: [
        {
            id: nanoid(),
            date: new Date().toISOString(),
            title: "کاربر اول",
            body: "کامنت اول",
            peoductId: "A33k5GmVlnMlPo7ZM9Uaf"
            // userId: "",
        },
        {
            id: nanoid(),
            date: new Date().toISOString(),
            title: "کاربر دوم",
            body: "کامنت دوم",
            peoductId: "A33k5GmVllnMlPo7ZM9Uaf"
            // userId: "",
        }, {
            id: nanoid(),
            date: new Date().toISOString(),
            title: "کاربر سوم",
            body: "کامنت سوم",
            peoductId: "A33k5GmVlnMlPo7ZM9Uaf"
            // userId: "",
        }, {
            id: nanoid(),
            date: new Date().toISOString(),
            title: "کاربر چهارم",
            body: "کامنت چهارم",
            peoductId: "A33k5GmVlnMlPo7ZM9Uaf"
            // userId: "",
        },
    ],
    state: "idel",
    error: null
};

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
});

export default commentSlice.reducer;