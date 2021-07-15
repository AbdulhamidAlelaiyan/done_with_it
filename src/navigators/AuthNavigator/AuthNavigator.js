import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../../screens/WelcomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";

import options from "./options";
import routes from "./routes";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.WELCOME}
                component={WelcomeScreen}
                options={options.WelcomeScreen}
            />
            <Stack.Screen
                name={routes.LOGIN}
                component={LoginScreen}
                options={options.LoginScreen}
            />
            <Stack.Screen
                name={routes.REGISTER}
                component={RegisterScreen}
                options={options.RegisterScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
