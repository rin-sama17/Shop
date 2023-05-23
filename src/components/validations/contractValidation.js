import * as Yup from "yup";

export const contractValidation = Yup.object().shape({
    name: Yup.string().required(),
    photo: Yup.string().required(),
    address: Yup.string().required(),
    phone: Yup.string().required(),
    discription: Yup.string().required(),
});
