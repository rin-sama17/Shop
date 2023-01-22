import * as Yup from "yup";

export const userValidation = Yup.object().shape({
    fullname: Yup.string().required(),
    phone: Yup.string().required(),
});