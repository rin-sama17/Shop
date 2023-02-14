import * as Yup from "yup";
export const trackOrdersValidation = Yup.object().shape({
    cartId: Yup.string().required("این فیلد الزامی میباشد")
});