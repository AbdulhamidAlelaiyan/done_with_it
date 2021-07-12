import React from "react";
import { View } from "react-native";
import colors from "../../../config/colors";
import styles from "./styles";

const Icon = ({
    color = colors.white,
    iconColor = "white",
    name,
    IconComponent,
    size = 35,
    style,
}) => {
    return (
        <View style={[styles.container, { backgroundColor: color }, style]}>
            <IconComponent color={iconColor} name={name} size={size} />
        </View>
    );
};

export default Icon;
