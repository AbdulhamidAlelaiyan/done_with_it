import React from "react";
import AppPicker from "../../AppPicker";
import ErrorMessage from "../ErrorMessage";
import { useFormikContext } from "formik";

const AppFormPicker = ({
    name,
    placeholder,
    items,
    PickerItemComponent,
    ...rest
}) => {
    const { setFieldValue, errors, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                selectedItem={values[name]}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                {...rest}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormPicker;
