import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../../ImageInputList/ImageInputList.js";
import ErrorMessage from "../ErrorMessage";

const AppFormImagePicker = ({ name }) => {
    const { setFieldValue, errors, touched, values } = useFormikContext();

    const imageRemoved = (item) => {
        const filteredUris = values[name].filter((uri) => uri !== item);
        setFieldValue(name, filteredUris);
    };

    return (
        <>
            <ImageInputList
                onAddImage={(item) => {
                    setFieldValue(name, [...values[name], item]);
                }}
                onRemoveImage={imageRemoved}
                imageUris={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormImagePicker;
