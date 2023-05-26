import * as Yup from "yup";

export const premissionValidation = Yup.object().shape({
    title: Yup.string().required(),
    details: Yup.string().required(),
});




