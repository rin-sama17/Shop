import * as Yup from "yup";

export const discountValidation = Yup.object().shape({
    name: Yup.string().required(),
    discount: Yup.number().integer().positive("تخفیف نمیتواند کمتر از صفر باشد").max(99, "تخفیف نمیتواند بیشتر از 99 درصد باشد").required(),
    category: Yup.string().required()
});