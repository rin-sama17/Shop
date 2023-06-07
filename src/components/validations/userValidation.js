import * as Yup from "yup";


export const userValidation = Yup.object().shape({
    phone: Yup.number().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
});