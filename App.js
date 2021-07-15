import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Navigators:
import AuthNavigator from "./src/navigators/AuthNavigator/AuthNavigator";
import MainNavigator from "./src/navigators/MainNavigator";

import navigationTheme from "./src/navigators/navigationTheme";

export default function App() {
    return (
        <NavigationContainer theme={navigationTheme}>
            {/* <AuthNavigator /> */}
            <MainNavigator />
        </NavigationContainer>
    );
}
