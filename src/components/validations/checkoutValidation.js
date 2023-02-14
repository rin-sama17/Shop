import * as Yup from "yup";

export const checkoutValidation = Yup.object().shape({
    fullName: Yup.string().required(),
    phone: Yup.string().required(),
    address: Yup.string().required()
});

