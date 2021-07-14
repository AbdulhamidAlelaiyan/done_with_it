import * as Yup from "yup";

export default Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    imageUris: Yup.array()
        .min(1, "Please Select at least one image.")
        .required()
        .label("Image"),
});
