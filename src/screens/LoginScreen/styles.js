import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: colors.primary,
        width: "50%",
        alignSelf: "center",
        position: "absolute",
        bottom: 30,
    },
});
