import * as Yup from "yup";

export const productValidation = Yup.object().shape({
    name: Yup.string().required(),
    price: Yup.number().positive().integer().required(),
    discount: Yup.number().integer().positive().max(100),
    details: Yup.string().required(),
    stock: Yup.number().required(),
    thumbnail: Yup.string().required(),
    photos: Yup.string(),
    category: Yup.string().required(),
    tags: Yup.string().required(),
});