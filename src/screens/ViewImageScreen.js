import React from "react";
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform,
    StatusBar,
} from "react-native";

import colors from "../config/colors";

const ViewImageScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.closeButton]} />
                <TouchableOpacity
                    style={[styles.button, styles.deleteButton]}
                />
            </View>
            <Image
                style={styles.image}
                source={require("../../assets/chair.jpg")}
                resizeMode="contain"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
    button: {
        width: 50,
        height: 50,
    },
    closeButton: {
        backgroundColor: colors.primary,
    },
    deleteButton: {
        backgroundColor: colors.secondary,
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: 600,
    },
});

export default ViewImageScreen;
