import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Navigators:
import AuthNavigator from "./src/navigators/AuthNavigator/AuthNavigator";
import MainNavigator from "./src/navigators/MainNavigator";

export default function App() {
    return (
        <NavigationContainer>
            {/* <AuthNavigator /> */}
            <MainNavigator />
        </NavigationContainer>
    );
}
