import React from "react";
import AppText from "../../AppText";

import styles from "./styles";

const ErrorMessage = ({ error, visible }) => {
    if (!visible || !error) {
        return null;
    }

    return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;
