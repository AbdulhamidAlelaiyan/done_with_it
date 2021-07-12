import React from "react";
import { Image } from "react-native";

import Screen from "../../components/UI/Screen";
import { AppForm, AppFormField, SubmitButton } from "../../components/UI/forms";

import styles from "./styles";

import validationSchema from "./validationSchema";

const LoginScreen = ({ children, style, ...rest }) => {
    const submitLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../../assets/logo-red.png")}
            />
            <AppForm
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={submitLogin}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    textContentTy
                    secureTextEntry
                    name="password"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
};

export default LoginScreen;
