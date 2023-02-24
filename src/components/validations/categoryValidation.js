import * as Yup from "yup";

export const categoryValidation = Yup.object().shape({
    name: Yup.string().required(),
});