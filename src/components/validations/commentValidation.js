import * as Yup from "yup";

export const commentValidation = Yup.object().shape({
    name: Yup.string(),
    body: Yup.string().required()
});