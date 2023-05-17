import * as Yup from "yup";

export const adminValidation = Yup.object().shape({
    title: Yup.string().required(),
    details: Yup.string().required(),
    // addPost: Yup.boolean(),
    // editPost: Yup.boolean(),
});




