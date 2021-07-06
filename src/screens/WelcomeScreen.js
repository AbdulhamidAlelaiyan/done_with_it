import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar,
} from "react-native";

import colors from "../config/colors";

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            source={require("../../assets/background.jpg")}
            style={styles.container}
        >
            <SafeAreaView style={[styles.container, styles.contentContainer]}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/logo-red.png")}
                />
                <Text>Sell What You Don't Need</Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.button, styles.login]}>
                        {/* <Text style={styles.buttonText}>Login</Text> */}
                        {/* TODO Next section */}
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.signup]}>
                        {/* <Text style={styles.buttonText}>Sign Up</Text> */}
                        {/* TODO Next section */}
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
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
    button: {
        width: "100%",
        height: 60,
        justifyContent: "center",
    },
    login: {
        backgroundColor: colors.primary,
    },
    signup: {
        backgroundColor: colors.secondary,
    },
    buttonsContainer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    buttonText: {
        textAlign: "center",
    },
});

export default WelcomeScreen;
