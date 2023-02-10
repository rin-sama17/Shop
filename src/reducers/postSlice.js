import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    posts: [
        {
            paragraphs: [
                { id: "dqwdqwdqwdqwd", title: "پیدایش", body: "", photo: "" }
            ],
            category: "فروشگاه من",
            tags: "افتخارات/تاریخچه/فروشگاه",
            date: '2025-02-09T14:17:03.409Z',
            id: "dqwdqwdqwsdqwd",
            heading: "تاریخچه فروشگاه من",
            introduction: "فروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول میباشد همچنین با متریال یو ای دیزاین شده است", photo: ""
        }, {
            paragraphs: [
                { id: "dqwdqwddwqwdqwd", title: "پیدایش", body: "", photo: "" }
            ],
            category: "فروشگاه من",
            tags: "افتخارات/تاریخچه/فروشگاه",
            date: '2025-02-09T14:17:03.409Z',
            id: "dqwdqwdqwsdqwd",
            heading: "تاریخچه فروشگاه من",
            introduction: "فروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول میباشد همچنین با متریال یو ای دیزاین شده است", photo: ""
        },


    ],
    paragraphs: [],
    state: "idel",
    error: ""
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload);
            },
            prepare(
                values
            ) {
                const {
                    heading,
                    Introduction,
                    thumbnail,
                    category,
                    tags,
                    paragraphs,
                } = values;
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        heading,
                        Introduction,
                        thumbnail,
                        category,
                        tags,
                        paragraphs,
                    }
                };
            }
        },

        paragraphAdded: {
            reducer(state, action) {
                state.paragraphs.push(action.payload);
            },
            prepare(
                values
            ) {
                const {
                    photo,
                    title,
                    body
                } = values;
                return {
                    payload: {
                        id: nanoid(),
                        photo,
                        title,
                        body
                    },
                };
            },
        },
        paragraphUpdated: (state, action) => {
            const { id, title, body, photo } = action.payload;
            const existingParagraph = state.paragraphs.find((paragraph) => paragraph.id === id);

            if (existingParagraph) {
                existingParagraph.title = title;
                existingParagraph.body = body;
                existingParagraph.photo = photo;
            }

        },
        paragraphDeleted: (state, action) => {
            const { id } = action.payload;
            state.paragraphs = state.paragraphs.filter((paragraph) => paragraph.id !== id);
        }
    },
});

export const getAllPosts = state => state.posts.posts;

export const getAllParagraph = state => state.posts.paragraphs;
export const getParagraphById =
    (state, paragraphId) => state.posts.paragraphs.find(paragraph => paragraph.id === paragraphId);

export const getPostById = (state, postId) => state.posts.posts.find(post => post.id === postId);

export const { paragraphAdded, paragraphDeleted, paragraphUpdated, postAdded } = postSlice.actions;
export default postSlice.reducer;