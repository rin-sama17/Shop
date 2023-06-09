import * as Yup from "yup";

export const agencyValidation = Yup.object().shape({
    name: Yup.string().required(),
    image: Yup.string().required(),
    address: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().email().required(),
    discription: Yup.string().required(),
});
