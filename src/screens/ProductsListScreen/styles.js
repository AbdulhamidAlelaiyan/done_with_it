import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.beige,
        justifyContent: "center",
        alignItems: "center",
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
    },
    errorText: {
        color: "red",
        fontSize: 20,
        marginBottom: 20,
    },
    loader: {
        width: 200,
        height: 200,
    },
});
