import React from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../../config/styles";

import styles from "./styles";

const AppTextInput = ({ icon, style, ...rest }) => {
    return (
        <View style={[styles.container, style]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.dark}
                    style={styles.icon}
                />
            )}
            <TextInput {...rest} style={styles.textInput} />
        </View>
    );
};

export default AppTextInput;
