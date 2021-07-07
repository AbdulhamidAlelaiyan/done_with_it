import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: "hidden",
    },
    cardImage: {
        width: "100%",
        height: 250,
    },
    textContainer: {
        margin: 15,
    },
    text: {
        lineHeight: 25,
    },
    price: {
        color: colors.secondary,
    },
});
