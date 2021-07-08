import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Icon = ({ color, name, IconComponent, size }) => (
    <View style={[styles.container, { backgroundColor: color }]}>
        <IconComponent color="white" name={name} size={size} />
    </View>
);

export default Icon;
