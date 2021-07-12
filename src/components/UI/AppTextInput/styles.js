import { StyleSheet } from "react-native";
import defaultStyles from "../../../config/styles";

export default StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
    },
});
