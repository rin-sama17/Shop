import * as Yup from "yup";

export const descriptionValidation = Yup.object().shape({
    aboutUs: Yup.string().required(),
    contactUs: Yup.string().required(),
});