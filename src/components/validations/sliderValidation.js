import * as Yup from "yup";


export const sliderValidation = Yup.object().shape({
    photo: Yup.string().required(),
    title: Yup.string().required(),
    link: Yup.string().required(),
});