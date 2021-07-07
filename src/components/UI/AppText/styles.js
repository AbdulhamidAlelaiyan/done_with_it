import { Platform, StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 18,
        fontFamily: Platform.select({
            android: "monospace",
            ios: "Copperplate",
        }),
        color: colors.white,
        fontWeight: "700",
    },
});
