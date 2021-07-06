import React from "react";
import { StyleSheet, View } from "react-native";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <WelcomeScreen />
            {/* <ViewImageScreen /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
