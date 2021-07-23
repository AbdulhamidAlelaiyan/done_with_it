import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../../AppButton";
import colors from "../../../../config/colors";

const SubmitButton = ({ style, ...otherProps }) => {
    const { handleSubmit } = useFormikContext();

    return (
        <>
            <AppButton
                style={[{ backgroundColor: colors.primary, style }]}
                onPress={handleSubmit}
                {...otherProps}
            />
        </>
    );
};

export default SubmitButton;
