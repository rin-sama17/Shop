import * as Yup from "yup";

export const premissionValidation = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
});




