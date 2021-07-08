import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Screen = ({ children, style }) => (
    <View style={[styles.screen, style]}>{children}</View>
);

export default Screen;
