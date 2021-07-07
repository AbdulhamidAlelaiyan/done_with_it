import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    contentContainer: {
        paddingTop: Platform.select({
            android: StatusBar.currentHeight,
            ios: 0,
        }),
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    buttonsContainer: {
        width: "85%",
        position: "absolute",
        bottom: 0,
        marginBottom: 25,
    },
    tagLine: {
        color: colors.black,
        marginTop: 15,
    },
});
