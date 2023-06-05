import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
    fullname: Yup.string().required(),
    phone: Yup.string().required(),
});