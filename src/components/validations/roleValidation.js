import * as Yup from "yup";

export const roleValidation = Yup.object().shape({
    title: Yup.string().required(),
    details: Yup.string().required(),
});




