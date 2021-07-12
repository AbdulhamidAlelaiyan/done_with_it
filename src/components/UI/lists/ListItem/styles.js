import { StyleSheet } from "react-native";

import colors from "../../../../config/colors";

export default StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    container: {
        flexDirection: "row",
        padding: 20,
    },
    info: {
        color: colors.grey,
        marginLeft: 15,
        justifyContent: "center",
    },
    listingTitle: {
        fontSize: 20,
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
    },
    listingDetails: {
        color: colors.grey,
        marginTop: 10,
        fontSize: 15,
    },
    overview: {
        flexDirection: "row",
        flex: 1,
    },
    rightIcon: {
        width: 25,
        height: 25,
        alignSelf: "center",
    },
});
