import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.select({
            android: StatusBar.currentHeight,
            ios: 0,
        }),
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 30,
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: 600,
    },
});
