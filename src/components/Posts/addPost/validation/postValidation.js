import * as Yup from "yup";

export const postValidation = Yup.object().shape({
    heading: Yup.string().required(),
    introduction: Yup.string().required(),
    thumbnail: Yup.string().required(),
    category: Yup.string().required(),
    tags: Yup.string().required(),
    paragraphs: Yup.array().length(1, "پست باید دارای حداقل یک پاراگراف باشد")
});

export const paragraphValidation = Yup.object().shape({
    photo: Yup.string(),
    title: Yup.string().required(),
    body: Yup.string().required(),
});