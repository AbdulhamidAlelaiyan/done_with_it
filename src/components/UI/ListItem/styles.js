import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

export default StyleSheet.create({
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    accountContainer: {
        flexDirection: "row",
        padding: 20,
    },
    listingDetails: {
        color: colors.grey,
    },
});
