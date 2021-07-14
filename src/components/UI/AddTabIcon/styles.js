import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: 25,
        height: 25,
        borderRadius: 12,
    },
    parentContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        width: 60,
        height: 60,
        borderRadius: 30,
        position: "relative",
        bottom: 20,
    },
});
