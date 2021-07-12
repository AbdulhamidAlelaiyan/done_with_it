import React from "react";
import styles from "./styles";
import { AppForm, AppFormField, SubmitButton } from "../../components/UI/forms";
import Screen from "../../components/UI/Screen";

import validationSchema from "./ValidationSchema";

const RegisterScreen = () => {
    const submitRegisteration = () => {
        console.log();
    };

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                }}
                onSubmit={submitRegisteration}
                validationSchema={validationSchema}
            >
                <AppFormField name="name" icon="face" placeholder="Name" />
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
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
};

export default RegisterScreen;
