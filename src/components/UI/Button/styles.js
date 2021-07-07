import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
    button: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderRadius: 30,
        marginVertical: 10,
    },
    buttonText: {
        textTransform: "uppercase",
    },
});
