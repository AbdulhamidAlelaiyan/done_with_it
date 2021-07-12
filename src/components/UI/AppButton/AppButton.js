import React from "react";
import { TouchableOpacity } from "react-native";

import AppText from "../AppText";

import colors from "../../../config/colors";
import styles from "./styles";

const AppButton = (props) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: colors[props.color] },
                props.style,
            ]}
            activeOpacity={0.8}
            onPress={props.onPress ?? (() => console.log("Button clicked!"))}
        >
            <AppText style={styles.buttonText}>{props.title}</AppText>
        </TouchableOpacity>
    );
};

export default AppButton;
