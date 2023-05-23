import * as Yup from "yup";

export const accessValidation = Yup.object().shape({
    title: Yup.string().required(),
    details: Yup.string().required(),
});




