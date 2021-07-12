import React from "react";
import { SafeAreaView, View, ImageBackground, Image } from "react-native";

import AppText from "../../components/UI/AppText";
import AppButton from "../../components/UI/AppButton";

import styles from "./styles";

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            source={require("../../../assets/background.jpg")}
            style={styles.container}
            blurRadius={5}
        >
            <SafeAreaView style={[styles.container, styles.contentContainer]}>
                <Image
                    style={styles.logo}
                    source={require("../../../assets/logo-red.png")}
                />
                <AppText style={styles.tagLine}>
                    Sell What You Don't Need
                </AppText>

                <View style={styles.buttonsContainer}>
                    <Button title="Login" color="primary" />

                    <Button title="Sign Up" color="secondary" />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default WelcomeScreen;
