import * as Yup from "yup";

export const productValidation = Yup.object().shape({
    name: Yup.string().required(),
    price: Yup.string().required(),
    discount: Yup.number().integer().positive("تخفیف نمیتواند کمتر از صفر باشد").max(99, "تخفیف نمیتواند بیشتر از 99 درصد باشد"),
    details: Yup.string().required(),
    stock: Yup.number().required(),
    thumbnail: Yup.string().required(),
    category: Yup.string().required(),
    tags: Yup.string().required(),
});