import * as Yup from "yup";

export const roleValidation = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
});




