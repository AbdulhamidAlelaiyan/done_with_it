import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../../screens/WelcomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";

import options from "./options";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={options.WelcomeScreen}
                name="Welcome"
                component={WelcomeScreen}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={options.LoginScreen}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={options.RegisterScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
