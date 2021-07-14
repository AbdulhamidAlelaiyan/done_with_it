import React from "react";
import { SafeAreaView, View, ImageBackground, Image } from "react-native";
import AppButton from "../../components/UI/AppButton";

import AppText from "../../components/UI/AppText";

import styles from "./styles";

const WelcomeScreen = ({ navigation }) => {
    const goToLogin = () => {
        navigation.navigate("Login");
    };

    const goToRegister = () => {
        navigation.navigate("Register");
    };

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
                    <AppButton
                        title="Login"
                        color="primary"
                        onPress={goToLogin}
                    />

                    <AppButton
                        title="Sign Up"
                        color="secondary"
                        onPress={goToRegister}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default WelcomeScreen;
