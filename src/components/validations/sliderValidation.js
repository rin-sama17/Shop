import * as Yup from "yup";


export const sliderValidation = Yup.object().shape({
    thumbnail: Yup.string().required(),
    title: Yup.string().required(),
    link: Yup.string().url().required(),
});