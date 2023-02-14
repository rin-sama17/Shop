import * as Yup from "yup";
export const cartValidation = Yup.object().shape({
    cartId: Yup.string().required("این فیلد الزامی میباشد")
});