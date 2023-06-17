import * as Yup from "yup";

export const tagValidation = Yup.object().shape({
    name: Yup.string().required(),
});




