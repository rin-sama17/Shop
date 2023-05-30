import * as Yup from "yup";

export const postValidation = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    thumbnail: Yup.string().required(),
    category_id: Yup.string().required(),
    tags: Yup.string().required(),
});
