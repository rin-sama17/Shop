import * as Yup from "yup";

export const adminValidation = Yup.object().shape({
    fullName: Yup.string().required(),
    phone: Yup.string().required(),
    password: Yup.string().required()
});