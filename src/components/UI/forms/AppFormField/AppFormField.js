import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../../AppTextInput";
import ErrorMessage from "../ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
    const { setFieldTouched, setFieldValue, values, errors, touched } =
        useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => {
                    setFieldTouched(name);
                }}
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormField;
